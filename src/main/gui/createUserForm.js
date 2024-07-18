
let bttn = document.getElementById('sub-button');
bttn.addEventListener("click", event=>{
    signUp();
});
let signUp = async () => {
    let form = {};

    form.firstName = document.getElementById('fname').value;
    form.lastName = document.getElementById('lname').value;
    form.phoneNumber = document.getElementById('pnum').value;
    form.email = document.getElementById('email').value;
    form.password = document.getElementById('pass').value;
    form.month = document.getElementById('month').value;
    form.day = document.getElementById('day').value;
    form.year = document.getElementById('year').value;


    form.birthDate = `${form.year}-${form.month}-${form.day}`;
    const request = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)


    });

    if (request.ok) {
        console.log('User created successfully!');
    } else {
        console.log('Error creating user.');
    }
};


