document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const uname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const cpassword = document.getElementById("cpassword");
  const cage = document.getElementById('cage');
  const tc = document.getElementById("tc");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
  });

  function validate() {
    let namevalue = uname.value.trim();
    let lnamevalue = lname.value.trim();
    let emailvalue = email.value.trim();
    let passwordvalue = password.value.trim();
    let cpasswordvalue = cpassword.value.trim();
    let cagevalue = cage.value.trim();
    let tcvalue = tc.checked;

    //First Name
    if (namevalue === '') {
      setError(uname, 'User name cannot be empty');
    } else if (namevalue.length < 3) {
      setError(uname, 'User name must be at least 3 characters');
    }
    else {
      setSuccess(uname);
    }

    // Last Name
    if (lnamevalue === '') {
      setError(lname, 'Last name cannot be empty');
    } else if (lnamevalue.length < 3) {
      setError(lname, 'Last name must be at least 3 characters');
    }
    else {
      setSuccess(lname);
    }

    // Email
    if (emailvalue === '') {
      setError(email, 'Email cannot be empty');
    } else if (!emailCheck(emailvalue)) {
      setError(email, 'Enter a valid email ID');
    }
    else {
      setSuccess(email);
    }

    // Password Check
    if (passwordvalue === '') {
      setError(password, 'Password cannot be empty');
    }
    else if (passwordvalue.length < 8) {
      setError(password, 'Password length must be at least 8 characters');
    }
    else {
      setSuccess(password);
    }

    // Confirm Password Check
    if (cpasswordvalue === '') {
      setError(cpassword, 'Confirm password cannot be empty');
    }
    else if (cpasswordvalue !== passwordvalue) {
      setError(cpassword, 'Passwords do not match');
    }
    else {
      setSuccess(cpassword);
    }
    //Age
    if(cagevalue === ''){
      setError(cage,'age cant empty');
    }
    else if(cagevalue >40){
      setError(cage,'age must be lessden 45');
    }
    else{
      setSuccess(cage);
    }

    // Terms & Conditions Check
    if (!tcvalue) {
      setError(tc, 'Please agree to the terms and conditions');
    }
    else {
      setSuccess(tc);
    }
  }
  
  // SetError Function
  function setError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    small.innerText = message;
    parent.classList.add('error');
    parent.classList.remove('success');
  }

  // SetSuccess Function
  function setSuccess(input) {
    let parent = input.parentElement;
    parent.classList.add('success');
    parent.classList.remove('error');
  }

  // Email Check Function
  function emailCheck(input) {
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailReg.test(input);
  }
});
