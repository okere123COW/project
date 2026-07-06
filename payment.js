const methods = document.querySelectorAll("input[name='payment']");

const card = document.getElementById("cardForm");
const mpesa = document.getElementById("mpesaForm");
const paypal = document.getElementById("paypalForm");

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
            amount: 2450,
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