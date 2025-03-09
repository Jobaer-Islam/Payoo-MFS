document.getElementById("cash-out").style.display = "none"

document.getElementById("add-money-card").addEventListener
    ("click", function () {
        handleToggle("add-money", "block")
        handleToggle("cash-out", "none")
        handleToggle("transantion-history", "none")

    });

document.getElementById("cash-out-card").addEventListener
    ("click", function () {
        handleToggle("add-money", "none")
        handleToggle("cash-out", "block")
        handleToggle("transantion-history", "none")

    });

