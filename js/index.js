// let close_btn = document.getElementById("navlinks");
// let open_btn  = document.getElementById("burger");

let navlinks = document.getElementById("navlinks");

function hidemenue(){
    // navlinks.style.right="-200px";
    navlinks.style.transitionDuration="3s";
    navlinks.style.display="none";
  

}



function showmenue(){
    navlinks.style.right="0";
    navlinks.style.transitionDuration="3s";
    navlinks.style.display="block";

}


// width: 200px;
// right: -200px;