module.exports = function (grunt) {
    var version = '20170818';
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-spritesmith");
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks('grunt-autoprefixer');
    //雪碧图的配置
    var module =
        {
            home: 'component/home',
            learn: 'component/learn'
        };
    var spriteConfig ={};
    for(var i in module){
        if(module.hasOwnProperty(i)){
            spriteConfig[module[i]] = {
                src: [ module[i] + '/img/sprite/*'],
                dest: module[i] +'/img/sprite.png',
                destCss: module[i] + '/css/sprite.scss',
                imgPath: '../img/sprite.png',
                algorithm: 'binary-tree',          // top-down/left-right/diagonal/alt-diagonal/binary-tree
                cssFormat: 'scss',
                filter: 'isFile',
                cssVarMap: function (sprite) {
                    sprite.name = sprite.name;
                }
            };
        }

    }
    //雪碧图的配置

    //任务配置，所有插件的配置信息
    grunt.initConfig({
        //获取package.json的信息
        pkg:grunt.file.readJSON("package.json"),
        //uglify用于压缩js文件
        uglify:{
            options:{
                banner:'/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            all: {
                files: [
                    {
                        expand: true,
                        cwd: 'component',
                        src: '**/*.js',
                        dest: 'dist/'+version + "/",
                        ext: '.js'
                    }
                ]
            }
        },

        //用于将scss转成css
        sass:{
            dev:{
                files:[{
                    expand:true,
                    cwd:'component',
                    dest: 'component',
                    src:'**/*.scss',
                    ext:'.css'
                }]
            },
            prod:{
                files:[{
                    expand:true,
                    cwd:'component',
                    dest: 'dist/'+version + "/",
                    src:'**/*.scss',
                    ext:'.css'
                }]
            }
        },

        // autoprefixer插件配置：写样式的时候不需要考虑兼容性问题，autoprefixer自动加前缀
        autoprefixer: {
            options: {
                browserList: ['last 2 versions', 'ie8', 'ie9']
            },
            dev: {
                src: 'component/**/*.css'
            },
            prod: {
                src: 'dist/**/*.css'
            }
        },

        // jshint插件配置，用于检查js语法
        jshint: {
            options: {
                jshintrc: true
            },
            all: ['Gruntfile.js', 'component/**/*.js']
        },
        //每次build之前将之前的打包清理掉
        clean: {
            prod: 'dist'
        },
        //开启一个服务
        connect:{
            liverLoad: {
                port: 8000,             // Default: 8000. You can use the special values 0 or '?' to use a system-assigned port
                // protocol: 'http',       // May be 'http', 'http2' or 'https'
                hostname: 'localhost',  // Default: '0.0.0.0'  Change this to '0.0.0.0' to access the server from outside
                open: true,             // Open the served page in your default browser
                livereload: 35727       // Default: false. Set to true or a port number to inject a live reload script tag into your page
            },
            server: {
                options: {
                    port: 80,
                    base: './',        // The base (or root) directory from which files will be served. Defaults to the project Gruntfile's directory
                    open: true
                }
            }
/*            server2: {
                options: {
                    port: 8010,
                    base: './component',      // The base (or root) directory from which files will be served. Defaults to the project Gruntfile's directory
                    open:true,
                    liverreload:3945
                }
            }*/
        },
        watch:{
            sass: {
                files: 'component/**/*.scss',
                tasks: ['sass','autoprefixer:dev']
            },
            scripts:{
                files: 'component/**/*.js',
                tasks: ['jshint', 'uglify']
            },
            sprite:{
                files:'component/*/img/spite',
                tasks: ['sprite']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.liverLoad.livereload %>'
                },
                files: ['component/**/*','Gruntfile.js']
            }
        },
        //雪碧图的生成
        sprite:spriteConfig,
        // imagemin插件配置
        imagemin: {
            all: {
                files: [
                    {
                        expand: true,
                        cwd: 'component',
                        src: ['*/img/*', '!*/img/sprite', '!*/assets/font'],
                        dest: 'dist/' + version
                    }
                ]
            }
        },
    });
    //告诉grunt当我们在终端中输入grunt需要做些什么（注意先后顺序）
    grunt.registerTask("default",['sprite','autoprefixer:dev','sass:dev','connect','watch']);
    grunt.registerTask("build",['clean:prod','jshint','autoprefixer:prod','uglify','sprite','sass:prod','imagemin']);
};