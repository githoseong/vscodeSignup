function w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    // document.getElementById("mySidebar").style.height = "100%";
    document.getElementById("mySidebar").style.display = "block";
}   

function w3_close() {
document.getElementById("mySidebar").style.display = "none";
}

function big() {
    document.getElementById("sec4img1").style.width="800px"
    document.getElementById("sec4img1").style.height="600px"
    document.getElementById("sec4img1").style.zIndex="1"
    // document.getElementById("sec4_22").style.display="block"
}

function small() {
    document.getElementById("sec4img1").style.width="199px"
    document.getElementById("sec4img1").style.height="500px"
    document.getElementById("sec4img1").style.zIndex="0"
    // document.getElementById("sec4_22").style.display="none"
}
function big2() {
    document.getElementById("sec4img2").style.width="800px"
    document.getElementById("sec4img2").style.height="600px"
    document.getElementById("sec4img2").style.zIndex="1"
    // document.getElementById("sec4_22_2").style.display="block"
}

function small2() {
    document.getElementById("sec4img2").style.width="199px"
    document.getElementById("sec4img2").style.height="500px"
    document.getElementById("sec4img2").style.zIndex="0"
    // document.getElementById("sec4_22_2").style.display="none"
}
function big3() {
    document.getElementById("sec4img3").style.width="800px"
    document.getElementById("sec4img3").style.height="600px"
    document.getElementById("sec4img3").style.zIndex="1"
    // document.getElementById("sec4_22_3").style.display="block"
    document.getElementById("sec4img3").style.left="500px"
}

function small3() {
    document.getElementById("sec4img3").style.width="199px"
    document.getElementById("sec4img3").style.height="500px"
    document.getElementById("sec4img3").style.zIndex="0"
    // document.getElementById("sec4_22_3").style.display="none"
    document.getElementById("sec4img3").style.left=""
}
function big4() {
    document.getElementById("sec4img4").style.width="800px"
    document.getElementById("sec4img4").style.height="600px"
    document.getElementById("sec4img4").style.zIndex="1"
    // document.getElementById("sec4_22_4").style.display="block"
}

function small4() {
    document.getElementById("sec4img4").style.width="199px"
    document.getElementById("sec4img4").style.height="500px"
    document.getElementById("sec4img4").style.zIndex="0"
    // document.getElementById("sec4_22_4").style.display="none"
}
function big5() {
    document.getElementById("sec4img5").style.width="800px"
    document.getElementById("sec4img5").style.height="600px"
    document.getElementById("sec4img5").style.left="800px"
    document.getElementById("sec4img5").style.zIndex="1"
    // document.getElementById("sec4_22_5").style.display="block"
}

function small5() {
    document.getElementById("sec4img5").style.width="199px"
    document.getElementById("sec4img5").style.height="500px"
    document.getElementById("sec4img5").style.left=""
    document.getElementById("sec4img5").style.zIndex="0"
    // document.getElementById("sec4_22_5").style.display="none"
}
function big6() {
    document.getElementById("sec4img6").style.width="800px"
    document.getElementById("sec4img6").style.height="600px"
    document.getElementById("sec4img6").style.left="900px"
    document.getElementById("sec4img6").style.zIndex="1"
    // document.getElementById("sec4_22_6").style.display="block"
}

function small6() {
    document.getElementById("sec4img6").style.width="199px"
    document.getElementById("sec4img6").style.height="500px"
    document.getElementById("sec4img6").style.left=""
    document.getElementById("sec4img6").style.zIndex="0"
    // document.getElementById("sec4_22_6").style.display="none"
}
$(document).ready(function(){
    $("#sec4img1").mouseover(function(){
        $("#sec4_22").fadeIn();
    })        
    $("#sec4img1").mouseout(function(){
        $("#sec4_22").slideUp(100);
    })
    $("#sec4img2").mouseover(function(){
        $("#sec4_22_2").fadeIn();
    })        
    $("#sec4img2").mouseout(function(){
        $("#sec4_22_2").slideUp(100);
    })
    $("#sec4img3").mouseover(function(){
        $("#sec4_22_3").fadeIn();
    })        
    $("#sec4img3").mouseout(function(){
        $("#sec4_22_3").slideUp(100);
    })
    $("#sec4img4").mouseover(function(){
        $("#sec4_22_4").fadeIn();
    })        
    $("#sec4img4").mouseout(function(){
        $("#sec4_22_4").slideUp(100);
    })
    $("#sec4img5").mouseover(function(){
        $("#sec4_22_5").fadeIn();
    })        
    $("#sec4img5").mouseout(function(){
        $("#sec4_22_5").slideUp(100);
    })
    $("#sec4img6").mouseover(function(){
        $("#sec4_22_6").fadeIn();
    })        
    $("#sec4img6").mouseout(function(){
        $("#sec4_22_6").slideUp(100);
    })
})