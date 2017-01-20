$(document).ready(function(){
	$(".submit").on("click", function(e){
		e.preventDefault();
		var email = $("#email").val().trim();
		var to = "fetchdb111@gmail.com"
		var subject = $("#name").val().trim();
		var text = $("#message").val().trim();

		var data = {
			from: email, 
		    to: to,
		    subject: subject, 
		    text: text
	 	};

	 	console.log(data);

		$.ajax({
            url: '/email',
            type: 'POST',
            data: data

        })
        .done(function (response) {
        	console.log(response);
        	if(response){
        		alert("message sent");
        	}
        });
	});
});