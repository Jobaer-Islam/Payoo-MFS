// step 1: Id কে ধরছি getElementById দিয়ে
document.getElementById("btn-login").addEventListener("click",
    function (event) {
        event.preventDefault();
        const accountNUmber = document.getElementById("Account-Number").value;
        const pin = document.getElementById("pin").value;
        const convertedPin = parseInt(pin);
        if (accountNUmber.length === 11) {
            if (convertedPin === 1234) {
                window.location.href = "main.html";
            } else {
                alert("pin thik nai")
            }
        } else {
            alert("need valid account number")
        }

    });