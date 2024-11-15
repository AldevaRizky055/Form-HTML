document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formPasien");

    form.addEventListener("submit", (e) => {
        const namaPasien = document.getElementById("nama_pasien").value;
        const usia = document.getElementById("usia").value;
        const keluhan = document.getElementById("keluhan").value;

        if (!namaPasien || !usia || keluhan.length < 5) {
            alert("Pastikan semua kolom diisi dengan benar, dan keluhan minimal 5 karakter.");
            e.preventDefault();
        }
    });
});
