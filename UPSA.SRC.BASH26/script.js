// =========================
// TICKET PRICE CALCULATOR
// =========================

const ticketType = document.getElementById("ticketType");
const quantity = document.getElementById("quantity");
const totalAmount = document.getElementById("totalAmount");

function calculateTotal() {

    const ticketPrice = Number(ticketType.value);
    const numberOfTickets = Number(quantity.value);

    const total = ticketPrice * numberOfTickets;

    totalAmount.textContent = `GH₵${total}`;
}

ticketType.addEventListener("change", calculateTotal);

quantity.addEventListener("input", calculateTotal);


// =========================
// TICKET PURCHASE
// =========================

const ticketForm = document.getElementById("ticketForm");
const ticketMessage = document.getElementById("ticketMessage");

ticketForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const phone = document.getElementById("phone").value;

    const numberOfTickets = Number(quantity.value);
    const total = Number(ticketType.value) * numberOfTickets;


    ticketMessage.innerHTML = `
        <div class="success-message">

            <h3>🎉 Ticket Purchased Successfully!</h3>

            <p>
                Congratulations, <strong>${fullName}</strong>!
            </p>

            <p>
                Your ticket purchase for the
                <strong>UPSA SRC Bash 2026</strong>
                has been successfully received.
            </p>

            <p>
                🎟️ Number of Tickets:
                <strong>${numberOfTickets}</strong>
            </p>

            <p>
                💰 Total Amount:
                <strong>GH₵${total}</strong>
            </p>

            <p>
                📞 We will contact you at
                <strong>${phone}</strong>.
            </p>

        </div>
    `;

    ticketForm.reset();

    totalAmount.textContent = "GH₵0";

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting the UPSA SRC Bash team. We will get back to you soon!"
    );

    contactForm.reset();

});