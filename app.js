console.log("Anchor Commerce Systems site loaded.");

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);

    const name = formData.get("Name") || "";
    const business = formData.get("Business") || "";
    const email = formData.get("Email") || "";
    const phone = formData.get("Phone") || "";
    const service = formData.get("Service") || "";
    const message = formData.get("Message") || "";

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
