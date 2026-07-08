const params = new URLSearchParams(window.location.search);
const selectedItemName = params.get("item") || "Your selected advert";
const selectedPrice = Number(params.get("price")) || 2450;

const methods = document.querySelectorAll("input[name='payment']");

const card = document.getElementById("cardForm");
const mpesa = document.getElementById("mpesaForm");
const paypal = document.getElementById("paypalForm");
const selectedItemEl = document.getElementById("selectedItem");
const selectedPriceEl = document.getElementById("selectedPrice");
const totalAmountEl = document.getElementById("totalAmount");

selectedItemEl.textContent = selectedItemName;
selectedPriceEl.textContent = `Price: KES ${selectedPrice.toLocaleString()}`;
totalAmountEl.textContent = `KES ${selectedPrice.toLocaleString()}`;

methods.forEach(method => {

    method.addEventListener("change", () => {

        card.classList.add("hidden");
        mpesa.classList.add("hidden");
        paypal.classList.add("hidden");

        if(method.value === "card"){
            card.classList.remove("hidden");
        }

        if(method.value === "mpesa"){
            mpesa.classList.remove("hidden");
        }

        if(method.value === "paypal"){
            paypal.classList.remove("hidden");
        }

    });

});

document.getElementById("payNow").addEventListener("click", () => {

    const selected = document.querySelector("input[name='payment']:checked").value;

    fetch("http://localhost:5000/api/payment", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            amount: selectedPrice,
            paymentMethod: selected
        })

    })
    .then(response => response.json())
    .then(data => {

        console.log(data);

        alert(data.message);

        // Redirect if backend returns a payment URL
        if(data.paymentUrl){
            window.location.href = data.paymentUrl;
        }

    })
    .catch(error => {
        console.error(error);
        alert("Payment failed.");
    });

});