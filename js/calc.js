var controls = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, 'C', 'Res', '/'];

/*=============================================
=       Binding of html chunk and events      =
=============================================*/

function bindCalc(container){
    var sContent = '';

    sContent = '<div id="calculator"><input type="text" readOnly="readOnly" class="'+container+'-calculator-input form-control"/><div class="calculator-controls">'

    for(var i=0; i<controls.length ; i++){
        sContent += '<button onClick="updateDisplay(this.innerText, this.className);" class="'+ container+ 'btn-sm-'+ controls[i] +' btn">' + controls[i] + '</button>'
    }

    sContent += '</div></div>';
    document.getElementById(container).innerHTML = sContent;

}

/*=============================================
=            Update input value               =
=============================================*/

function updateDisplay(id, container) {

    container = container.split('btn')[0]; 
    if('C' === id){
        clearText(container);
    } else if('Res' === id) {
        evaluateResult(container);
    } else {
        var input = container + '-calculator-input';

        input = document.getElementsByClassName(input);
        if(input[0].value == undefined){
            input[0].value = '';
        }
        // add our new input to the display
        input[0].value += id;
    }
}

/*=============================================
=            Clear Input field                =
=============================================*/

function clearText(container) {

    var input = container + '-calculator-input';

        input = document.getElementsByClassName(input);
    // clear the display 
    input[0].value = '';
}

/*=============================================
=            Evaluate result                  =
=============================================*/

function evaluateResult(container) {

    var input = container + '-calculator-input';

        input = document.getElementsByClassName(input);
    var inputVal = input[0].value,
        result = eval(inputVal);

    input[0].value = result;
}

+function() {

    for(var i=0; i<containers.length; i++) {
        bindCalc(containers[i]);
    }

}();

