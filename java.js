jQuery(document).ready(function($){

    /*
    $("button").click(function(){
        var textValue = $('#number').val();
        if(!textValue) {
            alert('Enter your age');
            return;
        }
        if(textValue){
            $("#tasks").prepend(textValue);
            return;
        }

        
    });    
});  
    
*/

$("button").click(function(){
    var textValue = $('#number').val();
    if(textValue === "") {
        alert('Enter your age');
        return;
    }
    if(textValue !== ""){
        $( "#tasks" ).prepend( "<p>" + textValue + "</p>" );
        return;
    }

    
});    
});  

/*$( "p" ).prepend( "<div id='tasks'>" + textValue + "</div>" ); */