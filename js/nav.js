function toggleContainer(id) {
    if (document.getElementById(id).style.display == 'block'){
        document.getElementById(id).style.display = 'none';
        document.getElementById(id).parentElement.children[0].style.background = 'none';
    }
    else{
        document.getElementById(id).style.display = 'block';
        document.getElementById(id).parentElement.children[0].style.backgroundColor = '#87CEFA';
    }
}

function showDetails(id) {

    var content;
    switch (id) {
        case "mediTri":
            content = "Selecteaza un punct <br>";
            content += "<img width='200px' height='200px' src='./img/a.jpg'> <br>";
            content += "Selecteaza o linie <br>";
            content += "<img width='200px' height='200px' src='./img/a.jpg'> <br>";
            content += "Apasa pe butonul Deseneaza!";
            content += "<img width='200px' height='200px' src='./img/a.jpg'> <br>";
            break;

        case "bisTri":
            content = "Selecteaza trei puncte"
            break;

        default:
            break;
    }

    if(document.getElementById(id).style.display == 'block'){
        document.getElementById("detailsPopUp").innerHTML = content;
        document.getElementById("detailsPopUp").style.display = 'block';
    }
    else
        hideDetails();

}

function hideDetails() {
    document.getElementById("detailsPopUp").style.display = 'none';

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