var settings = require('./settings');

exports.wash = wash;

// 清理 npm 返回的包信息中不需要的部分
function wash(obj) {
  var washed = {};
  settings.includes.forEach(function(key) {
    if (obj[key]) washed[key] = obj[key];
  });
  return washed;
};
