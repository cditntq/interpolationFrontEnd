/*! xdnphb-html-rong QL 2017-05-21 16:05:01 */
PageInfo.register({type:"plug",info:function(a){var b={};return b.common4init=function(){String.HasText=function(a){try{if(void 0===a)return!1;if(null==a)return!1;if("null"==a)return!1;if("undefined"==a)return!1;if("string"==typeof a&&(a=a.replace(/(^\s*)|(\s*$)/g,"")),""===a)return!1}catch(b){return!1}return!0}},b.request=function(a){b.common4init();var c={};c.pub=function(){var b="post"==a.method?"application/x-www-form-urlencoded":"application/json";b="application/json",String.HasText(a.method)&&(a.url.indexOf("addJobSeekerInfoAndResume")>0&&(b="multipart/form-data"),$.ajax({type:a.method,url:a.url,data:a.param,dataType:"json",crossDomain:!0,contentType:b,success:function(b){a.success(b)},error:function(a){}}))},c.pub()},b.common4post=function(a,c){b.request({method:"post",url:a.url,param:a.param,success:c})},b.common4get=function(a,c){b.request({method:"get",url:a.url,param:a.param,success:c})},b}});