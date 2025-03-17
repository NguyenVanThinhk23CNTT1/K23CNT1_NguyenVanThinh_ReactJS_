class Person{
    constructor(){
        this.name = "Nguyễn Văn Thịnh";
        this.age = 19;
    }

getName(){
    return this.name;
}

setAge(age){
    this.age = age;
}
getage(){
    return this.age;
}
}
var person = new Person();
person.setAge(19);
console.log("Tên người:"+person.getName());
console.log("Tuổi"+person.getage());