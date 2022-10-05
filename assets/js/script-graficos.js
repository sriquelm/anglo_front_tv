//Los bronces
var circle1 = new circleDonutChart('LB-M');
    circle1.draw({end:98.4,start:0, maxValue:100, titlePosition:"outer-top", titleText:"", outerCircleColor:'#0085c8', innerCircleColor:'#909081'});
    document.addEventListener('click', moveAround, false);
    function moveAround(){
    circle1.draw( {end:100*Math.random()} );
}


var circle2 = new circleDonutChart('LB-D');
    circle2.draw({end:60,start:0, maxValue:100, titlePosition:"outer-top", titleText:"", outerCircleColor:'#0085c8', innerCircleColor:'#909081'});
    document.addEventListener('click', moveAround, false);
    function moveAround(){
    circle1.draw( {end:100*Math.random()} );
}

var circle3 = new circleDonutChart('LB-C');
    circle3.draw({end:40,start:0, maxValue:100, titlePosition:"outer-top", titleText:"", outerCircleColor:'#0085c8', innerCircleColor:'#909081'});
    document.addEventListener('click', moveAround, false);
    function moveAround(){
    circle1.draw( {end:100*Math.random()} );
}

// Fundición chagres

var circle4 = new circleDonutChart('FC-M');
    circle4.draw({end:30,start:0, maxValue:100, titlePosition:"outer-top", titleText:"", outerCircleColor:'#0085c8', innerCircleColor:'#909081'});
    document.addEventListener('click', moveAround, false);
    function moveAround(){
    circle1.draw( {end:100*Math.random()} );
}

var circle5 = new circleDonutChart('FC-D');
    circle5.draw({end:44,start:0, maxValue:100, titlePosition:"outer-top", titleText:"", outerCircleColor:'#0085c8', innerCircleColor:'#909081'});
    document.addEventListener('click', moveAround, false);
    function moveAround(){
    circle1.draw( {end:100*Math.random()} );
}

var circle6 = new circleDonutChart('FC-C');
    circle6.draw({end:96,start:0, maxValue:100, titlePosition:"outer-top", titleText:"", outerCircleColor:'#0085c8', innerCircleColor:'#909081'});
    document.addEventListener('click', moveAround, false);
    function moveAround(){
    circle1.draw( {end:100*Math.random()} );
}


//El soldado

var circle7 = new circleDonutChart('ES-M');
    circle7.draw({end:88,start:0, maxValue:100, titlePosition:"outer-top", titleText:"", outerCircleColor:'#0085c8', innerCircleColor:'#909081'});
    document.addEventListener('click', moveAround, false);
    function moveAround(){
    circle1.draw( {end:100*Math.random()} );
}

var circle8 = new circleDonutChart('ES-D');
    circle8.draw({end:96,start:0, maxValue:100, titlePosition:"outer-top", titleText:"", outerCircleColor:'#0085c8', innerCircleColor:'#909081'});
    document.addEventListener('click', moveAround, false);
    function moveAround(){
    circle1.draw( {end:100*Math.random()} );
}

var circle9 = new circleDonutChart('ES-C');
    circle9.draw({end:2,start:0, maxValue:100, titlePosition:"outer-top", titleText:"", outerCircleColor:'#0085c8', innerCircleColor:'#909081'});
    document.addEventListener('click', moveAround, false);
    function moveAround(){
    circle1.draw( {end:100*Math.random()} );
}
