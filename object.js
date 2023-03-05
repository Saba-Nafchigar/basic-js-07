let data={
    firstName : "saba",
    lastName : "nafchigar",
    age : 31,
    email : "sabamasih1991@gmail.com",
    flag : true,
    check : null,
    degree :{
        bachelor : "electronic",
        master : "ai",
        phd : "ai"
    },
    average:[14.32,15.1,16.1],
    person:[
        {firstName:"turaj" , lastName:"armin" , age:35},
        {firstName:"ali" , lastName:"armin" , age : 23},
        {firstName:"sara" , lastName:"armin" , age : 40},
        {firstName:"majid" , lastName:"armin" , age : 26},
    ],
    printAge(){
        console.log(this.age);
    }
}    





console.log(data.firstName); //saba
console.log(`my first name is ${data.firstName}`); //my first name is saba
console.log(`my last name is ${data.lastName}`);
console.log(`my age is ${data.age}`);
console.log(`my email is ${data.email}`);
console.log(`my flag is ${data.flag}`);
console.log(`my check is ${data.check}`);
console.log(`my bechelor degree is ${data.degree.bachelor} and my master degree is ${data.degree.master} and my phd degree is ${data.degree.phd} `);
console.log(`my bechelor average is ${data.average[0]} and my master average is ${data.average[1]} and my phd average is ${data.average[2]} `);

let html= " "
//elem = data.person
data.person.forEach((elem)=>{
    html+= `
        <div class='person'>
            <h4>first name : ${elem.firstName}</h4>
            <h4>last name : ${elem.lastName}</h4>
            <h4>age : ${elem.age}</h4>
        </div>
        <hr/>
    `
})

document.getElementById("root").innerHTML = html
console.log(html);
console.log(data.printAge()); // 31