module Project {
    export module Core {
        function FunA(){}
        export function FunB(){
            FunA()  //ok
        }
    }
}

module Project.Core {
    export function FunC(){
        FunA() //error
        FunB() //pk
    }
}

Project.Core.FunA() //error
Project.Core.FunB() //ok
Project.Core.FunC() //ok