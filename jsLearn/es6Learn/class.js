class Logger{
    printName(name = "there"){
        console.log(this);
        this.print('hello ${name}');
    }
    print(text){
        console.log(text);
    }
}

var logger = new Logger();
var {printName} = logger;
printName.call(logger);
