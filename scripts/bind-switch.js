/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var textForSpecialSection="";
    //модуль по загрузки чисел от 1 до 100
    var script = document.createElement('script');
        script.src = "scripts/timer100.js";
        document.body.appendChild(script);

        script.onload = function() {
            var text=1;
            switchText(text);
        };
        
    //модуль по загрузки чисел от 100 до 200
    var script = document.createElement('script');
        script.src = "scripts/timer200.js";
        document.body.appendChild(script);

        script.onload = function() {
            var text=2;
            switchText(text);
        };
        
    //модуль по очистке данных на странице с помощью JavaScript
    $('.timer-clear').bind('click', function() {
        var text=3;
        switchText(text);
    });
    
    //модуль по очистке данных на странице с помощью jQuery
    $('.timer-empty').bind('click', function() {
       var text=4;
       switchText(text);
    });
    
    var switchText = function(text){
        switch (text) {
        case 1:
            textForSpecialSection += '<p>'+'«Произошло событие: «Начался вывод чисел от 1 до 100, четные цифры будут подсвечены красным цветом, нечетные числа синим цветом »'+'</p>';
            $('.specialSection').html(textForSpecialSection);
            break
        case 2:
            textForSpecialSection += '<p>'+'«Произошло событие: «Начался вывод чисел от 100 до 200, нечетные цифры будут подсвечены синим цветом»'+'</p>';
            $('.specialSection').html(textForSpecialSection);
            break
        case 3:
            textForSpecialSection = '<p>'+'«Произошло событие: «Очищены все данные на странице с помощью JavaScript»'+'</p>';
            $('.specialSection').html(textForSpecialSection);
            break
        case 4:
            textForSpecialSection = '<p>'+'«Произошло событие: «Очищены все данные на странице с помощью jQuery»'+'</p>';
            $('.specialSection').html(textForSpecialSection);
            break
    }
    }; 
});

