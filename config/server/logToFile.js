const fs = require('fs');
const path = require('path');

module.exports = {
  stream: fs.createWriteStream(path.join(process.cwd(), 'server.log'), {
    flags: 'a',
  }),
};
