document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("darshanForm");
    const darshanSelect = form.elements["darshan"];
    const personsInput = form.elements["persons"];
    const priceSection = document.getElementById("priceSection");
    const totalAmountSpan = document.getElementById("totalAmount");

    const VIP_PRICE = 100;

    darshanSelect.addEventListener("change", updatePrice);
    personsInput.addEventListener("input", updatePrice);

    function updatePrice() {
        const darshanType = darshanSelect.value;
        const persons = personsInput.value || 1;

        if (darshanType === "vip") {
            priceSection.style.display = "block";
            totalAmountSpan.textContent = persons * VIP_PRICE;
        } else {
            priceSection.style.display = "none";
            totalAmountSpan.textContent = 0;
        }
    }

    console.log("New version Deployed");


    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.elements["name"].value;
        const darshan = darshanSelect.value;

        if (name === "" || darshan === "") {
            alert("Please fill all required fields.");
            return;
        }

        alert("Darshan request submitted successfully 🙏");

        form.reset();
        priceSection.style.display = "none";
    });

});
