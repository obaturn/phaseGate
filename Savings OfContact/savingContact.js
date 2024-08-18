

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const createContact ={
        first_name: document.getElementById('first-name').value,
        last_name: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        gender:document.getElementById('input[name=gender]:checked]')
    }
    fetch('http://localhost:9002/api/v1/Contact/createContact',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(createContact)
        })
        .then(response => response.json())
        .then(data =>{
            console.log('success',data)

        })
        .catch((error)=>{
            console.log(error)

    })
})