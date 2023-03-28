const tmi = require('tmi.js');

const opts = {
  identity: {
    username: 'xantruabot',
    password: 'oauth:q9sphp5sgob20vvgrsa834vmz8f30q'
  },
  channels: [
    'xantrua'
  ]
};

const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect();

function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  }

  const command = msg.trim();

  switch (command) {
    case '!russell':
      say(target, 'VoHiYo');
      break;
    case '!alex':
      say(target, 'Kreygasm');
      break;
    case '!kira':
      say(target, 'Deez nuts');
      break;
    case '!penislength':
      const size = penisSize(context.username);
      const length = size === 1 ? 'inch' : 'inches';
      say(target, `@${context.username}'s penis length is ${size} ${length}`);
      break;
    case '!derek':
      const derekPercentage = context.name === 'Zylanth' ? '123%' : `${derek(context.username)}%`;
      say(target, `@${context.username} is ${derekPercentage} derek HeyGuys`);
      break;
    case '!sweeteggs':
      say(target, '@Zylanth\'s famous sweet egg recipe: Crack two eggs in a bowl. Whisk in 1/4 cup Sweet Cream International Delight. Heat oil in pan over medium heat. Pour egg mixture into pan. Gently fold until light and fluffy. Enjoy with an ice cold Steel Reserve');
      break;
    case '!roll d4':
    case '!roll d6':
    case '!roll d8':
    case '!roll d10':
    case '!roll d20':
    case '!roll d100':
      const sizeStr = command.split(' ')[1];
      const side = parseInt(sizeStr.substring(1));
      if (!isNaN(side)) {
        const result = Math.floor(Math.random() * side) + 1;
        say(target, `@${context.username} rolled a ${result}`);
      } else {
        say(target, `@${context.username} Invalid roll command. Please specify the number of sides on the die (e.g. !roll d6)`);
      }
      break;
    case '!roll':
      say(target, `@${context.username} to use the roll feature, type the command followed by either d4, d8, d10, d20, or d100.`);
      break;
    default:
      console.log(`* Unknown command ${command}`);
  }
  
  console.log(`* Executed ${command} command`);
}

function say(target, message) {
  client.say(target, message);
}

function penisSize(username) {
  let userNumber = 0;
  for (let i = 0; i < username.length; i++) {
    userNumber += username.charCodeAt(i);
    userNumber = (userNumber % 12) + 1;
  }
  return userNumber;
}

function derek(username) {
  let userNumber = 0;
  for (let i = 0; i < username.length; i++) {
    userNumber += username.charCodeAt(i);
    userNumber = (userNumber % 99) + 1;
  }
  return userNumber;
}

function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
