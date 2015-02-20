var fs        = require('fs')
  , directory = './models';

fs
    .readdirSync(directory)
    .forEach(function (file) {
        if (file !== 'index.js') {
            require('./' + file);
            console.log('Requiring model: ' . file);
        }
    });