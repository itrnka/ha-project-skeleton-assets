// create namespace object (init tree path to class)
ha.createNamespace('example.classes.NumberMultiplier');

// define class example.NumberMultiplier:
example.classes.NumberMultiplier = function(someArgument) {

    // prevent 'this' issues
    var _self = this;

    // private property example
    var multiplier = 10;
    var classConstructorArgument1 = someArgument;

    // public property example
    _self.description = 'Example class in native javascript.';

    // private method example
    var multiplyNumber = function(value) {
        return (value * multiplier); // example usage of private property 'multiplier'
    };

    // public method example
    _self.multiply = function(value) {
        return multiplyNumber(value); // example usage of private method 'multiplyNumber()'
    };

};