function sayInfo(age) {
    console.log("name:" + this.name)
    console.log("age:" + age)
}
var user = {
    name: "zzx"
}
Function.prototype.call2 = function (context) {
    context.fn = this;//将原函数添加到目标对象属性上
    var newArguments = [];
    for (var i = 1, len = arguments.length; i < len; i++) {
        newArguments.push(arguments[i]);
    }
    eval(context.fn(newArguments)); //执行属性方法
    delete context.fn; //去除属性
}
sayInfo.call2(user, 100);



