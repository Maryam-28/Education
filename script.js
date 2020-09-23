
function slideshow(){
    var x=document.getElementById('check-class');
    if(x.style.display==="none"){
        x.style.display="block"; 
    }
    else{
        x.style.display="none";

    }

}

document.getElementById("form").addEventListener("submit", myFunction);

function myFunction() {
  alert("The form was submitted");
}
