var fs = require('fs');
var net = require('net');
var Client = require('ssh2').Client;

function noop(){}

module.exports = function (opts) {


  var map = opts.map || {
    80: 2000
  };

  var client = new Client();

  client.on('ready', function () {
    Object.keys(map).forEach(function (port) {
      client.forwardIn('localhost', port, noop);
    });
  });


  client.on('tcp connection', function (info, accept, reject) {
    var stream = accept();

    stream
      .pipe(net.connect(map[info.destPort]))
      .pipe(stream);

  });

  if (opts.ssh.key) {
    opts.ssh.privateKey = fs.readFileSync(process.cwd() + '/' + opts.ssh.key);
  }

  client.connect(opts.ssh)

  return client

}

