let divs = Array.from(document.getElementsByTagName("div"))
console.log(divs);
divs.forEach((elem)=>{
    elem.addEventListener("click",function(){
        elem.classList.toggle("active")
    })
})