'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const data = [
    { id: 1, npp: '10001', nama: 'Anang Hermansyah', jenisKelamin: 'Laki-Laki', tanggalLahir: '01-Januari-1980', jabatan: 'Kepala Bagian', unitKerja: 'Divisi ISB', status: 'PT' },
    { id: 2, npp: '10002', nama: 'Bobby Nasution', jenisKelamin: 'Laki-Laki', tanggalLahir: '15-Februari-1990', jabatan: 'Staff', unitKerja: 'Divisi HRD', status: 'Kontrak' }
  ];

  const handleLogout = () => {
    router.push('/Login');
  };

  return (
    <div className="flex h-screen bg-gray-200">

    </div>
  );
}
