/* Jajanan Bu Rina — jajanan pasar & rice bowl rumahan di Bandung (fiktif).
   Satu sumber isi untuk papan tautan, menu, dan PO. Harga, lokasi, dan jam
   adalah contoh purwarupa desain. */

export const SITE = 'https://linkinbio-jajan.pintuweb.id';
export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;
export const rb = (n) => `${n / 1000}K`;

export const WARUNG = { nama: 'Jajanan Bu Rina', sejak: 2018, handle: '@jajananburina', lokasi: 'Gerobak kuning di Jl. Cihapit, Bandung (lokasi contoh)', jam: 'Selasa–Minggu, 09.00–20.00 · Senin libur masak menu baru' };

export const LINKS = [
  { ikon: 'menu', label: 'Menu lengkap', sub: 'Kue pasar, gorengan, nasi, minuman', href: '/menu', warna: 'bg-cabe text-santan' },
  { ikon: 'kado', label: 'PO acara & hampers', sub: 'Snack box mulai 20 kotak · H-2', href: '/pesan', warna: 'bg-kecap text-santan' },
  { ikon: 'baru', label: 'Menu baru minggu ini', sub: 'Keluar tiap Selasa pagi', href: '/menu#baru', warna: 'bg-santan' },
  { ikon: 'lokasi', label: 'Lokasi & jam gerobak', sub: 'Jl. Cihapit, Bandung', href: '/menu#lokasi', warna: 'bg-santan' },
];

// Foto asli di public/images/menu/<kunci>.webp (persegi); setiap menu punya fotonya sendiri.
// Sumber, pembuat, dan lisensi tiap foto ada di public/images/SUMBER.md.
export const FOTO = {
  klepon: { label: 'Klepon', alt: 'Klepon hijau bertabur kelapa parut di piring putih' },
  ondeonde: { label: 'Onde-onde', alt: 'Onde-onde bertabur wijen di piring cokelat beralas daun pandan' },
  lemper: { label: 'Lemper', alt: 'Lemper ketan isi suwiran ayam dibungkus daun pisang di tampah bambu' },
  nagasari: { label: 'Nagasari', alt: 'Nagasari berisi irisan pisang dibungkus daun pisang di tampah bambu' },
  getuk: { label: 'Getuk lindri', alt: 'Getuk lindri hijau dan merah bertabur kelapa di piring biru' },
  cenil: { label: 'Cenil', alt: 'Cenil warna-warni bertabur kelapa parut di tusuk kayu' },
  talam: { label: 'Kue talam', alt: 'Kue talam ungu berlubang tengah hijau di piring cokelat' },
  dadar: { label: 'Dadar gulung', alt: 'Dadar gulung hijau berisi kelapa manis di piring merah muda' },
  lapis: { label: 'Kue lapis', alt: 'Kue lapis tiga warna berlapis-lapis di piring putih' },
  rangin: { label: 'Kue rangin', alt: 'Kue rangin kelapa panggang yang dipotong-potong di piring' },
  pisang: { label: 'Pisang goreng', alt: 'Pisang goreng berbalut tepung kuning renyah' },
  tahu: { label: 'Tahu goreng', alt: 'Tahu goreng tepung renyah di piring panjang' },
  kremes: { label: 'Tahu tempe kremes', alt: 'Tahu dan tempe bumbu kuning bertabur kremesan' },
  risoles: { label: 'Risoles', alt: 'Risoles goreng berbalut tepung roti keemasan' },
  nasigoreng: { label: 'Nasi goreng ayam', alt: 'Nasi goreng dengan ayam sambal terasi dan kerupuk di piring' },
  percik: { label: 'Nasi ayam percik', alt: 'Nasi putih dengan ayam berbumbu percik dan sambal' },
  kuning: { label: 'Nasi kuning', alt: 'Nasi kuning dengan telur rebus, timun, orak-arik telur, dan ayam goreng' },
  cumi: { label: 'Cumi telur asin', alt: 'Cumi tumis berkuah oranye dengan irisan cabai dan daun bawang' },
  eskopi: { label: 'Es kopi susu', alt: 'Es kopi susu dalam gelas tinggi di atas meja' },
  esteh: { label: 'Es teh manis', alt: 'Dua gelas es teh dengan sedotan bergaris di meja kayu' },
  jahe: { label: 'Wedang jahe', alt: 'Wedang jahe hangat dalam gelas dengan jahe segar' },
  cendol: { label: 'Es cendol', alt: 'Es cendol hijau dengan kacang merah dan kuah santan' },
  serabi: { label: 'Serabi', alt: 'Serabi bulat bertabur kelapa di piring bermotif hijau' },
  snack: { label: 'Snack box', alt: 'Aneka kue basah dan gorengan di piring putih' },
  rice: { label: 'Rice bowl box', alt: 'Kotak nasi berisi ayam sambal dengan irisan timun' },
  hampers: { label: 'Hampers', alt: 'Aneka jajanan pasar terbungkus plastik dan daun pisang di keranjang bambu' },
};
export const FOTO_BERANDA = ['klepon', 'ondeonde', 'getuk', 'percik'];

// [nama, harga, laris?, kunci foto]
export const MENU = [
  { kat: 'Kue pasar', item: [['Klepon (5 pcs)', 7000, true, 'klepon'], ['Onde-onde (4 pcs)', 8000, true, 'ondeonde'], ['Lemper Ayam', 5000, false, 'lemper'], ['Nagasari', 4000, false, 'nagasari'], ['Getuk Lindri', 6000, false, 'getuk'], ['Cenil', 6000, false, 'cenil'], ['Kue Talam', 4000, false, 'talam'], ['Dadar Gulung', 4000, false, 'dadar'], ['Kue Lapis', 5000, false, 'lapis'], ['Kue Rangin', 7000, false, 'rangin']] },
  { kat: 'Gorengan & cemilan', item: [['Pisang Goreng Krispi', 8000, true, 'pisang'], ['Tahu Goreng Tepung (4 pcs)', 8000, false, 'tahu'], ['Tahu Tempe Kremes', 9000, false, 'kremes'], ['Risoles', 5000, false, 'risoles']] },
  { kat: 'Nasi & rice bowl', item: [['Nasi Goreng Ayam Sambal', 15000, true, 'nasigoreng'], ['Nasi Ayam Percik', 16000, false, 'percik'], ['Nasi Kuning Ayam Goreng', 17000, false, 'kuning'], ['Cumi Telur Asin', 18000, false, 'cumi']] },
  { kat: 'Minuman', item: [['Es Kopi Gula Aren', 12000, true, 'eskopi'], ['Es Teh Manis', 5000, false, 'esteh'], ['Wedang Jahe', 7000, false, 'jahe'], ['Es Cendol', 10000, false, 'cendol']] },
];

export const BARU = { nama: 'Serabi Solo', harga: 9000, foto: 'serabi', ket: 'Hanya Selasa–Kamis minggu ini, sampai habis.' };

export const PAKET = [
  { id: 'snack', foto: 'snack', nama: 'Snack box isi 4', harga: 18000, min: 20, satuan: 'kotak', ket: 'pilih 4 dari gorengan & kue pasar, + air mineral' },
  { id: 'rice', foto: 'rice', nama: 'Rice bowl box', harga: 22000, min: 15, satuan: 'kotak', ket: 'rice bowl pilihan + kerupuk + sambal terpisah' },
  { id: 'hampers', foto: 'hampers', nama: 'Hampers keranjang bambu', harga: 150000, min: 3, satuan: 'keranjang', ket: 'kue pasar, kopi gula aren botol, kartu ucapan' },
];

// Buka Selasa–Minggu 09.00–20.00 WIB; Senin libur. Dihitung menurut WIB, lalu
// papan menyebut kapan gerobak buka lagi bila sedang tutup.
export function statusWarung(d = new Date()) {
  const wib = new Date(d.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
  const hari = wib.getDay(), jam = wib.getHours() + wib.getMinutes() / 60;
  if (hari !== 1 && jam >= 9 && jam < 20) return { buka: true, teks: 'BUKA — silakan jajan!' };
  if (hari === 1) return { buka: false, teks: 'Senin libur — buka lagi Selasa jam 9' };
  if (jam < 9) return { buka: false, teks: 'TUTUP — buka hari ini jam 9' };
  return { buka: false, teks: hari === 0 ? 'TUTUP — buka lagi Selasa jam 9' : 'TUTUP — buka lagi besok jam 9' };
}
