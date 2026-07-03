const methods = document.querySelectorAll("input[name='payment']");

const card = document.getElementById("cardForm");
const mpesa = document.getElementById("mpesaForm");
const paypal = document.getElementById("paypalForm");

methods.forEach(method=>{

method.addEventListener("change",()=>{

card.classList.add("hidden");
mpesa.classList.add("hidden");
paypal.classList.add("hidden");

if(method.value==="card"){
card.classList.remove("hidden");
}

if(method.value==="mpesa"){
mpesa.classList.remove("hidden");
}

if(method.value==="paypal"){
paypal.classList.remove("hidden");
}

});

});

document.getElementById("payNow").onclick=()=>{

const selected=document.querySelector(
"input[name='payment']:checked").value;

switch(selected){

case "card":
alert("Processing card payment...");
break;

case "mpesa":
alert("Sending STK Push...");
break;

case "paypal":
alert("Redirecting to PayPal...");
break;

}

}