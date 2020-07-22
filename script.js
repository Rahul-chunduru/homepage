var colours = [
    { name: 'blue',   hex: '#2e7bcf' },
    { name: 'orange', hex: '#f15f3e' },
    { name: 'black',  hex: '#111111' },
    { name: 'green',  hex: '#006400'},
    { name: 'yellow', hex: '#ffe135'},
    { name: 'purple', hex: '#6a0dad'}
];

var colour_secondary = [
    { name: 'blue',   hex: '#9ddcff' },
    { name: 'orange', hex: '#fdbcb4' },
    { name: 'black',  hex: '#696969' },
    { name: 'green',  hex: '#ace1af'},
    { name: 'yellow', hex: '#fdfd96'},
    { name: 'purple', hex: '#dda0dd'}
];

$(function()
{
    $(document).on('click', '.colorItem', function()
    {
         $('.activeColour').css('background-color', $(this).css('background-color'));
         document.documentElement.style.setProperty("--primary-color",  $(this).css('background-color'));
         document.documentElement.style.setProperty("--secondary-color",  $(this).css('color'));
    });

    var $palette = $("#palette");
    for (var i = 0; i < colours.length; i++)
    {
        $palette.append($('<li class="colorItem" />').css({'background-color': colours[i].hex, 
            'color': colour_secondary[i].hex}));
    }
    
    $('input[type="color"]').change(function() {
          $('.activeColour').css('background-color', this.value);
    });

    
});

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