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