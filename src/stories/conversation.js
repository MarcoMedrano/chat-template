import React from 'react';
import Conversation from '../Conversation';
import { storiesOf } from '@kadira/storybook';

storiesOf('Conversation', module)
.add('should display no messages', () => {
  return (
    <div>
      <Conversation height={300} messages={[]} />
    </div>
  );
})
.add('should show the typing before messages appear from a user', () => {
  const messages = [
    {
      type: 'typing',
      duration: 500,
      inbound: true,
    },
    {
      message: 'Hey how are you keeping?',
      inbound: true,
      backColor: 'white',
      duration: 1500,
    },
    {
      type: 'typing',
      duration: 500,
      inbound: true,
    },
    {
      message: 'I have not seen you in ages!!!!',
      inbound: true,
      backColor: 'white',
      duration: 1700,
    },
    {
      type: 'typing',
      duration: 1000,
      inbound: false,
    },
    {
      message: 'How do I uninstall this messaging app?',
      inbound: false,
      backColor: 'rgb(218, 211, 232)',
      duration: 2500,
    },
    {
      type: 'typing',
      duration: 1500,
      inbound: false,
    },
    {
      type: 'typing',
      duration: 1000,
      inbound: true,
    },
    {
      message: 'Screw you man.',
      inbound: true,
      backColor: 'white',
      duration: 1500,
    },
  ];

  return (
    <div>
      <Conversation height={300} messages={messages} />
    </div>
  );
}).add('should show the typing before messages appear from a user with SMALL HEIGHT', () => {
  const messages = [
    {
      type: 'typing',
      duration: 500,
      inbound: true,
    },
    {
      message: 'Hey how are you keeping?',
      inbound: true,
      backColor: 'white',
      duration: 1500,
    },
    {
      type: 'typing',
      duration: 500,
      inbound: true,
    },
    {
      message: 'I have not seen you in ages!!!!',
      inbound: true,
      backColor: 'white',
      duration: 1700,
    },
    {
      type: 'typing',
      duration: 1000,
      inbound: false,
    },
    {
      message: 'How do I uninstall this messaging app?',
      inbound: false,
      backColor: 'rgb(218, 211, 232)',
      duration: 2500,
    },
    {
      type: 'typing',
      duration: 1500,
      inbound: false,
    },
    {
      type: 'typing',
      duration: 1000,
      inbound: true,
    },
    {
      message: 'Screw you man.',
      inbound: true,
      backColor: 'white',
      duration: 1500,
    },
  ];

  return (
    <div>
      <Conversation height={150} messages={messages} />
    </div>
  );
}).add('should display all messages with slow times specified', () => {
  const messages = [
    {
      message: 'Paul',
      inbound: true,
      backColor: 'white',
      duration: 1500,
    },
    {
      message: 'Conor',
      inbound: true,
      backColor: 'white',
      duration: 1700,
    },
    {
      message: 'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim', // eslint-disable-line max-len
      inbound: true,
      backColor: 'white',
      duration: 2500,
    },
    {
      message: 'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1500,
    },
    {
      message: 'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1500,
    },
    {
      message: 'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1500,
    },
  ];

  return (
    <div>
      <Conversation height={300} messages={messages} />
    </div>
  );
}).add('should display all messages with a 4 seconds initial delay', () => {
  const messages = [
    {
      message: 'Paul',
      inbound: true,
      backColor: 'white',
      duration: 1000,
    },
    {
      message: 'Conor',
      inbound: true,
      backColor: 'white',
      duration: 1400,
    },
    {
      message: 'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim', // eslint-disable-line max-len
      inbound: true,
      backColor: 'white',
      duration: 1200,
    },
    {
      message: 'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1000,
    },
    {
      message: 'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1500,
    },
    {
      message: 'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1000,
    },
  ];

  return (
    <div>
      <Conversation delay={4000} height={300} messages={messages} />
    </div>
  );
}).add('should display all messages, with quick times specified with a 200ms initial delay', () => {
  const messages = [
    {
      message: 'Paul',
      inbound: true,
      backColor: 'white',
      avatar: 'https://landofblogging.files.wordpress.com/2014/01/bitstripavatarprofilepic.jpeg',
      duration: 500,
    },
    {
      message: 'Conor',
      inbound: false,
      backColor: '#dcf8c6',
      avatar: 'https://landofblogging.files.wordpress.com/2014/01/bitstripavatarprofilepic.jpeg',
      duration: 500,
    },
    {
      message: 'Brian',
      inbound: true,
      backColor: 'white',
      avatar: 'https://landofblogging.files.wordpress.com/2014/01/bitstripavatarprofilepic.jpeg',
      duration: 1000,
    },
  ];

  return (
    <div>
      <Conversation delay={200} height={300} messages={messages} />
    </div>
  );
}).add('should run the onDisplay functions after messages are displayed', () => {
  const messages = [
    {
      id: 1,
      message: 'Paul',
      inbound: true,
      backColor: 'white',
      duration: 1500,
      onDisplay: (id) => {console.log(id);}, // eslint-disable-line no-console
    },
    {
      id: 2,
      message: 'Conor',
      inbound: true,
      backColor: 'white',
      duration: 222700,
      onDisplay: (id) => {console.log(id);}, // eslint-disable-line no-console
    },
    {
      id: 3,
      message: 'mJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJi',
      inbound: true,
      backColor: 'white',
      duration: 2500,
      onDisplay: (id) => {console.log(id);}, // eslint-disable-line no-console
    },
  ];

  return (
    <div>
      <Conversation height={300} messages={messages} />
    </div>
  );
}).add('should display all messages, with an image first specified', () => {
  const messages = [
    {
      message: 'Blah blah 1',
      src: 'http://wvs.topleftpixel.com/photos/scotia_plaza_tall_stitched.jpg',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1200,
    },
    {
      message: 'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1500,
    },
    {
      message: 'Blah blah',
      src: 'https://images6.alphacoders.com/316/316963.jpg',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1200,
    },
  ];

  return (
    <div>
      <Conversation height={300} messages={messages} />
    </div>
  );
}).add('should display all messages, with SLOW AND HEAVY images as the first two elements', () => {
  const messages = [
    {
      message: 'Blah blah',
      src: 'http://wvs.topleftpixel.com/photos/scotia_plaza_tall_stitched.jpg',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1200,
    },
    {
      message: 'Blah blah 2',
      src: 'https://images6.alphacoders.com/316/316963.jpg',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1200,
    },
    {
      message: 'Blah blah 3',
      src: 'https://images6.alphacoders.com/316/316963.jpg',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1200,
    },
  ];

  return (
    <div>
      <Conversation height={300} messages={messages} />
    </div>
  );
}).add('should display all messages, with an image many elements', () => {
  const messages = [
    {
      message: 'Blah blah',
      src: 'https://media.giphy.com/media/XGP7mf38Vggik/giphy.gif',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1200,
    },
    {
      message: 'Blah blah 2',
      src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1200,
    },
    {
      message: 'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
      src: 'https://media.giphy.com/media/aIU0hcl50BuNO/giphy.gif',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1500,
    },
    {
      message: 'Blah blah 4',
      src: 'https://media.giphy.com/media/DVwbMHImn8Yla/giphy.gif',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1200,
    },
    {
      message: 'Blah blah 5',
      src: 'https://images.sobadsogood.com/14-ridiculously-funny-gifs-from-the-world-of-wrestling/5.jpg',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1200,
    },
    {
      message: 'Blah blah 6',
      src: 'http://memecrunch.com/meme/AKXO9/boss-makes-a-dollar-i-make-a-dime/image.gif',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1200,
    },
  ];

  return (
    <div>
      <Conversation height={300} messages={messages} />
    </div>
  );
}).add('should display all messages, with an image as many elements and with avatars', () => {
  const messages = [
    {
      message: 'Blah blah',
      src: 'https://media.giphy.com/media/XGP7mf38Vggik/giphy.gif',
      inbound: false,
      avatar: 'http://www.resellerratings.com/image/avatar/5700149',
      backColor: '#dcf8c6',
      duration: 1200,
    },
    {
      message: 'Blah blah 2',
      src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif',
      inbound: false,
      avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-plaid-shirt-guy.png',
      backColor: '#dcf8c6',
      duration: 1200,
    },
    {
      message: 'JimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJimJim',
      src: 'https://media.giphy.com/media/aIU0hcl50BuNO/giphy.gif',
      inbound: false,
      avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-plaid-shirt-guy.png',
      backColor: '#dcf8c6',
      duration: 1500,
    },
    {
      message: 'Blah blah 4',
      src: 'https://media.giphy.com/media/DVwbMHImn8Yla/giphy.gif',
      inbound: true,
      avatar: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-plaid-shirt-guy.png',
      backColor: 'white',
      duration: 1200,
    },
    {
      message: 'Blah blah 5',
      src: 'https://images.sobadsogood.com/14-ridiculously-funny-gifs-from-the-world-of-wrestling/5.jpg',
      inbound: false,
      avatar: 'https://media.giphy.com/media/m7BTtLWhjkEJa/giphy.gif',
      backColor: '#dcf8c6',
      duration: 1200,
    },
    {
      message: 'Blah blah 6',
      src: 'http://memecrunch.com/meme/AKXO9/boss-makes-a-dollar-i-make-a-dime/image.gif',
      inbound: true,
      avatar: 'https://landofblogging.files.wordpress.com/2014/01/bitstripavatarprofilepic.jpeg',
      backColor: 'white',
      duration: 1200,
    },
  ];

  return (
    <div>
      <Conversation height={300} messages={messages} />
    </div>
  );
}).add('should display one messages, with an image specified', () => {
  const messages = [
    {
      message: 'Blah blah',
      src: 'https://images6.alphacoders.com/316/316963.jpg',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1200,
    },
  ];

  return (
    <div>
      <Conversation height={300} messages={messages} />
    </div>
  );
}).add('should display one messages, with an image specified but it does not exist', () => {
  const messages = [
    {
      message: 'Blah blah',
      src: 'https://images6.alphacoders/316/316963.jpg',
      inbound: false,
      backColor: '#dcf8c6',
      duration: 1200,
    },
  ];

  return (
    <div>
      <Conversation height={300} messages={messages} />
    </div>
  );
});
