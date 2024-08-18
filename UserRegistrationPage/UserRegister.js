const form = document.querySelector("#registrationForm")

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const phoneNumber = document.getElementById('phoneNumber').value
    const gender = document.getElementById('input[name=gender]:checked')
    const confirmPassword = document.getElementById('confirmPassword').value
    const userName = document.getElementById('userName').value
    const HomeAddress = document.getElementById('HomeAddress').value

    try{
        const response = await fetch("http://localhost:9002/api/v1/registerUser",{


                method: "POST",
                headers:{
                    "content-Type" : "application/json"

                },
                body:JSON.stringify({email:email,firstName:firstName,password:password,lastName:lastName,address:HomeAddress,username:userName,phoneNumber:phoneNumber,Gender:gender,confirmPassword:confirmPassword})


        });
        if(response.ok){
            const result = await response.text();
            alert('success')
            console.log(result)
              // window.location.href="../UserLoginPage/User.html"
        }

        else{
            const err = await response.text();
            alert(err)
            console.log(err)
        }
    }catch (error){
        alert(error.message);
    }
})
