'use client';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-100 p-4 fixed">
      <h2 className="text-xl font-bold mb-8 text-black">Aplikasi Kepegawaian</h2>
      <nav className="space-y-4">
        <Link href="/pegawai" className="block text-blue-600 hover:text-blue-800">
          Pegawai
        </Link>
        <Link href="/jabatan" className="block text-blue-600 hover:text-blue-800">
          Jabatan
        </Link>
        <Link href="/unit-kerja" className="block text-blue-600 hover:text-blue-800">
          Unit Kerja
        </Link>
      </nav>
    </aside>
  );
}
