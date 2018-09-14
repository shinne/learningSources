define([],function () {
   var test = function (options) {
       this.options = $.extend({},options)
       console.log(this.options);
   };
   return test;
});