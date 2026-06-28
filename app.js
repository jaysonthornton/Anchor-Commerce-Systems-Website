console.log("Anchor Commerce Systems site loaded.");

document.addEventListener("DOMContentLoaded", () => {
  const sendButton = document.getElementById("sendProjectRequest");

  if (!sendButton) return;

  sendButton.addEventListener("click", () => {
    const name = document.querySelector('[name="Name"]')?.value || "";
    const business = document.querySelector('[name="Business"]')?.value || "";
    const email = document.querySelector('[name="Email"]')?.value || "";
    const phone = document.querySelector('[name="Phone"]')?.value || "";
    const service = document.querySelector('[name="Service"]')?.value || "";
    const message = document.querySelector('[name="Message"]')?.value || "";

    const subject = encodeURIComponent(
      `New Anchor Project Request - ${business || name || "Website Lead"}`
    );

    const body = encodeURIComponent(
`Name: ${name}
Business: ${business}
Email: ${email}
Phone: ${phone}
Service: ${service}

Project Details:
${message}`
    );

    window.location.href =
      `mailto:jaysonthornton@anchorcommercesystems.com?subject=${subject}&body=${body}`;
  });
});
