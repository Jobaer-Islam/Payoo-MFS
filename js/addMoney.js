document.getElementById("add-money").addEventListener("click",
    function (event) {
        event.preventDefault();
        const amount = document.getElementById("Amount").value;
        const convertedAmount = parseFloat(amount);
        const pin = document.getElementById("pin").value;
        const convertedPin = parseInt(pin);
        const mainBalance = document.getElementById("main-balance").innerText;
        const convertedMainBalance = parseFloat(mainBalance);

        if (convertedPin === 1234) {
            const sum = convertedMainBalance + convertedAmount;
            console.log(sum);
            document.getElementById("main-balance").innerText = sum;
        } else {
            console.log("pin shothik na");
        }


    });