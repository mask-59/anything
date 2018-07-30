///datafile.php?speed=12&car=fast
window.setInterval(function(){
    setter(); 
    overtake();
    accelerate('slowcars','sspeed','1');
    accelerate('fastcar','fspeed','1');
    accelerate('oncommingcar','ospeed','-1');
  }, 50);
 

function setter(){
    //get values from db, and assign them to screen, after each 50ms
    var oloc=document.getElementById("oncommingcar").value;
    var floc=document.getElementById("fastcar").value;
    var sloc=document.getElementById("slowcars").value;
    var yurl='datafile.php?oloc='+oloc+'&floc='+floc+'&sloc='+sloc;
    $.getJSON(yurl, function(result){
    document.getElementById("fspeed").value = result.fast.speed;
    document.getElementById("sspeed").value = result.slow.speed;
    document.getElementById("ospeed").value = result.oncomming.speed;

//advi

    });
}

function accelerate(carid, speedid, mode){
 var locationn=parseInt(document.getElementById(carid).value);
 locationn= parseInt(locationn) + parseInt(document.getElementById(speedid).value)*mode;
document.getElementById(carid).value=locationn;
var f_loc= f_loc=(locationn/1000)-20;
var waveid=speedid.charAt(0);
//if(waveid=='o'){f_loc=(locationn/1000)-10;}else{f_loc=(locationn/1000)-8;}
f_loc = f_loc+'%';
document.getElementById(waveid).style.left = f_loc;
}

function overtake(){
    var distdif=parseInt(document.getElementById('slowcars').value)-parseInt(document.getElementById('fastcar').value);
    if (distdif<13000 && distdif>-13000){
    $(".fastcar").css("position", "absolute");
    $(".slowcars").css("position", "relative");
    document.getElementById("f").style.top = "9.6%";
   }else {
    $(".fastcar").css("position", "relative");
    $(".slowcars").css("position", "absolute");
    document.getElementById("f").style.top = "-6.6%";
   }   
}

function advisor(){

}