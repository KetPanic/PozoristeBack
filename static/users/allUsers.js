function init() {
    
    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];

    fetch('http://127.0.0.1:8200/users', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const table = document.getElementById('table');

            data.forEach( el => {

                var row = document.createElement("tr");
                
                var data = document.createElement("td");
                data.innerHTML = el.id;
                row.appendChild(data);

                
                var data1 = document.createElement("td");
                data1.innerHTML = el.username;
                row.appendChild(data1);

                
                var data2 = document.createElement("td");
                data2.innerHTML = el.password;
                row.appendChild(data2);


                
                var data3 = document.createElement("td");
                data3.innerHTML = el.name;
                row.appendChild(data3);


                
                var data4 = document.createElement("td");
                data4.innerHTML = el.surname;
                row.appendChild(data4);


                
                var data5 = document.createElement("td");
                data5.innerHTML = el.email;
                row.appendChild(data5);


                
                var data6 = document.createElement("td");
                data6.innerHTML = el.type;
                row.appendChild(data6);

                var a = el.id;
                var del = document.createElement("button");
                del.innerHTML = "Delete";
                del.addEventListener("click", (e) => {
                    window.location.href = `users/delete?id=${a}`;
                })
                var data7 = document.createElement("td");
                data7.appendChild(del);
                row.appendChild(data7);


                var iz = document.createElement("button");
                iz.innerHTML = "Update";
                iz.addEventListener("click", (e) => {
                    window.location.href = `users/update?id=${a}`;
                })
                var data8 = document.createElement("td");
                data8.appendChild(iz);
                row.appendChild(data8);

                var pri = document.createElement("button");
                pri.innerHTML = "View";                
                pri.addEventListener("click", (e) => {
                    window.location.href = `users/view?id=${a}`;
                })
                var data9 = document.createElement("td");
                data9.appendChild(pri);
                row.appendChild(data9);

                table.appendChild(row);

            });
        });
}