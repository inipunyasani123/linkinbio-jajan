'use client';

import { useEffect, useState } from 'react';
import { WARUNG, statusWarung } from '@/lib/jajan';

// Papan buka/tutup yang bergoyang, dihitung menurut jam WIB tiap menit.
export default function PapanBuka() {
  const [s, setS] = useState(null);
  useEffect(() => {
    const f = () => setS(statusWarung());
    f();
    const t = setInterval(f, 60000);
    return () => clearInterval(t);
  }, []);
  return (
    <p role="status" className={`goyang mx-auto w-fit rounded-full border-4 border-kecap px-6 py-2 text-center font-bold shadow-[4px_4px_0_rgba(61,44,30,0.85)] ${s && !s.buka ? 'bg-santan text-kecap' : 'bg-cabe text-santan'}`}>
      {s === null ? `🍢 ${WARUNG.nama}` : s.buka ? `🍢 ${s.teks}` : `🌙 ${s.teks}`}
    </p>
  );
}
