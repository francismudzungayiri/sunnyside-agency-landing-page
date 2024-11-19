let btn = document.getElementById('hamburger');
let dropDown = document.getElementById('dropDown');

btn.addEventListener('click', ()=>{

    if (dropDown.style.display == "block") {
        dropDown.style.display = "none";
    } else {
        dropDown.style.display = "block";
    }

    
});