var element = document.getElementById('digit');
var digit1 = document.getElementById('digit_1');
var historyBox = document.getElementsByClassName('history')[0];
function getValue(a) {
    if (element.value == 0) {
        element.value = a;
    }
    else {
        element.value += a;
    }
}

function removeEnd() {
    temp = element.value
    if (temp.length > 1) {
        element.value = temp.slice(0, -1);
    }
    else {
        element.value = '0';
    }
}

function clearAll() {
    element.value = '0';
    digit1.value = '';
}

function solution() {
    temp = element.value;
    element.value = eval(temp);
    digit1.value = temp + " =";

    showHistory();
}
function showHistory(){
    
     var history = '<div class="his">';
     history+= "<p>"+digit1.value+"</p> <p>"+element.value+"</p>";
     history+='</div>';
     historyBox.innerHTML += history;
}
