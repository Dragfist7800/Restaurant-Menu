function filterSelection() {
		var c = document.getElementById("myDropdown").value;
    	var breakfast = document.getElementById("breakfast");
    	var lunch = document.getElementById("lunch");
    	var dinner = document.getElementById("dinner");
    	var desserts = document.getElementById("desserts");



	if(c =='A'){
		breakfast.style.display="block";
		lunch.style.display="block";
		dinner.style.display="block";
		desserts.style.display="block";
	}
	else if(c == 'B'){
		breakfast.style.display="block";
		desserts.style.display="none";
		
		lunch.style.display="none";
		dinner.style.display="none";
		
	}
	else if(c == 'C'){
		desserts.style.display="none";
		breakfast.style.display="none";
		lunch.style.display="block";
		dinner.style.display="none";
	}
	else if(c == 'D'){
		breakfast.style.display="none";
		lunch.style.display="none";
		dinner.style.display="block";
		desserts.style.display = "none";

	}
	else if(c == 'E'){
		breakfast.style.display="none";
		lunch.style.display="none";
		dinner.style.display="none";
		desserts.style.display="block";
	}
}








