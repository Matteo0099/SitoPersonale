var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");

form.addEventListener("submit", function (e) {
  setTimeout(function () {
    submitButton.value = "Sending...";
    submitButton.disabled = true;
  }, 1);
});

// Disable the submit button if any required field is empty
var requiredFields = form.querySelectorAll("[required]");
requiredFields.forEach(function (field) {
  field.addEventListener("input", function () {
    var isFormValid = true;
    requiredFields.forEach(function (reqField) {
      if (!reqField.value.trim()) {
        isFormValid = false;
      }
    });
    submitButton.disabled = !isFormValid;
  });
});

var data_js = {
  "access_token": "mu2kz84gez2h4bloglrum8ff"
};

function js_onSuccess() {
  // Remove this to avoid redirect
  window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function js_onError(error) {
  console.log(error);
  window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
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

  // Assign values to data_js
  data_js['subject'] = name;
  // data_js['reply_to'] = yourEmail;
  data_js['extra_phone_number'] = PhoneNumber + "\n\n Email: " + yourEmail;
  // Assign the selected product value to data_js
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