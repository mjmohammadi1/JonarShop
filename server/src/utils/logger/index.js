const morgan = require('morgan');
const fs = require('fs');

const logger = () => {
  return morgan(
    "remote-addr - :remote-user [:date[clf]] ':method :url HTTP/:http-version' 'status:':status 'res size:':res[content-length] 'req size:':req[Content-Length] - 'res time':response-time ms",
    { stream: fs.createWriteStream('./logs/jonar-server.log', { flags: 'a' }) }
  );
};

module.exports = logger();
