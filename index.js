const expressInput = require('express-input');
const expressValidatorjs = require('express-validatorjs');

module.exports = function (sails) {
    return {

        defaults: {
        },

        initialize: function (cb) {
            sails.after('hook:http:loaded', function () {
                const expressApp = sails.hooks.http.app;
                expressApp.use(expressInput());
                expressApp.use(expressValidatorjs());
            });
            cb();
        }

    };
};