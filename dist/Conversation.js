'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Messages = require('./Messages');

var _Messages2 = _interopRequireDefault(_Messages);

var _Typing = require('./Typing');

var _Typing2 = _interopRequireDefault(_Typing);

var _ImageLoader = require('./ImageLoader');

var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

var _aphrodite = require('aphrodite');

var _objectAssignDeep = require('object-assign-deep');

var _objectAssignDeep2 = _interopRequireDefault(_objectAssignDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyle = {
  conversation: {
    position: 'relative',
    overflow: 'hidden',
    height: '300px'
  },
  noTyping: {
    height: '8%'
  },
  inbound: {
    position: 'absolute',
    left: '4%',
    width: '10%',
    height: '8%'
  },
  outbound: {
    position: 'absolute',
    right: '4%',
    width: '10%',
    height: '8%'
  },
  messages: {
    height: '92%',
    position: 'relative'
  }
};

var typingStyles = {
  dot: {
    borderColor: '#3b5998'
  }
};

var Conversation = function (_React$Component) {
  (0, _inherits3.default)(Conversation, _React$Component);

  function Conversation(props, context) {
    (0, _classCallCheck3.default)(this, Conversation);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Conversation.__proto__ || (0, _getPrototypeOf2.default)(Conversation)).call(this, props, context));

    _this.showMessage = function () {
      var messages = _this.state.messages;
      var messagesToBeDisplayed = _this.state.messagesToBeDisplayed;
      var reset = _this.state.reset;
      if (_this.state.messagesToBeDisplayed.length > 0) {
        var message = _this.state.messagesToBeDisplayed.shift();
        var isTyping = _this.state.isTyping;
        var inbound = _this.state.inbound;
        if (message.type === 'typing') {
          isTyping = true;
          inbound = message.inbound;
        } else {
          messages.push(message);
          isTyping = false;
        }
        var onDisplay = undefined;
        if (message.onDisplay) {
          onDisplay = message.onDisplay.bind(null, message.id);
        }
        _this.setState((0, _extends3.default)({}, _this.state, {
          messages: messages,
          messagesToBeDisplayed: messagesToBeDisplayed,
          isTyping: isTyping,
          inbound: inbound,
          reset: reset
        }), onDisplay);
        _this.timeoutId = setTimeout(_this.showMessage, message.duration || 800);
      } else if (!_this.state.turnOffLoop) {
        _this.setState((0, _extends3.default)({}, _this.state, {
          messagesToBeDisplayed: _this.state.originalMessagesToBeDisplayed.slice(),
          messages: _this.state.historicMessages.slice(),
          isTyping: false,
          inbound: true,
          reset: !reset
        }));
        _this.timeoutId = setTimeout(_this.showMessage, _this.state.startingDelay);
      }
    };

    _this.paneDidMount = function (node) {
      if (node && _this.state.isScrollable) {
        node.addEventListener('wheel', function (event) {
          var mouseMoveY = event.deltaY;
          var conversationDisplayElement = node;
          var scrollElement = node.children[0];
          var messagesElement = node.children[0].children[1];
          var heightOfDisplay = conversationDisplayElement.getBoundingClientRect().height;
          var bottomOfDisplay = conversationDisplayElement.getBoundingClientRect().bottom;
          var heightOfActualMessages = messagesElement.getBoundingClientRect().height;
          var scrollElementClientRect = scrollElement.getBoundingClientRect();
          var scrollElementTopOfMessages = scrollElementClientRect.top;

          var maxTop = heightOfDisplay - bottomOfDisplay;
          var minTop = (heightOfActualMessages - heightOfDisplay) * -1;

          var isScrollingEnabled = heightOfActualMessages > heightOfDisplay;

          if (isScrollingEnabled) {
            var topPixels = void 0;
            if (mouseMoveY < 0) {
              var isScrollAmountAboveTopMessage = maxTop < scrollElementTopOfMessages - mouseMoveY;
              if (isScrollAmountAboveTopMessage) {
                topPixels = maxTop;
              } else {
                var topElementToBeMoved = scrollElementTopOfMessages - mouseMoveY;
                topPixels = isScrollAmountAboveTopMessage ? maxTop : topElementToBeMoved;
              }
            } else {
              var isScrollAmountBelowBottomMessage = minTop > scrollElementTopOfMessages - mouseMoveY + maxTop;
              if (isScrollAmountBelowBottomMessage) {
                topPixels = minTop;
              } else {
                var _topElementToBeMoved = scrollElementTopOfMessages - mouseMoveY + maxTop;
                topPixels = isScrollAmountBelowBottomMessage ? minTop : _topElementToBeMoved;
              }
            }
            scrollElement.style.top = topPixels + 'px';
          }
        });
      }
    };

    _this.state = {
      startingDelay: props.delay || 1000,
      messages: props.historicMessages ? props.historicMessages.slice() : [],
      historicMessages: props.historicMessages ? props.historicMessages.slice() : [],
      messagesToBeDisplayed: props.messages.slice(),
      originalMessagesToBeDisplayed: props.messages.slice(),
      isScrollable: props.isScrollable,
      isTyping: false,
      inbound: true,
      reset: false,
      turnOffLoop: props.turnOffLoop
    };
    return _this;
  }

  (0, _createClass3.default)(Conversation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.timeoutId = setTimeout(this.showMessage, this.state.startingDelay);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var previousMessagesLength = this.state.messagesToBeDisplayed.length + this.state.messages.length - this.state.historicMessages.length;

      if (nextProps.messages.length > previousMessagesLength) {
        clearTimeout(this.timeoutId);
        this.setState({
          messagesToBeDisplayed: this.state.messagesToBeDisplayed.concat(nextProps.messages.slice(previousMessagesLength))
        });

        this.timeoutId = setTimeout(this.showMessage, this.state.startingDelay);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isTyping = _state.isTyping,
          inbound = _state.inbound;

      var isInbound = isTyping && inbound;
      var isOutbound = isTyping && !inbound;

      var chatStyles = (0, _objectAssignDeep2.default)({}, defaultStyle, {
        conversation: {
          height: this.props.height || defaultStyle.conversation.height
        }
      }, this.props.styles || {});
      var style = _aphrodite.StyleSheet.create(chatStyles);

      return _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(style.conversation) },
        _react2.default.createElement(_ImageLoader2.default, { messages: this.props.messages }),
        _react2.default.createElement(
          'div',
          { ref: this.paneDidMount, className: (0, _aphrodite.css)(style.messages) },
          _react2.default.createElement(_Messages2.default, { key: this.state.reset, height: style.conversation.height, messages: this.state.messages })
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(isInbound && style.inbound, isOutbound && style.outbound, !isTyping && style.noTyping) },
          isTyping && _react2.default.createElement(_Typing2.default, { styles: typingStyles })
        )
      );
    }
  }]);
  return Conversation;
}(_react2.default.Component);

Conversation.propTypes = {
  delay: _react.PropTypes.number,
  height: _react.PropTypes.number,
  turnOffLoop: _react.PropTypes.bool,
  isScrollable: _react.PropTypes.bool,
  messages: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    message: _react.PropTypes.string,
    src: _react.PropTypes.string,
    inbound: _react.PropTypes.bool.isRequired,
    avatar: _react.PropTypes.string,
    duration: _react.PropTypes.number,
    backColor: _react.PropTypes.string,
    textColor: _react.PropTypes.string
  })).isRequired,
  historicMessages: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    message: _react.PropTypes.string,
    src: _react.PropTypes.string,
    inbound: _react.PropTypes.bool.isRequired,
    avatar: _react.PropTypes.string,
    duration: _react.PropTypes.number,
    backColor: _react.PropTypes.string,
    textColor: _react.PropTypes.string
  })),
  styles: _react.PropTypes.object
};

exports.default = Conversation;