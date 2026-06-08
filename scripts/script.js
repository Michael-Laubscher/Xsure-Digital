// ===============================
// TYPEWRITER EFFECT
// ===============================
const text = "Modern Insurance Reimagined";
let i = 0;

function type(){
  if(i < text.length){
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 60);
  }
}
type();


// ===============================
// CURSOR GLOW FOLLOW
// ===============================
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});


// ===============================
// DARK / LIGHT MODE TOGGLE
// ===============================
const btn = document.getElementById("themeBtn");

btn.addEventListener("click",()=>{
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// load saved theme
if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark");
}


// ===============================
// FIREBASE SETUP (replace config)
// ===============================
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


// ===============================
// WAITLIST FORM
// ===============================
document.getElementById("waitlistForm")
.addEventListener("submit", async (e)=>{
  e.preventDefault();

  const email = document.getElementById("email").value;

  try{
    await db.collection("waitlist").add({
      email,
      created: new Date()
    });

    alert("You're on the waitlist!");
    document.getElementById("email").value = "";

  }catch(err){
    alert("Error submitting. Try again.");
  }
});