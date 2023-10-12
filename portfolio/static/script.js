function sendMail(params) {
  // let tempParams = {
  //   first_name: document.getElementById("firstName").value,
  //   last_name: document.getElementById("lastName").value,
  //   email: document.getElementById("email").value,
  //   phone: document.getElementById("phone").value,
  //   message: document.getElementById("message").value,
  // };

  // emailjs
  //   .send("service_kos9amj", "template_xyivxn6", tempParams)
  //   .then(function (res) {
  //     console.log("Success:", res.status);
  //     if (res.status === 200) {
  //       document.getElementById("firstName").value = "";
  //       document.getElementById("lastName").value = "";
  //       document.getElementById("email").value = "";
  //       document.getElementById("phone").value = "";
  //       document.getElementById("message").value = "";
  //     } else {
  //       console.error("Failed to send email (Status " + res.status + ")");
  //     }
  //   });
  console.log("yay");
}

function testLang() {
  let aftersend = document.getElementById("aftersend");
  aftersend.classList.add("afteranimation");

  aftersend.addEventListener("animationend", () => {
    console.log("animation done");
    aftersend.classList.add("messagesent");

    let messagesent = document.getElementById("messagesent");
    messagesent.classList.add("message");

    let messagetwo = document.getElementById("messagetwo");

    messagesent.addEventListener("animationend", () => {
      messagetwo.classList.add("messagetwoo");
    });

    let delay = 3000;

    function redirectToHome() {
      window.location.href = "http://127.0.0.1:8000/";
    }

    setTimeout(redirectToHome, delay);
  });
}
