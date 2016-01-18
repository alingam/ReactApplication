/**
 * Created by aparnalingam on 1/17/16.
 */

module.exports = function(app) {
    var indexRouter = require('../src/controllers/indexController');
    app.get('/', indexRouter.renderIndexPage);
};