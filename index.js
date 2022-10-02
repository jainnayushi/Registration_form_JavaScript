let form = document.getElementById("form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let age = document.getElementById("age");
let comment = document.getElementById("comment");
let dropdown = document.getElementById("feature");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();
})

const setError = (element, errorMsg) => {
    const row = element.parentElement;
    const small = row.querySelector('small');
    row.className = "row error";
    small.innerText = errorMsg;
}

const setSuccess = (element) => {
    const row = element.parentElement;
    const small = row.querySelector('small');
    row.className = "row success";
}

const validate = () => {
    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let ageValue = age.value.trim();
    let commentValue = comment.value.trim();

    // Validate Name
    if (nameValue === "") {
        setError(name, "Name cannot be Empty!");
    } else if (nameValue.length <= 3) {
        setError(name, "Name must be more than 3 character");
    } else {
        setSuccess(name);
    }
    // Validate Email
    let mailformat = /^[^ ]+@[^ ]+\.([a-z]{2,3})$/;
    if (emailValue === "") {
        setError(email, "Email cannot be Empty!");
    } else if (!emailValue.match(mailformat)) {
        setError(email, "Email must be in proper format!");
    } else {
        setSuccess(email);
    }
    // Validate Age
    if (ageValue === "") {
        setError(age, "Age cannot be Empty!");
    } else if (ageValue <= 18) {
        setError(age, "Age must be atleast 18");
    } else {
        setSuccess(age);
    }
    // Validate Comment
    if (commentValue === "") {
        setError(comment, "Comment cannot be Empty!");
    } else {
        setSuccess(comment);
    }
    // Validate Radio button
    let radio = document.getElementById("radio")
    if (document.querySelector('input[name="recommend"]:checked') == null) {
        setError(radio, "Cannot be Empty!")
    } else {
        setSuccess(radio);
        // console.log("Selected radio is", radio.value);
    }
    // Validate Checkbox Button
    let checkbox = document.getElementById("checkbox")
    if (document.querySelector('input[type="checkbox"]:checked') == null) {
        setError(checkbox, "Cannot be Empty!")
    } else {
        setSuccess(checkbox);
    }
    // Validate Dropdown
    let dropdownValue = dropdown.value;
    // let dropdown = document.getElementById("feature")
    if (dropdownValue == null) {
        setError(dropdown, "Cannot be Empty!")
    } else {
        setSuccess(dropdown);
    }

}