var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");

form.addEventListener("submit", function (e) {
  setTimeout(function () {
    submitButton.value = "Sending...";
    submitButton.disabled = true;
  }, 1);
});

// Disable the submit button if any required field is empty
var requiredFields = Array.from(form.querySelectorAll("[required]"));
requiredFields.forEach(function (field) {
  field.addEventListener("input", validateForm);
});

function validateForm() {
  var isFormValid = requiredFields.every(function (field) {
    return field.value.trim() !== "";
  });
  submitButton.disabled = !isFormValid;
}

var data_js = {
  "access_token": "mu2kz84gez2h4bloglrum8ff"
};

function js_onSuccess() {
  // Update the button text to "Sent!" after 3000ms
  setTimeout(function () {
    submitButton.value = "Sent!";
  }, 3000);

  // Remove (avoid redirect) window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
  SuccessMessage(); 
}

function SuccessMessage() {
  // Create a full-screen div to show the sending message
  var sendingMessage = document.createElement('div');
  sendingMessage.style.position = 'fixed';
  sendingMessage.style.left = 0;
  sendingMessage.style.top = 0;
  sendingMessage.style.width = '100%';
  sendingMessage.style.height = '100%';
  sendingMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  sendingMessage.style.color = 'white';
  sendingMessage.style.display = 'flex';
  sendingMessage.style.justifyContent = 'center';
  sendingMessage.style.alignItems = 'center';
  sendingMessage.style.zIndex = 1000;
  sendingMessage.innerHTML = 'Sending...';
  document.body.appendChild(sendingMessage);

  setTimeout(function () {
    // Remove the sending message
    sendingMessage.style.display = 'none';
    // Can optionally add more logic here to handle the success state
  }, 1500);

  sendingMessage.innerHTML = 'Message has been sent successfully!';

  setTimeout(function() {
    sendingMessage.style.display = 'none';
  }, 3000);
}

function js_onError(error) {
  console.log(error);
  window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
  ErrorMessage();
}

function ErrorMessage() {
  // Create a full-screen div to show the sending message
  var sendingMessage = document.createElement('div');
  sendingMessage.style.position = 'fixed';
  sendingMessage.style.left = 0;
  sendingMessage.style.top = 0;
  sendingMessage.style.width = '100%';
  sendingMessage.style.height = '100%';
  sendingMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  sendingMessage.style.color = 'white';
  sendingMessage.style.display = 'flex';
  sendingMessage.style.justifyContent = 'center';
  sendingMessage.style.alignItems = 'center';
  sendingMessage.style.zIndex = 1000;
  sendingMessage.innerHTML = 'Error ' + `${error}`;
  document.body.appendChild(sendingMessage);
}

function js_send() {
  submitButton.value = 'Sending…';
  submitButton.disabled = true;
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      js_onSuccess();
    } else if (request.readyState == 4) {
      js_onError(request.response);
    }
  };

  // Get values from the form fields
  var name = document.querySelector("#email_form [name='subject']").value;
  var PhoneNumber = document.querySelector("#email_form [name='extra_phone_number']").value;
  var yourEmail = document.querySelector("#email_form [name='reply_to']").value;
  // Get the selected value from the "product" dropdown
  var productDropdown = document.querySelector("#email_form [name='text']");
  var selectedProduct = productDropdown.options[productDropdown.selectedIndex].value;

  // Assign values to data_js  // data_js['reply_to'] = yourEmail;
  data_js['subject'] = name;
  data_js['extra_phone_number'] = PhoneNumber + "\n\n Email: " + yourEmail;
  data_js['text'] = selectedProduct;

  var params = toParams(data_js);
  request.open("POST", "https://postmail.invotes.com/send", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(params);

  return false;
}

submitButton.onclick = js_send;

function toParams(data_js) {
  var form_data = [];
  for (var key in data_js) {
    form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
  }

  return form_data.join("&");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
