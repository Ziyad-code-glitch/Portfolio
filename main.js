// Open & Close Nav-Menue
let nav = document.querySelector('.nav');
let menueIcon = document.querySelector('.menue-icon');

menueIcon.onclick = () =>{
    nav.classList.toggle('active');
}

// Light & Dark Mode
let themeBtn = document.querySelector('.theme-btn');
let darkMode = localStorage.getItem("darkmode");

function enableDarkMode(){
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkmode",'active');
};

function disableDarkMode(){
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkmode",null);
};

if (darkMode === "active") {
    enableDarkMode();
}

themeBtn.addEventListener("click" , () => {

    darkMode = localStorage.getItem("darkmode");

    if (darkMode !== 'active') {

        enableDarkMode();

    } else {

        disableDarkMode();
    }

});



// Rotate Text around Home Image
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i) =>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");


// Circle Skill
let circles = document.querySelectorAll('.circle');

circles.forEach(element => {
    
    let dots = element.getAttribute("data-dots");
    let marked = element.getAttribute("data-percent");
    let percent = Math.floor(dots * marked / 100);
    let points = "";
    let rotate = 360/dots;

    for (let i = 0; i < dots; i++) {

        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
                
    }

    element.innerHTML = points;
    
    const pointsMarked = element.querySelectorAll('.points');

    for (let i = 0; i < percent; i++) {

        pointsMarked[i].classList.add('marked');
        
    }
    
});


// Portfolio Item Filter
let filterContan = document.querySelector('.portfolio-filter');
let filterBtns = filterContan.children;
let totalFilterBtns =filterBtns.length;
let portfolioItemsContan = document.querySelector('.portfolio-items');
let portfolioItems = portfolioItemsContan.children;
let totalPortfolioItems = portfolioItems.length


for (let i = 0; i < totalFilterBtns; i++) {

    filterBtns[i].addEventListener("click" , function ()  {

        // remove active class from all children
        filterContan.querySelector('.active').classList.remove("active");
        // add active class to clicked btn
        this.classList.add("active");
        // store filter btn data-set
        let filterValue = this.getAttribute("data-filter"); 

        for (let k = 0; k < totalPortfolioItems; k++) {
            
            if (filterValue === portfolioItems[k].getAttribute("data-categ")) {
                
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");

            }else{
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }

            if (filterValue === "all") {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
        }

    })

};

// Light Box Open & Close
let lightBox = document.querySelector(".light-box");
let lightBoxClose = document.querySelector(".light-box .close");
let lightBoxImg = document.querySelector(".light-box .img");
let lightBoxText = document.querySelector(".light-box .text");
let lightBoxCounter = document.querySelector(".light-box .counter");
let itemIndex = 0;

for (let i = 0; i <totalPortfolioItems; i++) {

    portfolioItems[i].addEventListener("click", function(){

        itemIndex = i;
        changeItem();
        toggleLightBox();

    })
};

function changeItem() {
    
    imgSrc = portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute("src");
    lightBoxImg.src = imgSrc;
    lightBoxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightBoxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItems
}

function toggleLightBox(){

    lightBox.classList.toggle("open");

}

function nextItem(){

    if (itemIndex == totalPortfolioItems-1) {
        itemIndex = 0;
    }
    else{
        itemIndex++;
    }

    changeItem();

}

function prevItem(){

    if (itemIndex == 0) {   

        itemIndex = totalPortfolioItems-1;
    }
    else{
        itemIndex--;
    }

    changeItem();

}

lightBox.addEventListener("click", function(e){

    if (e.target === lightBoxClose || e.target === lightBox) {

        toggleLightBox();

    }

})


// Scroll Up Btn
let scrollBtn = document.querySelector('.scroll-up');

window.onscroll = function() {

    scrollFunction();

};

function scrollFunction() {

    if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

}

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

});

