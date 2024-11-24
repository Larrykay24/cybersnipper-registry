const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const skill = document.getElementById("skill").value;

    // Reference to Firebase database
    const studentsRef = database.ref("students");

    // Push new student data to the database
    studentsRef.push({
        name: name,
        phone: phone,
        age: age,
        skill: skill
    });

    // Reset the form and show success message
    document.getElementById("registrationForm").reset();
    alert("Registration successful!");
});

// Fetch and display students' data
function displayStudents() {
    const studentsRef = database.ref("students");
    studentsRef.on("value", function(snapshot) {
        const studentsList = document.getElementById("studentsList");
        studentsList.innerHTML = "";  // Clear previous list

        snapshot.forEach(function(childSnapshot) {
            const student = childSnapshot.val();
            const studentInfo = `
                <div class="card bg-secondary text-white mb-3">
                    <div class="card-body">
                        <p><strong>Name:</strong> ${student.name}</p>
                        <p><strong>Phone:</strong> ${student.phone}</p>
                        <p><strong>Age:</strong> ${student.age}</p>
                        <p><strong>Skill:</strong> ${student.skill}</p>
                    </div>
                </div>
            `;
            studentsList.innerHTML += studentInfo;
        });
    });
}

// Call displayStudents on page load to fetch data
window.onload = displayStudents;


document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("You be Monkey, Why u wan copy person Info.");
});
