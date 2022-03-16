// <!doctype html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8"/>
//     <title>Document</title>
// <style>
//     body {
//     padding: 5em;
// }
//
//     hr {
//     margin: 5em 0;
// }
//
//     #font-grow, #hl-toggle {
//     cursor: pointer;
//
// }
//     .star {
//     cursor: pointer;
//     background-color: yellow;
// }
//     .yellow-bg {
//     background-color: yellow;
// }
// </style>
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
// </head>
// <body>
//
// <button id="change-bg-color">
//     Change the background color
// </button>
//
// <hr>
//
//     <button class="btn">First</button>
//     <button class="btn">Second</button>
//     <button class="btn">Third</button>
//
//     <hr>
//
//         <button id="reset-btn">Reset</button>
//
//         <hr>
//
//             <div>
//                 <p>
//                     <i class="star fa fa-star checked" data-value="1"></i>
//                     <i class="star fa fa-star checked" data-value="2"></i>
//                     <i class="star fa fa-star checked" data-value="3"></i>
//                 </p>
//                 <p>You are hovering star number: <span id="review-result"></span> </p>
//             </div>
//
//             <hr>
//
//                 <div>
//                     <label for="custom-url">URL: </label>
//                     <input type="text" id="custom-url">
//                         <button id="go-to-btn">Go to</button>
//                 </div>
//
//                 <hr>
//
//                     <button id="append-to-ul">Append to the ul</button>
//                     <ul id="append-to-me"></ul>
//
//                     <hr>
//
//                         <ul id="font-grow">
//                             <li>text</li>
//                             <li>text</li>
//                             <li>text</li>
//                         </ul>
//
//                         <hr>
//
//                             <input id="input">
//                                 <button id="upcase-name">Upper Case</button>
//                                 <p id="output"></p>
//
//
//                                 <hr>
//
//                                     <ul id="hl-toggle">
//                                         <li>1</li>
//                                         <li>2</li>
//                                         <li>3</li>
//                                         <li>4</li>
//                                     </ul>
//
//                                     <hr>
//
//                                         <ul>
//                                             <li class="sibling-clicker">Bold my sibling's font</li>
//                                             <li class="sibling-clicker">Bold my sibling's font</li>
//                                             <li class="sibling-clicker">Bold my sibling's font</li>
//                                             <li class="sibling-clicker">I am the last sibling</li>
//                                         </ul>
//
//                                         <script src="jquery-2.2.4.js"></script>
//
//                                         <script src="main.js"></script>
//
//
//
// </body>
// </html>



/**
 * Write your solutions here
 */
"use strict";

// #1
$('#change-bg-color').click(function () {
    $('*').css('background', 'blue')
});

// #2

$( ".btn" ).click(function() {
    $(this).css('background', '#93f2e5')
});


// #3
$('#reset-btn').click(function () {
    location.reload();
});

// #4
$('.star').hover(function () {
    alert($(this).data('#review-result'));
});


// #5 http://www.google.com come back to
$('#go-to-btn').click(function () {
    window.location = url;
});

// #6

$("#append-to-ul").click(function () {
    $("#append-to-me").append('<li>text</li>');
});

// #7
$("#font-grow").dblclick(function () {

    var currentSize = $(this).css('font-size');
    var currentSize = parseFloat(currentSize) * 1.4;

    $(this).css('font-size', currentSize);

});

// #8

$(document).ready(function(){
    // Get value on button click and show alert
    $("#upcase-me").click(function(){
        var str = $("#custom-url").val();
        alert(str);
    });
});

// #9 comeback

$( "#hl-toggle > li" ).click(function() {
    $( this ).toggleClass("yellow-bg");
});


// #10

$( ".sibling-clicker" ).click(function() {

    var fontSize = $(this).css("font-weight", "bold");

    $(this).toggleClass(fontSize);
});
