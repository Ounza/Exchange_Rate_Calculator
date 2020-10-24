const currency1 = document.getElementById('currency-one');
const currency2 = document.getElementById('currency-two');
const amount1 = document.getElementById('amount-one');
const amount2 = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetc Exchange rates and update the DOM
function calculate(){
    const currencyone = currency1.value;
    const currencytwo = currency2.value;
    fetch(`https://www.exchangerate-api.com/v4/latest/${currencyone}`)
    .then((res) => res.json())
    .then(data => {
        const rates = data.rates[currencytwo]
        rate.innerHTML=`1 ${currencyone} = ${currencytwo}`; 
        amount2.value = (amount1.value* rates).toFixed(2);
    });
}
//Add event listeners
currency1.addEventListener('change', calculate);
amount1.addEventListener('input', calculate);
currency2.addEventListener('change', calculate);
amount2.addEventListener('input', calculate);
swap.addEventListener('click', () => {
   const temp= currency1.value;
   currency1.value =currency2.value;
   currency2.value = temp;
   calculate();

});
calculate();
