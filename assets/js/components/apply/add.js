"use strict";

PageInfo.register({ "type": "Obj", "info": function info() {

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
				var result = '<div id="ntq-apply-add" class="common-box"><form class="layui-form" action=""><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label" name="jobSeekerPhone">电话</label><div class="layui-input-inline"><input type="tel" name="phone" lay-verify="phone" autocomplete="off" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">姓名</label><div class="layui-input-inline"><input type="text" name="jobSeekerName" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">Email</label><div class="layui-input-inline"><input type="text" name="jobSeekerEmail" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"></div></div></div><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">性别</label><div class="layui-input-inline"><input type="radio" name="jobSeekerSex" value="男" title="男" checked=""> <input type="radio" name="jobSeekerSex" value="女" title="女"></div></div><div class="layui-inline"><label class="layui-form-label"></label><div class="layui-input-inline"><input type="checkbox" name="like1[write]" lay-skin="primary" title="是否添加组织者微信" checked=""></div></div><div class="layui-inline"><label class="layui-form-label">上传简历</label><div class="layui-input-inline"><input id="ntq-apply-add-btn" type="file" name="fileName" lay-type="file" class="layui-upload-file"></div></div></div><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">毕业院校</label><div class="layui-input-inline"><input type="tel" name="graduateSchool" lay-verify="phone" autocomplete="off" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">专业</label><div class="layui-input-inline"><input type="text" name="majorSubjects" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">学历</label><div class="layui-input-inline"><select name="recordOfFormalSchooling" lay-filter="aihao"><option value=""></option><option value="0">写作</option><option value="1" selected="">阅读</option><option value="2">游戏</option><option value="3">音乐</option><option value="4">旅行</option></select></div></div></div><div class="layui-form-item"><div class="layui-inline"><label class="layui-form-label">毕业时间</label><div class="layui-input-inline"><input type="tel" name="graduateDate" lay-verify="phone" autocomplete="off" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">职位编码</label><div class="layui-input-inline"><input type="text" name="jobCode" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"></div></div><div class="layui-inline"><label class="layui-form-label">微信ID</label><div class="layui-input-inline"><input type="text" name="jobSeekerWeixin" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input"></div></div></div><div class="layui-form-item" id="ntq-apply-add-subline"><div class="layui-inline"><label class="layui-form-label"></label><div class="layui-input-inline"></div></div><div class="layui-inline"><label class="layui-form-label"></label><div class="layui-input-inline"></div></div><div class="layui-inline"><label class="layui-form-label"></label><div class="layui-input-inline"><button class="layui-btn" lay-submit="" lay-filter="formDemo">提交信息</button> <button type="reset" class="layui-btn layui-btn-primary">重置</button></div></div></div></form></div>';return result;
			};

			Page.data = function () {
				var param = {};param.HtmUtil = HtmUtil;return param;
			};

			Page.show = function () {
				var $this = this;

				layui.use(['form', 'layedit', 'laydate', "upload"], function () {
					var form = layui.form(),
					    layer = layui.layer,
					    layedit = layui.layedit,
					    laydate = layui.laydate;
					form.render('');
					//创建一个编辑器

					layui.upload({
						url: '' //上传接口
						, success: function success(res) {
							//上传成功后的回调
							console.log(res);
						}
					});

					//监听提交
					form.on('submit(demo1)', function (data) {
						layer.alert(JSON.stringify(data.field), {
							title: '最终的提交信息'
						});
						return false;
					});
				});
			};

			return Page;
		};

		return PageObj;
	} });
//# sourceMappingURL=add.js.map
