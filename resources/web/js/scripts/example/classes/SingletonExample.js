// create namespace object (init tree path to class)
ha.createNamespace('example.classes.SingletonExample');

// define class example.SingletonExample:
example.classes.SingletonExample = new (function() {

    // prevent 'this' issues
    var _self = this;

    // private property example
    var multiplier = 100;

    // public property example
    _self.description = 'Example singleton in native javascript.';

    // private method example
    var multiplyNumber = function(value) {
        return (value * multiplier); // example usage of private property 'multiplier'
    };

    // public method example
    _self.multiply = function(value) {
        return multiplyNumber(value); // example usage of private method 'multiplyNumber()'
    };

})();