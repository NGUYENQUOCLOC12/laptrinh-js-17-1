//call & apply
var person1 = {name: 'Quoc Loc',age: 21};
var person2 = {name: 'Shiro',age:21};
var sayHello = function(){
    console.log('Hello, ' + this.name);
};
var sayGoodbye = function(){
    console.log('Goodbye, ' + this.name);
}
sayHello.call(person1);
sayGoodbye.call(person2);
sayHello.apply(person1);
sayGoodbye.apply(person2);