/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var timer2 = function(){
        var i = 0;
        for (i = 100; i <= 200; i++) {
            console.log(i);
            console.olog = function() {};
            console.log = function(message) {
                console.olog(message);
                if (i % 2 == 0){
                    $('#timer2').append( message + ' ');
                }
                else {
                    $('#timer2').append('<span>' + message+ ' ' + '</span>');
                }
            };
        }
        $('#timer2').find('span').css({"color": "blue"});
    }
    timer2();
});


