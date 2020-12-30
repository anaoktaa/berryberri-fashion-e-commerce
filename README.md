# Berryberri adalah dummy fashion online store yang dibuat dengan menggunakan React.js

[![Netlify Status](https://api.netlify.com/api/v1/badges/f0015863-2aeb-4548-aebd-2b12c5a14243/deploy-status)](https://app.netlify.com/sites/berryberri/deploys)

## Fitur dan Proses


### Data
Data backend disimpan pada database firestore. Disisi frontend, untuk mengelola proses fetching data dengan menggunakan Redux dan juga memanfaatkan beberapa library lainnya seperti Reselect dan Redux Saga. Selain itu BerryBerri menggunakan Higher Order Component (HOC) yang digunakan untuk mengelola proses loading ketika data sedang diambil.


### Autentikasi Pengguna
User dapat melakukan proses sign in maupun sign up dengan menggunakan email dan password ataupun dengan menggunakan akun Google dengan firebase.


### Pembayaran
Proses pembayaran dikelola dengan menggunakan Stripe API. Karena proyek ini adalah proyek dummy, pengguna tidak dapat benar-benar melakukan transaksi maupun menyimpan informasi kartu kredit.


### Persisting Data
Data keranjang belanja pengguna harus tetap ada meskipun pengguna menutup atau merefresh tab atau window browser, jadi terdapat proses untuk menyimpan data keranjang belanja pengguna. Cara pertama yaitu dengan menyimpan data keranjang pada backend dalam hal menggunakan firebase untuk user yang telah melakukan proses autentikasi. Cara kedua yaitu dengan memanfaatkan localstorage untuk user yang belum melakukan proses autentikasi.




