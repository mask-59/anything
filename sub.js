/// databinder
function databinder(){
var spid=document.getElementById("speedlever").value;
var carr=document.getElementById("cartype").innerHTML;
document.getElementById("speedlabel").innerHTML = spid;

var url='datafile.php?speed='+spid+'&car='+carr;
$.getJSON(url, function(data, status){
   var ov_speed = data.fast.speed - data.slow.speed;
   var ov_dist = parseInt(data.slow.location) - parseInt(data.fast.location) + parseInt(data.slow.lenth);
   var ov_time = (ov_dist/ov_speed);
   var coll_speed = parseInt(data.slow.speed) + parseInt(data.oncomming.speed);
   var coll_dist = parseInt(data.oncomming.location) - parseInt(data.slow.location);
   var coll_time = (coll_dist/coll_speed);
   if(ov_speed>0){
        if (ov_time>coll_time){
            $('#advice').text(ov_time+' do not overtake! collision predicted '+coll_time);
            $('#ov_speed').text(ov_speed);
            $('#ov_dist').text(ov_dist);
            $('#coll_dist').text(coll_dist);
            $('#coll_speed').text(coll_speed);
                
        }else{
            $('#advice').text(ov_time+' safe to overtake '+coll_time);
            $('#ov_speed').text(ov_speed);
            $('#ov_dist').text(ov_dist);
            $('#coll_dist').text(coll_dist);
            $('#coll_speed').text(coll_speed);
            if (ov_time<0){
                $('#advice').text('Overtake successful');  
            }
        };
        
   }else {
    $('#advice').text('No overtake attempt detectable');
   }
   

});
};

window.setInterval(function(){
    databinder();
}, 100);