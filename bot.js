const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: 'xantruabot',
    password: 'oauth:q9sphp5sgob20vvgrsa834vmz8f30q'
  },
  channels: [
    'xantrua'
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  if (commandName === '!russell') {
    client.say(target, 'VoHiYo')
    console.log(`* Executed ${commandName} command`);
  } 
  else if (commandName === '!alex') {
    client.say(target, 'Kreygasm')
    console.log(`* Executed ${commandName} command`);
  }
  else if (commandName === '!kira') {
    client.say(target, 'Deez nuts')
    console.log(`* Executed ${commandName} command`);
  }
  else if (commandName === '!penislength') {
    const num = penisSize(context.username);
    if (num == 1)  {
      client.say(target, `@${context.username}'s penis length is ${num} inch`)
    }
    else {
      client.say(target, `@${context.username}'s penis length is ${num} inches`)
    }
    console.log(`* Executed ${commandName} command`);
  }
  else if (commandName === '!derek') {
    if (context.name == 'Zylanth') {
      client.say(target, `@${context.username} is 123% derek HeyGuys`);
    }
    else {
      const num = derek(context.username);
      client.say(target, `@${context.username} is ${num}% derek HeyGuys`);
    }
    console.log(`* Executed ${commandName} command`);
  }
  else if (commandName === '!sweeteggs') {
    client.say(target, `@Zylanth\'s famous sweet egg recipe: 
    Crack two eggs in a bowl. 
    Whisk in 1/4 cup Sweet Cream International Delight. 
    Heat oil in pan over medium heat. 
    Pour egg mixture into pan. 
    Gently fold until light and fluffy. 
    Enjoy with an ice cold Steel Reserve`)
    console.log(`* Executed ${commandName} command`);
  }
  else if (commandName == '!roll d4') {
    num = Math.floor(Math.random() * 4) + 1;
    client.say(target, `@${context.username} rolled a ${num}!`);
    console.log(`* Executed ${commandName} command`);
  }
  else if (commandName === '!roll d6') {
    num = Math.floor(Math.random() * 6) + 1;
    client.say(target, `@${context.username} rolled a ${num}!`);
    console.log(`* Executed ${commandName} command`);
  }
  else if (commandName === '!roll d8') {
    num = Math.floor(Math.random() * 8) + 1;
    client.say(target, `@${context.username} rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  }
  else if (commandName === '!roll d10') {
    num = Math.floor(Math.random() * 10) + 1;
    client.say(target, `@${context.username} rolled a ${num}`)
  }
  else if (commandName === '!roll d20') {
    num = Math.floor(Math.random() * 20) + 1;
    client.say(target, `@${context.username} rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  }
  else if (commandName === '!roll d100') {
    num = Math.floor(Math.random() * 100) + 1;
    client.say(target, `@${context.username} rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  }
  else if (commandName === '!roll'){
    client.say(target, `@${context.username} to use the roll feature, type the command followed by either d4, d8, d10, d20, or d100.`);
  }
  else {
    console.log(`* Unknown command ${commandName}`);
  }
}

function penisSize(username) {
  var userNumber = 0;
  for (let i= 0; i < username.length; i++) {
    userNumber += username.charCodeAt(i);
    userNumber = (userNumber % 12) + 1;
  }
  return userNumber;
}
 
function derek(username) {
  var userNumber = 0;
  for (let i= 0; i < username.length; i++) {
    userNumber += username.charCodeAt(i);
    userNumber = (userNumber % 99) + 1;
  }
  return userNumber;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
