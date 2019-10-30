let a,
    username = document.getElementById("username"),
    password = document.getElementById("password"),
    btn = document.getElementById("btn");

btn.addEventListener("click", function openInNewTab() {
    a = username.value;
    b = password.value;
    if (a === b) {
        alert("Ok");
        var win = window.open('../home/home.html', '_blank');
        win.focus();

    } else {
        alert("Salah Ulang Lagi");
    }
});