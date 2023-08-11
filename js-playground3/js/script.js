let newsletterForm = document.getElementById('newsletter-form');
let allAgreeChx = document.getElementById('all-agree');

const validate = (event) => {

    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    errors.innerHTML = ''; //czyscimy liste bledow

    //trim() ucina białe znaki w stringu, zeby nie dalo sie dac samych spacji
    if (txtName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = "Wpisz imię i nazwisko!";

        errors.appendChild(liError);
    }

    if (txtEmail.value.trim() === '' && !txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = "Wpisz poprawny adres e-mail!";

        errors.appendChild(liError);
    }

    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = "Nie wyraziłeś zgody 1!";

        errors.appendChild(liError);
    }

    if (errors.children.length > 0) {
        event.preventDefault();
    }
}

const allAgree = (event) => {
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
    //console.log(event.target.checked);
}

newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);