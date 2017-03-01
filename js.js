function scroll(position){
	var msg = "I'm Diana Kris Navarro.";
	var curr= "";
	var sc = document.getElementById("myName");

	for(var i=0;i<=position;i++){
		curr += msg.charAt(i);
	}
	sc.innerHTML = curr;
	position++;

	if (position != msg.length) {
		window.setTimeout(function() { scroll(position); }, 70);
	}
	else {
		window.setTimeout(function() { scroll(0); }, 300);
	}
}
scroll(0);
