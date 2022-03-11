
// Multiple
// Selector
// selector1[, selector2[, ...]]
// Selects the combined
// results of all
// the specified selectors.

"use strict";
/* ready is a anonymous function
// there for will execute the code inside

 $(document).ready(function() {

 INSERT JAVASCRIPT CODE SAMPLE HERE

 }); */
//
// $(document).ready(function () {
//     prompt("How old are you?");
//     alert("I'm ready!!!");
// });
//
// $(document).ready(function () {
//     alert("I'm ready!!!");
// });
// var contents = $('#codeup').html();
// alert(contents);
//
// $('.important').css('background-color', 'yellow');
//
// $('.newclass').css('color','purple');
// $('li,p,h1').css('background-color','purple');
// $('li').css('font-size', '20px');
// $('.codeup').css('border', '1px solid green');


// alerting contents

// $(document).ready(function () {
//    let h2 = $('#h2');
//     alert(h2.html());
// });



$(document).ready(function(){

    $('h1').click(function (){
        $('h1').css('background-color','red');
    })

});

$(document).ready(function(){

    $('p').dblclick(function (){
        $('p').css("fontSize", "20px");
    })

});

$(document).ready(function(){

    $('li').hover(function (){
        $('li').css("color", "red");
    })

});



// function with button inside of the fucntion which has a class that
//     activates with the button is clicked

// <script>
// $(document).ready(function(){
//     $(".btncss").click(function(){
//         $(".paracss").css({"color":"#000","padding":"10px","background":"yellow","border":"3px solid #ccc"});
//     });
// });
// </script>
// <button class="btncss">Click to Apply Multiple Style</button>
// <p class="paracss">This is a paragraph.</p>