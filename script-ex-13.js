const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".program-details");


buttons.forEach(function (button) {
    const panel = document.getElementById(button.dataset.target);

    // fail loudly at load time, not silently at click time
    if (!panel) {
        console.warn("No panel for target:", button.dataset.target);
        return;
    }

    button.addEventListener("click", function () {
        details.forEach(function (item) { item.hidden = true; });
        panel.hidden = false;
    });
});



const form = document.querySelector("#registration-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.querySelector("#registration-name").value;
    const program = document.querySelector("#registration-program").value;

    const message = "Thanks, "+ name +", for registering for "+ program +"!";

    const confirmation = document.querySelector("#confirmation-message");

    confirmation.textContent = message;

    confirmation.hidden = false;

});