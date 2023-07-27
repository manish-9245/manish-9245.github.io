const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");

  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    
  }
  
  
}

//timeline

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;
document.addEventListener("DOMContentLoaded", function() {
  fetch('https://leetcode-stats-api.herokuapp.com/coderbabuaa')
      .then(response => response.json())
      .then(data => {
          const totalSolvedElement = document.getElementById('totalSolved');
          totalSolvedElement.textContent = data.totalSolved;

          const totalQuestionsElement = document.getElementById('totalQuestions');
          totalQuestionsElement.textContent = data.totalQuestions;

          const easySolvedElement = document.getElementById('easySolved');
          easySolvedElement.textContent = data.easySolved;

          const totalEasyQuestionsElement=document.getElementById('totalEasy');
          totalEasyQuestionsElement.textContent = data.totalEasy;

          const mediumSolvedElement = document.getElementById('mediumSolved');
          mediumSolvedElement.textContent = data.mediumSolved;

          const totalMediumQuestionsElement=document.getElementById('totalMedium');
          totalMediumQuestionsElement.textContent = data.totalMedium;

          const hardSolvedElement = document.getElementById('hardSolved');
          hardSolvedElement.textContent = data.hardSolved;

          const totalHardQuestionsElement=document.getElementById('totalHard');
          totalHardQuestionsElement.textContent = data.totalHard;

          const totalSolved = data.totalSolved;
            const totalQuestions = data.totalQuestions;

            const progress = (totalSolved / totalQuestions) * 100;

            // Create the circular progress bar using Chart.js
            new Chart("progressChart", {
              type: "doughnut",
              data: {
                  labels: [],
                  datasets: [{
                      data: [progress, 100 - progress],
                      backgroundColor: ["#ff6384", "#ddd"],
                  }]
              },
              options: {
                  cutout: "80%",
                  animation: {
                      animateScale: true,
                      animateRotate: true
                  },
                  legend: {
                      display: false
                  },
                  tooltips: {
                      enabled: false
                  },
                  plugins: {
                    datalabels: {
                        display: true,
                        color: '#000',
                        formatter: function(value, context) {
                            return totalSolved + ' (' + progress.toFixed(2) + '%)';
                        },
                        font: {
                            size: '18'
                        }
                    }
                }
            
              }
          });
          const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
          const githubImageElement = document.getElementById('githubimage');
      
          function switchTheme(e) {
              if (e.target.checked) {
                  document.documentElement.setAttribute("data-theme", "dark");
                  localStorage.setItem("theme", "dark");
                  githubImageElement.setAttribute("src", "https://github-readme-streak-stats.herokuapp.com?user=manish-9245&theme=light&hide_border=true&background=FFFFFF");

              } else {
                  document.documentElement.setAttribute("data-theme", "light");
                  localStorage.setItem("theme", "light");
                  githubImageElement.setAttribute("src", "https://github-readme-streak-stats.herokuapp.com?user=manish-9245&theme=dark&hide_border=true&background=000000");

              }
          }
      
          toggleSwitch.addEventListener("change", switchTheme, false);
      
          const currentTheme = localStorage.getItem("theme") || "light";
          document.documentElement.setAttribute("data-theme", currentTheme);
          toggleSwitch.checked = currentTheme === "dark";
      
          if (currentTheme === "dark") {
              githubImageElement.setAttribute("src", "https://github-readme-streak-stats.herokuapp.com?user=manish-9245&theme=dark&hide_border=true&background=000000");
          }
      })
      .catch(error => console.log('Error fetching data:', error));
});
