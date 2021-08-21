
// global variable for accesible in all function
const fixedTotal = 1299;
let cost;
// value will be changed when clicked
function getValueChanged(clickElementId, changeElementId, value )
{	
	
	document.getElementById(clickElementId).addEventListener('click', function(){
		const getValue = document.getElementById(changeElementId);
		const changeValue = value;
		getValue.innerText = changeValue;	// accounting total price
		let totalPrice = fixedTotal + totalExtra();
		document.getElementById('total-price').innerText = totalPrice.toString();
		document.getElementById('last-total').innerText = totalPrice.toString();
	});
	
}
// getValueChanged function calling
	 getValueChanged('memory-btn-1', 'extra-memory-cost', 0);
	 getValueChanged('memory-btn-2', 'extra-memory-cost', 180);
	 getValueChanged('storage-btn-1', 'extra-storage-cost', 0);
	 getValueChanged('storage-btn-2', 'extra-storage-cost', 100);
	 getValueChanged('storage-btn-3', 'extra-storage-cost', 180);
	 getValueChanged('delivery-btn-1', 'delivery-charge', 0);
	 getValueChanged('delivery-btn-2', 'delivery-charge', 20);
	
	 // counting total price function
	
	function totalExtra(){
		const extraMemoryValue = parseInt(document.getElementById('extra-memory-cost').innerText);
		const extraStorageValue = parseInt(document.getElementById('extra-storage-cost').innerText);
		const deliveryChargeValue = parseInt(document.getElementById('delivery-charge').innerText);
		cost = extraMemoryValue + extraStorageValue + deliveryChargeValue;
		return cost;
	}	

// Promo code function and calling
function coponDiscount(){
	
	document.getElementById('apply').addEventListener('click',function(){
		let getTotalPrice = parseInt(document.getElementById('total-price').innerText);
		const code = document.getElementById('promo-code');
		if( code.value == 'stevekaku'){
		let discountPrice = (getTotalPrice - getTotalPrice/5);
		document.getElementById('last-total').innerText = discountPrice.toString();
		}
		code.value = '';
	});
}
coponDiscount();	// promo code function calling
