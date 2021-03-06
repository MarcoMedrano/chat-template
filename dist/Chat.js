'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Conversation = require('./Conversation');

var _Conversation2 = _interopRequireDefault(_Conversation);

var _aphrodite = require('aphrodite');

var _objectAssignDeep = require('object-assign-deep');

var _objectAssignDeep2 = _interopRequireDefault(_objectAssignDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyle = {
  chat: {
    position: 'relative',
    overflow: 'hidden',
    height: '340px'
  },
  conversation: {
    height: '300px'
  },
  textInputContainer: {
    height: '40px',
    width: '100%',
    backgroundColor: '#efefef',
    borderRadius: '5px'
  },
  textInput: {
    margin: '8px',
    width: 'calc(100% - 20px)',
    height: 'calc(100% - 20px)',
    borderRadius: '5px'
  }
};

var Chat = function (_React$Component) {
  (0, _inherits3.default)(Chat, _React$Component);

  function Chat(props) {
    (0, _classCallCheck3.default)(this, Chat);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Chat.__proto__ || (0, _getPrototypeOf2.default)(Chat)).call(this, props));

    _this.state = {
      messages: props.messages ? props.messages.slice() : [],
      historicMessages: props.historicMessages ? props.historicMessages.slice() : [],
      isScrollable: props.isScrollable
    };
    _this.keyPress = _this.keyPress.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Chat, [{
    key: 'addMessage',
    value: function addMessage(value) {
      var message = {
        message: value,
        inbound: false,
        backColor: '#dcf8c6',
        duration: 800
      };
      var messages = this.state.messages;
      messages = messages.filter(function (element) {
        return element.type !== 'typing';
      });
      messages.push({ type: 'typing', duration: 500, inbound: true });
      messages.push(message);
      this.setState({ messages: messages });
    }
  }, {
    key: 'keyPress',
    value: function keyPress(e) {
      if (e.key === 'Enter' && e.target.value) {
        this.addMessage(e.target.value);
        e.target.value = ''; // eslint-disable-line no-param-reassign
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var chatStyles = (0, _objectAssignDeep2.default)({}, defaultStyle, this.props.styles || {});
      var style = _aphrodite.StyleSheet.create(chatStyles);

      return _react2.default.createElement(
        'div',
        { className: (0, _aphrodite.css)(style.chat) },
        _react2.default.createElement(_Conversation2.default, { styles: chatStyles, historicMessages: this.state.historicMessages, messages: this.state.messages, turnOffLoop: true, isScrollable: this.state.isScrollable }),
        _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(style.textInputContainer) },
          _react2.default.createElement('input', { type: 'text', onKeyPress: this.keyPress, className: (0, _aphrodite.css)(style.textInput), placeholder: 'Type your message here...' })
        )
      );
    }
  }]);
  return Chat;
}(_react2.default.Component);

Chat.propTypes = {
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
  })),
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

exports.default = Chat;