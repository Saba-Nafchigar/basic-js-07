//3 ways for deep copy:

//first way : ...
let person = ["saba","nafchigar",31]
let friend = [...person]
console.log(person); // ['saba', 'nafchigar', 31]
console.log(friend); // ['saba', 'nafchigar', 31]
friend.push("null")
console.log(person); // ['saba', 'nafchigar', 31]
console.log(friend); // ['saba', 'nafchigar', 31 , 'null']

//second way : from
let student = ["ali","biglari","37"]
let teacher = Array.from(student)
console.log(student); // ['ali', 'biglari', '37']
console.log(teacher); // ['ali', 'biglari', '37']
teacher.push(123)
console.log(student); // ['ali', 'biglari', '37']
console.log(teacher); // ['ali', 'biglari', '37' , 123]

//third way : map
let cat = ["misha" , "girl"]
let pet = cat.map((elem)=>
{
    return elem
})
console.log(cat); // ['misha', 'girl']
console.log(pet); // ['misha', 'girl']
pet.push("cute")
console.log(cat); // ['misha', 'girl']
console.log(pet); // ['misha', 'girl' , 'cute']