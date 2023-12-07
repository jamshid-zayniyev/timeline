const Week = ["SUN","MON","TUE","WED","THU","FRI","SAT"]


// function Timeline(){
//     var now = new Date();

//     document.getElementById("date").innerHTML = 
//     now.getFullYear() + "-" + 
//     (now.getMonth()+1 >= 10 ? now.getMonth()+1  : "0" + now.getMonth()) + "-" +  
//     (now.getDate() >= 10 ? now.getDate() : "0" + now.getDate()) + "  " + 
//     Week[now.getDay()] ;

//     document.getElementById("time").innerHTML = 
//     (now.getHours() >= 10 ? now.getHours() : "0" + now.getHours()) + " : " +
//     (now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes()) + " : " +
//     (now.getSeconds() >= 10 ? now.getSeconds() : "0" + now.getSeconds());

// }

function Timeline2(){
    var now = new Date();

    document.getElementById("date").innerHTML = 
    now.getFullYear() + "-" + 
    (now.getMonth()+1 >= 10 ? now.getMonth()+1  : "0" + now.getMonth()) + "-" +  
    (now.getDate() >= 10 ? now.getDate() : "0" + now.getDate()) + "  " + 
    Week[now.getDay()] ;

    document.getElementById("time").innerHTML = 
    (now.getHours() > 12 ? (now.getHours() - 12)  : now.getHours() ) + " : " +
    (now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes()) + " : " +
    (now.getSeconds() >= 10 ? now.getSeconds() : "0" + now.getSeconds()) + "  " + 
    (now.getHours()  >= 12 ? "PM" : "AM")

}

setInterval(Timeline2,1000)