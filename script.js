function checkPasswordMatch() {
  var password = document.getElementById("password").value
  var confirmPassword = document.getElementById("confirmPassword").value

  if (password === confirmPassword) {
    console.log("Passwords match!")
    return true
  } else {
    console.log("Passwords do not match!")
    return false
  }
}

function validateEmail(email) {
  var checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!checkEmail.test(email)) {
    console.log("Invalid email address! (example@example.com)")
    return false
  } else {
    return true
  }
}

function validatePassword(password) {
  var checkPassword = /^(?=.*\d)(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/

  if (!checkPassword.test(password)) {
    console.log("Password should be at least 8 characters long and contain at least one number and one symbol!")
    return false
  } else {
    return true
  }
}