/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    var timer1 = function(){
        var i = 0;
        while (i <= 100) {
            console.log(i);
            console.olog = function() {};
            console.log = function(message) {
                console.olog(message);
                if (i % 2 == 0){
                    $('#timer1').append('<span>' + message + ' ' + '</span>');
                    $('#timer1').find('span').css({"color": "blue"});
                }
                else {
                    $('#timer1').append('<figures>' + message+ ' ' + '</figures>');
                    $('#timer1').find('figures').css({"color": "red"});
                }
            };
            i++;
        }    
    };
    timer1();
});



