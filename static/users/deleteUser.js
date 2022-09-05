function init() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch(`http://127.0.0.1:8200/users/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            if(data.message){
                alert(data.message);
                window.location.href = `/admin/users`;
            }else{
                window.location.href = `/admin/users`;
            }
        });
}