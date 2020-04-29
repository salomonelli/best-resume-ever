const fs = require('fs');
const path = require('path');

let directory = '';
switch (process.env.SCRIPT) {
  case 'export':
    directory = path.join(__dirname, '../../pdf');
    break;
  case 'preview':
    directory = path.join(__dirname, '../../src/assets/preview');
    break;
  default:
    console.log('Environment variable "ENV" is not defined.');
    process.exit();
}

fs.readdir(directory, (err, files) => {
  if (err) throw err;
  for (const file of files) {
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });
  }
  fs.rmdirSync(directory);
  console.log('Deleted files.');
});
