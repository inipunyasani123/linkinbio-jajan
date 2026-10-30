import Link from 'next/link';
import { Gift, MapPin, Sparkles, UtensilsCrossed } from 'lucide-react';
import { BARU, FOTO, FOTO_BERANDA, LINKS, MENU, WARUNG, rb, rp } from '@/lib/jajan';
import Gambar from './components/Gambar';
import PapanBuka from './components/PapanBuka';

const IKON = { menu: UtensilsCrossed, kado: Gift, baru: Sparkles, lokasi: MapPin };
const ANDALAN = MENU.flatMap((k) => k.item).filter(([, , laris]) => laris);

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md lg:max-w-4xl">
        <div className="turun">
          <PapanBuka />
        </div>

        {/* Papan menu: di layar lebar melebar jadi papan mendatar, menu kiri dan tautan kanan */}
        <div className="naik papan mt-5 rounded-3xl p-6 md:p-8 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:p-10" style={{ animationDelay: '0.06s' }}>
          <header className="text-center lg:col-span-2">
            <Gambar src="/images/bu-rina.webp" alt="Ilustrasi Bu Rina tanpa wajah, berkerudung merah, membawa centong kayu" width={104} height={104} asli={512} loading="eager" className="mx-auto h-[6.5rem] w-[6.5rem] lg:h-32 lg:w-32" />
            <h1 className="mt-1 font-display text-3xl font-extrabold lg:text-5xl">{WARUNG.nama}</h1>
            <p className="text-sm font-semibold text-kecap/80">jajanan pasar & rice bowl rumahan · sejak {WARUNG.sejak}</p>
          </header>

          <section className="mt-6 lg:mt-8" aria-labelledby="andalan">
            <h2 id="andalan" className="mb-2 text-center text-xs font-extrabold uppercase tracking-[0.25em] text-cabe">≈ Menu Andalan ≈</h2>
            <ul className="mb-4 grid grid-cols-4 gap-2">
              {FOTO_BERANDA.map((f, i) => (
                <li key={f} className={i % 2 ? 'rotate-1' : '-rotate-1'}>
                  <Gambar src={`/images/menu/${f}.webp`} alt={FOTO[f].alt} width={640} height={640} asli={640} sizes="(min-width: 1024px) 96px, calc((100vw - 120px) / 4)" className="aspect-square w-full rounded-xl border-[3px] border-kecap object-cover" />
                  <p className="mt-1 text-center text-[11px] font-extrabold leading-tight text-kecap/85">{FOTO[f].label}</p>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5">
              {ANDALAN.map(([nama, harga, laris], i) => (
                <li key={nama} className="geser-masuk leaders text-[15px] font-bold" style={{ animationDelay: `${0.18 + i * 0.05}s` }}>
                  <span>
                    {nama}
                    {laris && <span className="ml-2 rounded-full bg-cabe px-2 py-0.5 text-[10px] font-extrabold text-santan">LARIS!</span>}
                  </span>
                  <span className="dots" aria-hidden="true" />
                  <span className="text-cabe">{rb(harga)}</span>
                </li>
              ))}
            </ul>
            {/* Di papan mendatar, kolom menu ikut menampilkan menu baru minggu ini */}
            <div className="mt-6 hidden -rotate-1 rounded-2xl border-[3px] border-kecap bg-cabe p-4 text-santan shadow-[4px_4px_0_rgba(61,44,30,0.85)] lg:block">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.25em]">✨ Menu baru minggu ini</p>
              <p className="mt-1 font-display text-2xl font-extrabold">{BARU.nama} · {rp(BARU.harga)}</p>
              <p className="text-xs font-semibold">{BARU.ket}</p>
            </div>
          </section>

          <nav className="mt-7 space-y-3 lg:mt-8" aria-label="Pesan dan informasi">
            {LINKS.map((c, i) => {
              const Ikon = IKON[c.ikon];
              return (
                <Link
                  key={c.label}
                  href={c.href}
                  className={`naik tombol-papan flex items-center gap-3 rounded-2xl border-[3px] border-kecap p-3.5 shadow-[4px_4px_0_rgba(61,44,30,0.85)] ${i % 2 ? 'miring-kanan' : 'miring-kiri'} ${c.warna}`}
                  style={{ animationDelay: `${0.3 + i * 0.06}s` }}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border-2 border-kecap bg-kunyit text-kecap"><Ikon size={18} aria-hidden="true" /></span>
                  <span className="flex-1">
                    <span className="block font-extrabold leading-tight">{c.label}</span>
                    <span className="block text-xs font-semibold">{c.sub}</span>
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        <p className="mt-5 text-center text-xs font-bold text-kecap/85">Menu baru tiap Senin di Instagram {WARUNG.handle} · warung fiktif untuk purwarupa desain 🛵</p>
      </div>
    </main>
  );
}
