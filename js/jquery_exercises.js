
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

$(document).ready(function () {
    prompt("How old are you?");
});

$(document).ready(function () {
    alert("I'm ready!!!")
});
var contents = $('#codeup').html();
alert(contents);

$('.important').css('background-color', 'yellow');

$('.newclass').css('color','purple');
$('li,p,h1').css('background-color','purple');
$('li').css('font-size', '20px');
$('.codeup').css('border', '1px solid green');