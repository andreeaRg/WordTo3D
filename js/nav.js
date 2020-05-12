function toggleContainer(id){
    if(document.getElementById(id).style.display == 'none')
        document.getElementById(id).style.display = 'block';
    else 
        document.getElementById(id).style.display = 'none';
}

function toggleAllContainers(cls){
    var navbar = document.getElementById("navbar");
    
    if( navbar.classList.contains(cls))
        navbar.classList.remove('hidden')
    else 
        navbar.classList.add('hidden')
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}