module.exports = {
  // Memberi tahu file apa yang akan di jalankan
  // setelah jest berhasil di invoke
  // dalam kasus ini kita akan mengimport cleanup-after-each
  // jadi DOM kita akan selaulu dibersihkan setiap kali kita
  // selesai membuat sebuah test
  setupTestFrameworkScriptFile: require.resolve('./src/setupTests.js')
}
