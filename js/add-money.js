document.getElementById("btn-add-money").addEventListener("click",
    function (event) {
        event.preventDefault();
        const amount = getInputValueById("Amount");
        const pin = getInputValueById("pin");
        const account = document.getElementById("Account-Number").value;

        const mainBalance = getInnerTextById("main-balance")
        const selectedBank = document.getElementById("allbank").value;


        if (amount < 0) {
            alert("Bhai eita kono kotha?")
            return;
        }

        if (account.length === 11) {
            if (pin === 1234) {
                const sum = mainBalance + amount;
                // document.getElementById("main-balance").innerText = sum;
                setInnerTextByIDandValue("main-balance", sum);

                const container = document.getElementById("transaction-container");
                const now = new Date();
                // const p = document.createElement("p");
                // p.innerText = `${selectedBank} added ${amount} from account ${account} ${now}`
                // container.appendChild(p)
                const div = document.createElement("div");
                div.classList.add("bg-red-300");
                div.innerHTML = ` 
                <h1 class = text-white>Added money from ${selectedBank}</h1>
                <h3>${amount}</h3>
                <p>Account number: ${account}</p>
                
                `
                container.appendChild(div);
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