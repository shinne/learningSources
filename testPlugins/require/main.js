require.config({
    //默认情况下从这个文件开始拉去取资源
    baseUrl:'modules',
    //模块的东西转变为requirejs模块
    shim:{
        'jquery.ztree.core':['jquery'],
        'jquery.ztree.excheck':['jquery.ztree.core'],
        'jquery.ztree.exedit':['jquery.ztree.core']
    },
    paths:{
        'jquery':'../commonJS/jquery',
        'jquery.ztree.core':'../commonJS/jquery.ztree.core',
        'jquery.ztree.excheck':'../commonJS/jquery.ztree.excheck',
        'jquery.ztree.exedit':'../commonJS/jquery.ztree.exedit',
        'test1':'test1'
    }
});

//因为jquery.ztree.exedit依赖了jquery.ztree.core,而jquery.ztree.core又依赖了jquery,因此jquery会加载进来
require(['test1','jquery.ztree.exedit'],function (test1) {
    console.log($)
    var setting = {
        type:"feeType",
        edit: {
            enable: true,
            showRemoveBtn: false,
            showRenameBtn: false,
            drag:{
                prev:false,
                next:false,
                inner:false
            }

        },
        data: {
            simpleData: {
                enable: true
            }
        }
    };
    var zNodes =[
        { id:1, pId:0, name:"设备类型", open:true,drag:true,type:"feeType"},
        { id:11, pId:1, name:"PC",drag:true},
        { id:111, pId:11, name:"PC-1",drag:true},
        { id:112, pId:11, name:"PC-2",drag:true},
        { id:12, pId:1, name:"无线",drag:true},
        { id:121, pId:12, name:"APP",drag:true},
        { id:122, pId:12, name:"M版",drag:true},
        { id:1221, pId:122, name:"M版-1",drag:true},
        { id:1222, pId:122, name:"M版-2",drag:true},
        { id:1223, pId:122, name:"M版-3",drag:true},
        { id:123, pId:12, name:"微信手Q",drag:true},
    ];
    window.tree = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    var testArray = new test1({text:'我在这里new了一个test的实例'})

})