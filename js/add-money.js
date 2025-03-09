document.getElementById("btn-add-money").addEventListener("click",
    function (event) {
        event.preventDefault();
        const amount = getInputValueById("Amount");
        const pin = getInputValueById("pin");
        const account = document.getElementById("Account-Number").value;

        const mainBalance = getInnerTextById("main-balance")

        if (account.length === 11) {
            if (pin === 1234) {
                const sum = mainBalance + amount;
                // document.getElementById("main-balance").innerText = sum;
                setInnerTextByIDandValue("main-balance", sum);

                const container = document.getElementById("transaction-container");
                const now = new Date();
                const p = document.createElement("p");
                p.innerText = ` added ${amount} from account ${account} ${now}`
                container.appendChild(p)
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