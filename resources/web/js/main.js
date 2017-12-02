(function () {
    'use strict';

    // TODO your custom app logic

    $(document).ready(function(){

        // show onLoad info
        console.log('$(document).ready()');

        // example class usage
        var multiplier = new example.classes.NumberMultiplier();
        console.log('example.classes.NumberMultiplier object', multiplier);
        console.log('multiplier.multiply() test', multiplier.multiply(3.3));

        // example singleton class usage
        var staticMultiplier = example.classes.SingletonExample;
        console.log('example.classes.SingletonExample object', staticMultiplier);
        console.log('staticMultiplier.multiply() test', staticMultiplier.multiply(3.3));

    });

})();