document.addEventListener("DOMContentLoaded", () => {
  let about = document.getElementById("about-1");
  let skills = document.getElementById("skills-1");
  let language = document.getElementById("language-1");

  let aboutfirst = document.getElementById("aboutfirst");
  let aboutsecond = document.getElementById("aboutsecond");
  let aboutthird = document.getElementById("aboutthird");

  let aboutBot1 = document.getElementById("skills-bot1");
  let aboutBot2 = document.getElementById("skills-bot2");
  let aboutBot3 = document.getElementById("skills-bot3");

  let skillsbot1 = document.getElementById("skills-bot1");
  let skillsbot2 = document.getElementById("skills-bot2");
  let skillsbot3 = document.getElementById("skills-bot3");

  let hobbies = document.getElementById("hobbies");
  let sports = document.getElementById("sports");

  about.addEventListener("click", () => {
    skills.style.color = "white";
    about.style.color = "#C9C7FF";
    language.style.color = "white";

    aboutfirst.style.opacity = "1";
    aboutsecond.style.opacity = "0";
    aboutthird.style.opacity = "0";

    aboutBot1.style.opacity = "0";
    aboutBot2.style.opacity = "0";
    aboutBot3.style.opacity = "0";

    aboutsecond.style.opacity = "0";
    hobbies.style.opacity = "0";
    sports.style.opacity = "0";

    skillsbot1.style.visibility = "hidden";
    skillsbot2.style.visibility = "hidden";
    skillsbot3.style.visibility = "hidden";
  });

  skills.addEventListener("click", () => {
    skills.style.color = "#C9C7FF";
    about.style.color = "white";
    language.style.color = "white";

    aboutfirst.style.opacity = "0";
    aboutsecond.style.opacity = "1";
    aboutthird.style.opacity = "0";

    aboutBot1.style.opacity = "1";
    aboutBot2.style.opacity = "1";
    aboutBot3.style.opacity = "1";

    skillsbot1.style.visibility = "visible";
    skillsbot2.style.visibility = "visible";
    skillsbot3.style.visibility = "visible";

    skillsbot1.addEventListener("click", () => {
      aboutsecond.style.opacity = "1";
      hobbies.style.opacity = "0";
      sports.style.opacity = "0";
    });

    skillsbot2.addEventListener("click", () => {
      hobbies.style.opacity = "1";
      sports.style.opacity = "0";
      aboutsecond.style.opacity = "0";
    });

    skillsbot3.addEventListener("click", () => {
      hobbies.style.opacity = "0";
      sports.style.opacity = "1";
      aboutsecond.style.opacity = "0";
    });
  });

  language.addEventListener("click", () => {
    skills.style.color = "white";
    about.style.color = "white";
    language.style.color = "#C9C7FF";

    aboutfirst.style.opacity = "0";
    aboutsecond.style.opacity = "0";
    aboutthird.style.opacity = "1";

    aboutBot1.style.opacity = "0";
    aboutBot2.style.opacity = "0";
    aboutBot3.style.opacity = "0";

    aboutsecond.style.opacity = "0";
    hobbies.style.opacity = "0";
    sports.style.opacity = "0";

    skillsbot1.style.visibility = "hidden";
    skillsbot2.style.visibility = "hidden";
    skillsbot3.style.visibility = "hidden";
  });
});
