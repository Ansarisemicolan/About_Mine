$(document).ready(function(){        
   
})

function ScreenMode()
{

    if($('#Mode').prop('checked') == true)
    {
        $('.main').css({
            "background-color" : "white",
            "color" : "black"
        });

        $('.Badge').css({
            "background-color" : "#CDFCF6",
            "color" : "black"
        });

        $('.fadebox1').css({
            "background-color" : "#CDFCF6",            
        });

        $('.fadebox1 a').css({
            "color" : "black"
        })
    }
    else
    {
        $('.main').css({
            "background-color": "black",
            "color": "white"
        });

        $('.Badge').css({
            "background-color" : "#2C394B",
            "color" : "white"
        });

        $('.fadebox1').css({
            "background-color" : "#2C394B",            
        });

        $('.fadebox1 a').css({
            "color" : "white"
        })
    }
}

