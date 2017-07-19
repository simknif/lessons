
$(document).ready(function(){
    /*
    currentCoefficients = {
        "x2": "1",
        "x": "1",
        "c": "1"
    };
    */
    currentCoefficients = {
        "x2": "1",
    }

    /* localStorage.setItem('quadraticEquation', 'x^2 + x + 1'); */
    $('#slider1').on('moved.zf.slider', function(){
        var valueOfSlider1 = $(this).children('#slider-handle1').attr('aria-valuenow');
        console.log('valueOfSlider1 = ' + valueOfSlider1);
        currentCoefficients.x2 = valueOfSlider1;

        var eqVar = $('#eq').val();
        console.log('the value of #eq is: ' + eqVar);

        console.log('The value of currentCoefficients is: ' + currentCoefficients);
        //var newEquation = currentCoefficients.x2 + 'x^2 + ' + currentCoefficients.x + 'x + ' + currentCoefficients.c;
        var newEquation = currentCoefficients.x2 + 'x^2';

        console.log('newEquation is: ' + newEquation);
        $('#eq').text(newEquation).attr(newEquation);

        if (valueOfSlider1 > 1){
            $('#eq').val();
        } else {
            //newEquation = 'x^2 + ' + currentCoefficients.x + 'x + ' + currentCoefficients.c;
            newEquation = 'x^2';
        }

        var valueOfEq = $("#eq").val();

        console.log(valueOfEq);

        setTimeout(function(){
            $('#eq').val(newEquation);
            draw();
        }, 1);
    });

    $('#slider2').on('moved.zf.slider', function(){
        var valueOfSlider2 = $(this).children('#slider-handle2').attr('aria-valuenow');
        console.log('valueOfSlider2 = ' + valueOfSlider2);
        var newEquation2 = 'x^2 + ' + valueOfSlider2 + 'x + 1';

        currentCoefficients.x = valueOfSlider2;

        var eqVar2 = $('#eq').val();
        console.log('the value of #eq is: ' + eqVar2);

        console.log('The value of currentCoefficients is: ' + currentCoefficients);
        var newEquation2 = currentCoefficients.x2 + 'x^2 + ' + currentCoefficients.x + 'x + ' + currentCoefficients.c;
        console.log('newEquation is: ' + newEquation2);
        $('#eq').text(newEquation2).attr(newEquation2);

        if (valueOfSlider2 > 1){
            $('#eq').val();
        } else {
            newEquation2 = currentCoefficients.x2 + 'x^2 + ' + 'x + ' + currentCoefficients.c;
        }


        setTimeout(function(){
            $('#eq').val(newEquation2);
            draw();
        }, 1);
    });

    $('#slider3').on('moved.zf.slider', function(){
        var valueOfSlider3 = $(this).children('#slider-handle3').attr('aria-valuenow');
        console.log('valueOfSlider3 = ' + valueOfSlider3);
        var newEquation3 = currentCoefficients.x2 + 'x^2 + ' + currentCoefficients.x + 'x + ' + valueOfSlider3 + ' ' ;

        currentCoefficients.c = valueOfSlider3;

        setTimeout(function(){
            $('#eq').val(newEquation3);
            draw();
        }, 1);
    });
    draw();
});

function draw() {
    try {
        functionPlot({
            target: '#plot',
            grid: true,
            xAxis: {
                label: 'X-AXIS'
            },
            xLine: true,
            tip: {
                xLine: true,    // dashed line parallel to y = 0
                yLine: true,    // dashed line parallel to x = 0
                renderer: function (x, y, index) {
                    // the returning value will be shown in the tip
                }
            },
            data: [{
                fn: document.getElementById('eq').value,
                sampler: 'builtIn',  // this will make function-plot use the evaluator of math.js
                graphType: 'polyline'
            }]
        });
    }
    catch (err) {
        console.log(err);
        alert(err);
    }
}
