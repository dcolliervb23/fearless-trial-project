$(document).ready(function(){

    $('#incrementCounter').click(function() {
        $.getJSON("https://api.countapi.xyz/hit/dc-fearless-trial/1ccb732e-b55a-4404-ad3f-0f99c02fe44e", function(response) {
            $("#counter").text(response.value);
        });    
    })
    $('#incrementCounter').click();

  });