ha = {};

ha.createNamespace = function (path, value) {
    if (typeof path !== 'string') {
        throw new Error('Path is not a string');
    }
    if (typeof value === 'undefined') {
        value = null;
    }
    var parts = path.split('.');
    var partsLength = parts.length;
    var parent = window;
    var currentPart = '';
    for (var i = 0; i < partsLength; i++) {
        currentPart = parts[i];
        parent[currentPart] = parent[currentPart] || {};
        if (i == (partsLength - 1)) {
            parent[currentPart] = value;
        } else {
            parent = parent[currentPart];
        }
    }
};

window.ha = ha;

// console support fix
(function () {
    if (typeof console === 'undefined') {
        console = {};
    }
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group',
        'groupCollapsed', 'groupEnd', 'info', 'log', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp',
        'trace', 'warn'
    ];
    var emptyFn = function () {
    };
    for (var i = 0, l = methods.length; i < l; i++) {
        if (typeof console[methods[i]] === 'undefined') {
            console[methods[i]] = emptyFn;
        }
    }
    if (typeof window.console === 'undefined') {
        window.console = console;
    }
})();