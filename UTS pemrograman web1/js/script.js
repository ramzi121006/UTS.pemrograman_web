document.addEventListener("DOMContentLoaded", () => {
  const halaman = document.body.getAttribute("data-page");
  if (halaman === "login") initLogin();
  if (halaman === "dashboard") initDashboard();
  if (halaman === "stok") initStok();
  if (halaman === "checkout") initCheckout();
  if (halaman === "tracking") initTracking();
  if (halaman === "history") initHistory();
});

// LOGIN
function initLogin() {
  const form = document.getElementById("formLogin");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const user = dataPengguna.find(u => u.email === email && u.password === password);
    if (!user) {
      alert("Email atau password salah!");
      return;
    }
    localStorage.setItem("penggunaAktif", JSON.stringify(user));
    alert(`Selamat datang, ${user.nama}!`);
    window.location.href = "dashboard.html";
  });
}

// DASHBOARD
function initDashboard() {
  const user = JSON.parse(localStorage.getItem("penggunaAktif"));
  if (!user) {
    alert("Silakan login terlebih dahulu!");
    window.location.href = "index.html";
    return;
  }
  const greet = document.getElementById("greeting");
  const nameField = document.getElementById("namaPengguna");
  const jam = new Date().getHours();
  let greetText = jam < 12 ? "Selamat Pagi 🌅" : jam < 18 ? "Selamat Siang ☀️" : "Selamat Malam 🌙";
  greet.textContent = `${greetText}, ${user.nama}!`;
  nameField.textContent = user.nama;
  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("penggunaAktif");
    window.location.href = "index.html";
  });
}

// STOK
function initStok() {
  const tableBody = document.getElementById("stokBody");
  const btnTambah = document.getElementById("btnTambah");
  function loadStok() {
    tableBody.innerHTML = "";
    dataKatalogBuku.forEach((buku, i) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${i+1}</td><td><img src="${buku.cover}" width="50"></td><td>${buku.kodeBarang}</td><td>${buku.namaBarang}</td><td>${buku.jenisBarang}</td><td>${buku.edisi}</td><td>${buku.stok}</td><td>${buku.harga}</td>`;
      tableBody.appendChild(row);
    });
  }
  loadStok();
  btnTambah.addEventListener("click", () => {
    const nama = prompt("Masukkan nama buku:");
    const stok = prompt("Masukkan jumlah stok:");
    if (nama && stok) {
      const newBuku = {
        kodeBarang: "NEW" + Date.now(),
        namaBarang: nama,
        jenisBarang: "Buku Ajar",
        edisi: "1",
        stok: parseInt(stok),
        harga: "Rp 100.000",
        cover: "img/default.jpg"
      };
      dataKatalogBuku.push(newBuku);
      loadStok();
      alert("Buku baru berhasil ditambahkan!");
    }
  });
}

// CHECKOUT
function initCheckout() {
  const form = document.getElementById("formPesan");
  const tabelPesanan = document.getElementById("tabelPesanan");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const kode = document.getElementById("kode").value;
    const jumlah = document.getElementById("jumlah").value;
    const alamat = document.getElementById("alamat").value;
    const pesananBaru = { nama, kode, jumlah, alamat, tanggal: new Date().toLocaleString() };
    dataPemesanan.push(pesananBaru);
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${nama}</td><td>${kode}</td><td>${jumlah}</td><td>${alamat}</td>`;
    tabelPesanan.appendChild(tr);
    form.reset();
    alert("Pesanan berhasil ditambahkan!");
  });
}

// TRACKING
function initTracking() {
  const btnCari = document.getElementById("btnCari");
  const hasil = document.getElementById("hasilTracking");
  btnCari.addEventListener("click", () => {
    const noDO = document.getElementById("inputDO").value.trim();
    const data = dataTracking[noDO];
    if (!data) {
      hasil.innerHTML = "<p>❌ Nomor DO tidak ditemukan.</p>";
      return;
    }
    hasil.innerHTML = `
      <h3>Nomor DO: ${data.nomorDO}</h3>
      <p>Nama: ${data.nama}</p>
      <p>Status: ${data.status}</p>
      <p>Ekspedisi: ${data.ekspedisi}</p>
      <p>Tanggal Kirim: ${data.tanggalKirim}</p>
      <p>Total: ${data.total}</p>
      <h4>Riwayat Perjalanan:</h4>
      <ul>${data.perjalanan.map(p => `<li><strong>${p.waktu}</strong> - ${p.keterangan}</li>`).join("")}</ul>
    `;
  });
}

// HISTORY
function initHistory() {
  const tabel = document.getElementById("tabelHistory");
  Object.values(dataTracking).forEach(trx => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${trx.nomorDO}</td><td>${trx.nama}</td><td>${trx.status}</td><td>${trx.ekspedisi}</td><td>${trx.total}</td>`;
    tabel.appendChild(tr);
  });
}
