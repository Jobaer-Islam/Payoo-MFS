document.getElementById("cash-out-btn").addEventListener("click",
    function (event) {
        event.preventDefault();
        const account = document.getElementById("Account-Number").value;

        const amount = getInputValueById("cashout-amount");
        const pin = getInputValueById("cashout-pin");
        const mainBalance = getInnerTextById("main-balance")

        if (account.length === 11) {
            if (pin === 1234) {
                const sum = mainBalance - amount;
                // document.getElementById("main-balance").innerText = sum;
                setInnerTextByIDandValue("main-balance", sum);
            }
            else {
                console.log("pin thik nai")
            }
        }
        else {
            console.log("account number thik nai")
        }

    }
);