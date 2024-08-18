document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const userName = document.querySelector('input[name="userName"]').value;
    const password = document.querySelector('input[name="password"]').value;

    try {
        const response = await fetch('http://localhost:9002/api/v1/userLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName, password }),
        });

        if (response.ok) {
            const result = await response.text();
            alert('Login successful');
            window.location.href="../Savings OfContact/contactSaved.html"
            console.log(result);
        } else {
            const err = await response.text();
            alert(err);
            console.log(err);
        }
    } catch (error) {
        alert(error.message);
    }
});


