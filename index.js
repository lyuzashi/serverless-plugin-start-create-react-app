const Offline = require('serverless-offline');

class StartCreateReactApp {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.hooks = {
      'offline:start:init': this.hookListen()
    }
  }

  hookListen() {
    const offline = this.serverless.pluginManager.plugins.find(plugin =>
      plugin.constructor.name === Offline.name);
    const listen = offline._listen.bind(offline);
    offline._listen = () => {
      return listen().then(server => {
        // server is an instance of https://hapijs.com
        // The next step is to hook into requests and respond with CRA server when matching.
      })
    }
  }

}

module.exports = StartCreateReactApp;