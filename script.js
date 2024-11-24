document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const skill = document.getElementById("skill").value;

    const studentInfo = `
        <div class="card bg-secondary text-white mb-3">
            <div class="card-body">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Age:</strong> ${age}</p>
                <p><strong>Skill:</strong> ${skill}</p>
            </div>
        </div>
    `;

    document.getElementById("studentsList").innerHTML += studentInfo;
    document.getElementById("registrationForm").reset();
    alert("Registration successful!");
});

document.getElementById("checkInfoBtn").addEventListener("click", function () {
    const studentsInfoDiv = document.getElementById("studentsInfo");
    studentsInfoDiv.style.display = studentsInfoDiv.style.display === "none" ? "block" : "none";
});


document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("You be Monkey, Why u wan copy person Info.");
});