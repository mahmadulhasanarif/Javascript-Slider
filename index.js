const slideShowElements = document.querySelectorAll(".slider-element");
console.log(slideShowElements);
let count =1;
setInterval(()=>{
    count++;
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");
    if(count > slideShowElements.length){
        count = 1;
        slideShowElements[0].classList.add("current")
    }else{
        currentElement.nextElementSibling.classList.add("current");
    }
},2500);