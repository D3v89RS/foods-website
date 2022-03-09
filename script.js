const displayer = document.getElementById("menu-displayer");
const topbar = document.getElementById("topbar");

displayer.addEventListener('click', () => {
    displayer.classList.toggle('change');
    topbar.classList.toggle('change');
}); 

const iconClasses = ["fa-egg", "fa-stroopwafel",
 "fa-cheese", "fa-hotdog", "fa-drumstick-bite",
 "fa-apple-alt", "fa-ice-cream", "fa-fish", 
 "fa-cookie", "fa-seedling"];

 let i = 1;
 
setInterval(()=>{
    const icon = document.getElementById("icon");

    if(i < iconClasses.length) {
        icon.classList.remove(iconClasses[i - 1]);
        icon.classList.add(iconClasses[i]);
        i++;
    } else {
        icon.classList.remove(iconClasses[i - 1]);
        icon.classList.add(iconClasses[0]);
        i = 1;
    }
}, 1500);