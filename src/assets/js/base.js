exports.install = function (Vue, options) {
    Vue.prototype.testPhone = function (val){
        var reg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
        return reg.test(val);
    };
};