const form = document.getElementById("form")
const email = document.getElementById("email")

form.addEventListener('submit', e => {
    e.preventDefault();
    const emailVal = email.value;

if (!validateEmail(emailVal)) {
    form.classList.add('error');
}
else{
    form.classList.remove('error');
    document.body.innerHTML = `<div style = "display:flex; align -item: center; justify-content:center;"> <h1>Thank you </h1></div>`;
}
});

function validateEmail(email){
    var re =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLocaleLowerCase());
}