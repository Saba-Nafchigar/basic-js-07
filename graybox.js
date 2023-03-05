let div =Array.from(document.getElementsByTagName("div")) 
let flag = true
div.forEach((elem)=>{
    elem.addEventListener("click",function(){
        // if(flag){
        //     elem.classList.add("active")
        //     flag = false
        // }else{
        //     elem.classList.remove("active")
        //     flag=true
        // }
        elem.classList.toggle("active") // best way
        elem.classList.toggle("radius")
    })
})
