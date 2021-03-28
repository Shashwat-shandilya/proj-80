function getparagraph1(){
    var inputs = [];
    var alert_empty = [];
    var empty_TBox = 0;
    var is_or_are =0;

    for (var index = 1; index <= 6; index++) {
        if (document.getElementById("para1_input" + index).value == "") {
            alert_empty.push("para1_input" + index);
            alert_empty.join(",");
            empty_TBox = 1;
            is_or_are = is_or_are + 1;
        }
        else{
            inputs.push(document.getElementById("para1_input" + index).value);
            inputs.join(". ");
        }  
    }

    if (empty_TBox == 0) {
        inputs.push(document.getElementById("."))
        document.getElementById("showparagraph1").innerHTML = inputs.join(". ");
    }
    else{
        if (is_or_are >1) {
            alert(alert_empty + " are empty");
        }
        else{
            alert(alert_empty + " is empty");
        }
        
    }

}




function getparagraph2(){
    var inputs = [];
    var alert_empty = [];
    var empty_TBox = 0;
    var is_or_are =0;

    for (var index2 = 1; index2 <= 6; index2++) {
        if (document.getElementById("para2_input" + index2).value == "") {
            alert_empty.push("para2_input" + index2);
            empty_TBox = 1;
            is_or_are = is_or_are + 1;
        }
        else{
            inputs.push(document.getElementById("para2_input" + index2).value);
            inputs.join(". ");
        }  
    }

    if (empty_TBox == 0) {
        inputs.push(document.getElementById("."))
        document.getElementById("showparagraph2").innerHTML = inputs.join(". ");
    }
    else{
        if (is_or_are >1) {
            alert(alert_empty + " are empty");
        }
        else{
            alert(alert_empty + " is empty");
        }
        
    }

}