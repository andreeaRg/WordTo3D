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