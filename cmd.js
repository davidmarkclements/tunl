#!/usr/bin/env node

var conf = require('rc')('tunnel');

require('./')(conf);