function saveContact(name, email, msg) {
    var contact = {
        name: name,
		email: email,
		message: msg
    };

    firebase.database().ref('contact-entries').push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

$(document).ready(function(){
	$("a.nav").click(function(e){
		e.preventDefault();
    $('html,body').scrollTo(this.hash, 800, { queue:true });
	});
});