function Person(name,lastName,age,isMarried,sex){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.isMarried = isMarried;
    if(sex=="male" || sex=="female"){
        this.sex = sex;
    }else{
        console.log("choose 'male' or 'female'");
    }
}

var person01 = new Person("ali","Noor",19,false,"male");

console.log(person01);