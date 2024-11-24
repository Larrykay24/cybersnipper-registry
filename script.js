const firebaseConfig = {
  apiKey: "AIzaSyCgHCkWPee6csox2J5zgjalaoGX1Fo9B7s",
  authDomain: "blac-magik-movies.firebaseapp.com",
  databaseURL: "https://blac-magik-movies-default-rtdb.firebaseio.com",
  projectId: "blac-magik-movies",
  storageBucket: "blac-magik-movies.firebasestorage.app",
  messagingSenderId: "812397319774",
  appId: "1:812397319774:web:740069526fb209dbe8c6cf",
  measurementId: "G-6L12HTGJD2"
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
