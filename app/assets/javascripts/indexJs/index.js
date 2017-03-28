/**
 * Created by Admin on 20.11.2016.
 */

function show(data) {
    var result = $('#result');
    if (data.value.length == 0) result.append("<p>Таких чисел нет</p>");
    else {
        result.append('<p>Числа Армстронга:</p>');
        result.append('<table border="1" width="100px" align="center">');
        result = result.find('table');
        for (var i = 0; i < data.value.length; i++)
            result.append("<tr><td class='cell'>" + data.value[i] + "</td></tr>");
    }
    $('#flag').hide();
}

$(document).ready(function () {
    $('#flag').bind("ajax:success",
        function (xhr, data, status) {
            show(data)
        })
});