document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        const nama = document.getElementById("nama").value;
        const password = document.getElementById("password").value;

        if (!nama || !password) {
            alert("Nama dan Password harus diisi!");
            e.preventDefault();
        }
    });
});
