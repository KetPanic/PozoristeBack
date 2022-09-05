function init() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    
    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];  
    fetch(`http://127.0.0.1:8200/users/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            if(data.message){
                alert(message);
            }else{
                
                const content = document.getElementById('content');

                document.getElementById('username').value = data.username;
                document.getElementById('name').value = data.name;
                document.getElementById('surname').value = data.surname;
                document.getElementById('email').value = data.email;
                document.getElementById('userType').value = data.type;
            }
           
        });
    document.getElementById('btn').addEventListener('click', e => {
        e.preventDefault();


        const cookies = document.cookie.split('=');
        const token = cookies[cookies.length - 1];
        const data = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            email: document.getElementById('email').value,
            type: document.getElementById('userType').value,
        };
        alert(data.username, data.password, data.name, data.surname, data.email, data.type);
        console.log(data.type)
            fetch('http://127.0.0.1:8200/users', {
                method: 'POST',
                headers: { 
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
                .then( res => res.json() )
                .then( el => {
                    if (el.message) {
                        alert(el.message);
                    } else {
                        document.cookie = `token=${el.token};SameSite=Lax`;
                        window.location.href = '/';
                    }
                });
    });
}