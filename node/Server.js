const request = require('request-promise');

const PORT = 8080;
const Server = {
  /**
   * kills express app
   */
  kill: () => {
    request.get('http://localhost:' + PORT + '/kill')
      .catch(error => {
        if (error) return false;
      });
  }
};
module.exports = Server;
