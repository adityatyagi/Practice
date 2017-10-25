// FILE SYSTEM WATCHER
// though fs.fswatcher can listen to directory changes, but it is inconsistent and therefore we use
// third-party modules like chokidar
var chokidar = require('chokidar');
var watcher = chokidar.watch('.', {
    ignored: /[\/\\]\./,
    persistent: true
});

var log = console.log.bind(console);

watcher
    .on('add', function(path) {
        log('File', path, 'has been added');
    })
    .on('unlink', function(path) {
        log('File', path, 'have been removed');
    })
    .on('addDir', function(path) {
        log('Directory', path, 'has been added')
    })
    .on('unlinkDir', function(path) {
        log('Directory', path, 'has been removed');
    })
    .on('error', function(error) {
        log('Error Happend', error);
    })
    .on('ready', function(path) {
        log('Initial scan comeplete, ready for changes');
    })
    .on('raw', function(event, path, details) {
        log('Raw event info:', event, path, details);
    });

watcher.on('change', function(path, stats) {
    if (stats) log('File', path, 'changed size to', stats.size);
});