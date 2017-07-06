var Cylon = require('cylon');

module.exports = function (app) {

  Cylon.robot({

    connections: {
      edison: { adaptor: 'intel-iot' }
    },

    devices: {
      led: { driver: 'led', pin: 13 }
    },

    work: function (my) {
      app.route('/api/:led/:position').get(function (req, res, next) {
        var led = req.params.led;


        if (req.params.position == 'on') {
          my.led.turnOn();
        }
        else {
          my.led.turnOff();

        }

        var responseCode = 200;
        res.send((responseCode).toString());
      });

      app.route('/api/checkled').get(function (req, res, next) {
        res.send(my.led.isOn());
      });

    }

  }).start();

};