window.addEventListener("load", function() {
  const form = document.getElementById('contact-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;

    alert("made it!")
    fetch(action, {
      redirect: "follow",
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    })
    .then(() => {
      alert("Thanks for signing up!");
    })
  });
});
