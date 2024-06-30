emailjs.init({
  publicKey: "lTIZ9A4V_JCIMPmfg",
  blockHeadless: true,
  blockList: {
    // Block the suspended emails
    list: ["foo@emailjs.com", "bar@emailjs.com"],
    // The variable contains the email address
    watchVariable: "userEmail",
  },
  limitRate: {
    // Set the limit rate for the application
    id: "app",
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

function sendEmail() {
  let params = {
    subject: document.querySelector("#contact-form .subject > input").value,
    from_name: document.querySelector("#contact-form .name > input").value,
    message: document.querySelector("#contact-form .textarea > textarea").value,
    from_email: document.querySelector("#contact-form .email > input").value,
  };

  emailjs.send("service_mxfy7mk", "template_q9sf03h", params).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
}
