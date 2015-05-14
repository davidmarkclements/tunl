# tunl

Securely proxy remote ports to local ports with SSH.

# Usage

## Programmatic

```
var tunl = require('tunl');

tunl({
  map: {
    80: 8080
  },
  ssh: {
    host: 'example.com',
    username: 'joe',
    key: 'path/to/key.pem'
  }
});
```

## CLI

Command line options are processed using [rc](https://npmjs.org/rc)

```sh
tunl --map.2000 2000 --map.9998 9999 --map.35728 35729 --ssh.username ubuntu --ssh.host example.com --ssh.key path/to/key.pem
```

```sh
tunl --config <configfile>
```


## Options


### ssh

#### host

An ssh host

#### username

An ssh login ID

#### password 

The plaintext password

#### privateKey

Alternative to `password`, the contents of an ssh key file

#### key

Alternative to `privateKey`, the path to an ssh key file.


### map

An object mapping remote ports to local ports, the key is the remote port
the value is the local port.

The default map is:

```js
{80: 2000}
```

# Contributors

Sponsored by [nearForm](http://nearform.com)


