define('kg/wf/5.0.0/index',["./lib/base","./lib/loader"],function(require, exports, module) {
/**
 * @fileoverview waterfall迁移
 * @author 踏风<tafeng.dxx@taobao.com>，剑平<jianping.xwh@taobao.com>
 * @module waterfall
 **/

var Waterfall = require('./lib/base');
var Loader = require('./lib/loader');
Waterfall.Loader = Loader;
module.exports = Waterfall;




});