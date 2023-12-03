// header Scoll
let nav = document.querySelector(".navbar")
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled")
    }
    else{
        nav.classList.remove("header-scrolled")
    }
}

//navbar close when you click
let navbar = document.querySelectorAll(".nav-link")
let newcollapse = document.querySelector(".navbar-collapse.collapse")
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        newcollapse.classList.remove("show")
    })
})

/*Counter css*/
document.addEventListener("DOMContentLoaded",()=>{
    function Counter(id,start,end,duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer)
            }
        }, step);
    }
    Counter("count1",0,1857,3000)
    Counter("count2",0,1287,3000)
    Counter("count3",0,1711,3000)
    Counter("count4",0,1457,3000)
})
