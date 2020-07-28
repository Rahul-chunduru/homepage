var colours = [
    { name: 'blue',   hex: '#2e7bcf' },
    { name: 'orange', hex: '#f15f3e' },
    { name: 'green',  hex: '#006400'},
    { name: 'black',  hex: '#111111' }
];

var colour_secondary = [
    { name: 'blue',   hex: '#9ddcff' },
    { name: 'orange', hex: '#fdbcb4' },
     { name: 'green',  hex: '#ace1af'},
    { name: 'black',  hex: '#696969' }
];

// default
var colorIndex = 0; 

$(function()
{
    // add colours
    var $palette = $("#palette");
    for (var i = 0; i < colours.length; i++)
    {
        $palette.append($('<li class="colorItem" />').css({'background-color': colours[i].hex, 
            'color': colour_secondary[i].hex}).data('index', i));
    }

    var index = findGetParameter('colorIndex'); 
    if(hasValue(index))
    {
        colorIndex = parseInt(index);
    }
    document.documentElement.style.setProperty("--primary-color",  colours[colorIndex].hex);
    document.documentElement.style.setProperty("--secondary-color",  colour_secondary[colorIndex].hex); 
    setBackground();

    // add button functionality
     $(document).on('click', '.colorItem', function()
    {
        // set colorIndex and be that color
        colorIndex = $(this).data('index');
        document.documentElement.style.setProperty("--primary-color",  $(this).css('background-color'));
        document.documentElement.style.setProperty("--secondary-color",  $(this).css('color'));
        setBackground();
    });

    // send that color through link
    $(document).on('click', '.nav-bar-link', function()
    {
        var newLink = $(this).attr("href") + "?colorIndex=" + colorIndex; 
        $(this).attr("href", newLink); 
    })

});

function hasValue(data) {
    return (data !== undefined) && (data !== null) && (data !== "");
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

function setBackground() {

    document.querySelector("#avatar").src = "assets/images/tropius.png";
    if(colorIndex == 0 || !hasValue(colorIndex))
         {
            document.querySelector('header').style.background = "url(assets/images/header-bg.jpg) 0 0 repeat-x"; 
         }
         else {
            document.querySelector('header').style.background = "" ;

            if(colorIndex == 2) {
                document.querySelector("#avatar").src = "assets/images/tropius.png";
            }     
         }
}