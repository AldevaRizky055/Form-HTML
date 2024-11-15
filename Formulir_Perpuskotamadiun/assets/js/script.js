document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formPendaftaran");

    form.addEventListener("submit", function(event) {
        const nama = document.getElementById("nama").value;
        const nomorAnggota = document.getElementById("nomor_anggota").value;
        const password = document.getElementById("password").value;

        if (!nama || !nomorAnggota) {
            alert("Harap isi semua data yang diperlukan.");
            event.preventDefault();
            return;
        }

        if (password.length < 8) {
            alert("Password harus terdiri dari minimal 8 karakter.");
            event.preventDefault();
            return;
        }
    });
});
