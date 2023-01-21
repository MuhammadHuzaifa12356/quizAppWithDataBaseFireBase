// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBUI1iCtf1Z8JJepuV7q_QG5G16NzD6AM",
  authDomain: "quizapp-73844.firebaseapp.com",
  databaseURL: "https://quizapp-73844-default-rtdb.firebaseio.com",
  projectId: "quizapp-73844",
  storageBucket: "quizapp-73844.appspot.com",
  messagingSenderId: "125253436944",
  appId: "1:125253436944:web:635b389c2b2317d6a1ac95",
  measurementId: "G-6SFDBD7QGT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var a = document.getElementById("quiz");
var b = document.getElementById("st");

window.display = function () {
  a.className += " dis";
  b.className += " ss";
};
var questions = [
  {
    ques: "who was the first President of the Constitution Assembly of Pakistan?",
    corect: "QUAID-E-AZAM",
    opt: [
      "QUAID-E-AZAM",
      "ALLAMA_IQBAL",
      "LIAQUAT_ALI_KHAN",
      "SARDAR_ABDUR_RAB",
    ],
  },
  {
    ques: "What official name was given to Pakistan in 1956 constitution?",
    corect: "Islamic Republic of Pakistan",
    opt: [
      "Republic of Pakistan",
      "Islamic Republic of Pakistan",
      "United States of Pakistan",
      "Islamic Pakistan",
    ],
  },
  {
    ques: "who was the first President of the Constitution Assembly of Pakistan?",
    corect: "9",
    opt: ["9", "7", "5", "4"],
  },
  {
    ques: "Who was the Prime Minister of Pakistan during enforcement of first constitution?",
    corect: "Choudhry Mohammad Ali",
    opt: [
      "Choudhry Mohammad Ali",
      "Ibrahim Ismail Chundrigar",
      "Khwaja Nazim Uddin",
      "Mohammad Ali Bogra",
    ],
  },
  {
    ques: "What is the other name of Mohammad Ali Bogra Formula?",
    corect: "Pakistan Report",
    opt: [
      "Pakistan Report",
      "New Law of Pakistan",
      "Third Report",
      "Fourth Report",
    ],
  },
  {
    ques: "Hazrat Usman khilafat period was _______?",
    corect: "12 Years",
    opt: ["2 Years", "11 Years", "12 Years", "10 Years"],
  },
  {
    ques: "Most of Hafiz Quran were martyred in which battle?",
    corect: "Yamama",
    opt: ["Uhud", "Yamama", "	Khyber", "Badr"],
  },
  {
    ques: "Who was the eldest daughter of Hazrat Muhammad (SAW)?",
    corect: "Hazrat bibi Zainab (R.A)",
    opt: [
      "Hazrat bibi Zainab (R.A)",
      "Hazrat bibi Ruqayyah (R.A)",
      "Hazrat bibi Umm Kulthum (R.A)",
      "Hazrat bibi Fatima (R.A)",
    ],
  },
  {
    ques: "Serial no of Surah Yasin w.r.t Surahs in Quran is __________?",
    corect: "36th",
    opt: ["32th", "36th", "38th", "34th"],
  },
  {
    ques: "Namaz-e-Khasoof is offered at the time of __________ ?",
    corect: "Lunar eclipse",
    opt: ["Solar eclipse", "heavy rain", " earthquake", "Lunar eclipse"],
  },
];

var quesNo = document.getElementById("questionNo");
var ansParent = document.getElementById("Answers");

var questionShow = document.getElementById("dummyquestion");
var score = document.getElementById("marks");
var percentage = document.getElementById("percentage");
var indexNum = 0;
var marks = 0;
function renderQuestion() {
  var currentQue = questions[indexNum];
  quesNo.innerHTML = "QUESTION:" + (indexNum + 1) + "/" + questions.length;
  questionShow.innerHTML = currentQue.ques;
  ansParent.innerHTML = " ";

  for (var i = 0; i < currentQue.opt.length; i++) {
    var obj = {
      question: currentQue.ques,
      CorrectAns: currentQue.corect,
      OptionSelected: currentQue.opt[i],
    };
    ansParent.innerHTML += `<div class="col-md-6 py-2 ">
        <button onclick="checkQuestion('${currentQue.opt[i]}','${currentQue.corect}')">${currentQue.opt[i]}</button>
    </div>`;
  }
  obj.id = Math.random().toString().slice(2);
  let reference = ref(database, `tasks/Question${indexNum + 1}/${obj.id}/`);
  set(reference, obj);
  console.log(obj);
}

renderQuestion();
window.checkQuestion = function (a, b) {
  if (a == b) {
    marks++;
    score.innerHTML = "SCORE :" + marks;
    percentage.innerHTML = "PERCENTAGE : " + (marks / 10) * 100 + "%";
  }
  nextQuestion();
};

window.nextQuestion = function () {
  indexNum++;
  if (indexNum == questions.length) {
    var display1 = document.getElementById("main");
    display1.style.display += " none";
  }
  renderQuestion();
};

// window.saveTask = function () {

// };

// function getData() {
//   let reference = ref(database, "task/");
//   let arr = [];
//   onChildAdded(reference, function (dt) {
//     arr.push(dt.val());
//     console.log(arr);
//     parent.innerHTML = "";
//     for (var i = 0; i < arr.length; i++) {
//       parent.innerHTML += `<li>${arr[i].task} </li>`;
//     }
//   });
// }

// getData();
