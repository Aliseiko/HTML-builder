const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(filePath);
const { stdin, stdout } = process;

function exit() {
  stdout.write('You are exit of the program\n');
  process.exit();
}

stdout.write(
  'Please, enter your text to write it to file text.txt.\n' +
    'To exit press Ctrl + C or enter: exit\n',
);
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') exit();
  writeStream.write(data.toString());
});

process.on('SIGINT', exit);
