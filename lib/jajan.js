/* Jajanan Bu Rina — jajanan pasar & rice bowl rumahan di Bandung (fiktif).
   Satu sumber isi untuk papan tautan, menu, dan PO. Harga, lokasi, dan jam
   adalah contoh purwarupa desain. */

export const SITE = 'https://linkinbio-jajan.pintuweb.id';
export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;
export const rb = (n) => `${n / 1000}K`;

export const WARUNG = { nama: 'Jajanan Bu Rina', sejak: 2018, handle: '@jajananburina', lokasi: 'Gerobak kuning di Jl. Cihapit, Bandung (lokasi contoh)', jam: 'Selasa–Minggu, 09.00–20.00 · Senin libur masak menu baru' };

export const LINKS = [
  { ikon: 'menu', label: 'Menu lengkap', sub: 'Rice bowl, gorengan, kue pasar, minuman', href: '/menu', warna: 'bg-cabe text-santan' },
  { ikon: 'kado', label: 'PO acara & hampers', sub: 'Snack box mulai 20 kotak · H-2', href: '/pesan', warna: 'bg-kecap text-santan' },
  { ikon: 'baru', label: 'Menu baru minggu ini', sub: 'Keluar tiap Selasa pagi', href: '/menu#baru', warna: 'bg-santan' },
  { ikon: 'lokasi', label: 'Lokasi & jam gerobak', sub: 'Jl. Cihapit, Bandung', href: '/menu#lokasi', warna: 'bg-santan' },
];

// Foto CC0 (Wikimedia Commons) untuk deret beranda (persegi) dan spanduk kategori menu (<nama>-lebar.webp, 5:2);
// sumber di public/images/SUMBER.md.
export const FOTO = {
  ricebowl: { label: 'Rice bowl', alt: 'Nasi putih dengan ayam berbumbu dan sambal di piring' },
  tahu: { label: 'Gorengan', alt: 'Tahu goreng tepung renyah di piring panjang' },
  pisang: { label: 'Pisang goreng', alt: 'Pisang goreng hangat di piring putih' },
  klepon: { label: 'Kue pasar', alt: 'Klepon hijau bertabur kelapa parut' },
  dadar: { label: 'Dadar gulung', alt: 'Dadar gulung hijau berisi kelapa di piring merah muda' },
  eskopi: { label: 'Minuman', alt: 'Es kopi susu dalam gelas tinggi' },
  eskopi2: { label: 'Minuman', alt: 'Dua gelas es kopi berisi es batu di bangku luar' },
};
export const FOTO_BERANDA = ['ricebowl', 'tahu', 'klepon', 'eskopi'];

export const MENU = [
  { kat: 'Rice bowl', foto: 'ricebowl', item: [['Ayam Sambal Matah', 15000, true], ['Cumi Cabai Garam', 18000], ['Tahu Telur Petis', 13000], ['Jamur Kecap Pedas (vegetarian)', 12000]] },
  { kat: 'Gorengan & cemilan', foto: 'pisang', item: [['Cireng Isi (5 pcs)', 10000, true], ['Pisang Goreng Keju', 8000], ['Tahu Isi Sayur (4 pcs)', 8000], ['Bakwan Jagung (4 pcs)', 8000]] },
  { kat: 'Kue pasar', foto: 'dadar', item: [['Kue Lumpur (3 pcs)', 9000], ['Dadar Gulung', 4000], ['Klepon (5 pcs)', 7000]] },
  { kat: 'Minuman', foto: 'eskopi2', item: [['Es Kopi Gula Aren', 12000, true], ['Es Teh Serai', 6000], ['Wedang Jahe', 7000]] },
];

export const BARU = { nama: 'Nasi Liwet Teri Pete', harga: 16000, ket: 'Hanya Selasa–Kamis minggu ini, sampai habis.' };

export const PAKET = [
  { id: 'snack', nama: 'Snack box isi 4', harga: 18000, min: 20, satuan: 'kotak', ket: 'pilih 4 dari gorengan & kue pasar, + air mineral' },
  { id: 'rice', nama: 'Rice bowl box', harga: 22000, min: 15, satuan: 'kotak', ket: 'rice bowl pilihan + kerupuk + sambal terpisah' },
  { id: 'hampers', nama: 'Hampers keranjang bambu', harga: 150000, min: 3, satuan: 'keranjang', ket: 'kue pasar, kopi gula aren botol, kartu ucapan' },
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
