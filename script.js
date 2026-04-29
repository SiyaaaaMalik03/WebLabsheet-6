// ================= Q15: Alert =================
function showAlert() {
    alert("Hello! This is a JavaScript Alert.");
}

// ================= Q16: Change Text =================
function changeText() {
    document.getElementById("text").innerHTML = "Text Changed Successfully!";
}

// ================= Q17: Form Validation =================
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("All fields are required!");
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}

// ================= Q18: Change Background =================
function changeBg() {
    let colors = ["lightblue", "lightgreen", "lightpink", "lightyellow"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
}
