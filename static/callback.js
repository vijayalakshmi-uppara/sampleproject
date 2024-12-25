const closseModel = document.getElementById("closeModel");
const modal = document.getElementById("callbackModel");

closseModel.addEventListener("click", () => {
    modal.style.display = "none";
});
// Form Submission Event
const form =document.getElementById("callbackForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const datetime = document.getElementById("datetime").value;

    // Display value in console or alert (simulate submission)
    console.log("Name:",name);
    console.log("Phone:",phone);
    console.log("Date & Time:",datetime);

    alert(`Thank you, ${name}! Your callback is scheduled for ${datetime}.`);

    // clear the form after submission
    form.requestFullscreen();
    modal.style.display = "none"

});