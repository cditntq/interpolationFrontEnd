"use strict";

PageInfo.register({
		"type": "Obj",
		"info": function info() {

				var PageObj = {};

				PageObj.require = {
						"$": "jquery",
						"layui": "layui"
				};

				PageObj.page = function () {

						var FunUtil = {};
						var HtmUtil = {};
						var Page = {};

						HtmUtil.layout = function () {
								var result = '<div id="doc-index" class="common-box"><p class="layui-elem-quote">基本使用</p><fieldset class="layui-elem-field"><legend>入口main.js 配置</legend><div class="layui-field-box"><p>简易理解， 类似 SeaJS 中config 配置 需要引用模块的 JS</p><img src="../assets/img/icon-start2.png" style="margin: 10px auto"></div></fieldset></div>';return result;
						};

						Page.data = function () {
								var param = {};param.HtmUtil = HtmUtil;return param;
						};

						Page.show = function () {};

						return Page;
				};

				return PageObj;
		}
});
//# sourceMappingURL=main.js.map
