//symbol.iterator => you can use for loop

let div = document.getElementsByTagName("div")
console.log(div); // html collection

//use for :
// for (let i = 0; i < div.length; i++) {
//     div[i].style.width="200px"
//     div[i].style.height="200px"
//     div[i].style.backgroundColor="limegreen"
//     div[i].style.marginBottom="10px"
    
// }

// or use for of :  
// for (const item of div) {
//     item.style.width="200px"
//     item.style.height="200px"
//     item.style.backgroundColor="limegreen"
//     item.style.marginBottom="10px"
// }

// Whenever you see htmlcollection, you should upgrade it
// upgrade to array :
// you can use from and [...arrayname] ---  can not use map() becaue map use for array and div is a htmlCollection
div = Array.from(document.getElementsByTagName("div"))
console.log(div);
div[0].classList.add("extra")
console.log(div[0].classList);
