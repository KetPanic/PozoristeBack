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

                content.innerHTML += `<p>Id: ${data.id}</p>`;
                content.innerHTML += `<p>Username: ${data.username}</p>`;
                content.innerHTML += `<p>Password: ${data.password}</p>`;
                content.innerHTML += `<p>Name: ${data.name}</p>`;
                content.innerHTML += `<p>Surname: ${data.surname}</p>`;
                content.innerHTML += `<p>Email: ${data.email}</p>`;
                content.innerHTML += `<p>Type: ${data.type}</p>`;
            }
           
        });
}