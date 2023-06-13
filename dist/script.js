const button = document.getElementById("btn");
const text = document.createElement("div");
const validate = document.getElementById("validate");
validate.className = "hidden";
button.addEventListener("click", (e) => {
  e.preventDefault();
console.log(validateEmail());
  validateEmail()
    ? (validate.className = "hidden")
    : (validate.className = "block absolute top-16 left-8 text-val text-[#FB3E3E]");
});

function validateEmail() {
  let email = document.myform.email.value;
  let atposition = email.indexOf("@");
  let dotposition = email.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= email.length
  ) {
    return false;
  }
  return true;
}
