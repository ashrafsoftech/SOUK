document.getElementById('orderform').addEventListener('submit', function(event){
	 // stop form from submitting

	let quantity = document.getElementById('quantity').value; 

	let productCost = 299.99; // the cost of the product

	let shippingMethod = document.querySelector('input[name= "shipping"]:checked').value;
	let shippingCost = 0;

	switch(shippingMethod) {
		case 'Overnight':
			shippingCost = 19.99;
			break;
		case '2day':
			shippingCost = 9.99;
			break;
		case 'budget':
			shippingCost = 0;
			break;
	}

	let totalCost = (productCost * quantity) + shippingCost;
	alert('Total Cost: $${totalCost.tofixed(2)}')
});


document.getElementById('same-address').addEventListener('change', function(){
	if(this.checked){
		document.getElementById('saddress').value = document.getElementById('baddress').value;
		document.getElementById('scity').value = document.getElementById('bcity').value;
		document.getElementById('sstate').value = document.getElementById('bstate').value;
		document.getElementById('szip').value = document.getElementById('bzip').value;
	}else {
		document
		document.getElementById('saddress').value = '';
		document.getElementById('scity').value = '';
		document.getElementById('sstate').value = '';
		document.getElementById('szip').value = '';
	}
});

document.getElementById('email').addEventListener('change', function(){
