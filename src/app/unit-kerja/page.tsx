'use client';
import { useState } from 'react';
import ModalUnitKerjaForm from '@/components/ModalUnitKerjaForm';

type UnitKerja = {
  id: number;
  namaUnit: string;
};

export default function UnitKerjaPage() {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<UnitKerja | null>(null);

  const [data, setData] = useState<UnitKerja[]>([
    { id: 1, namaUnit: 'Divisi Pemasaran dan Penjualan' },
    { id: 2, namaUnit: 'Divisi Keuangan dan Akuntansi' }
  ]);

  const handleTambah = () => {
    setIsModalOpen(true);
  };

  const handleUbah = () => {
    if (selectedRow !== null) {
      const rowData = data.find((unit) => unit.id === selectedRow);
      setEditData(rowData || null);
      setIsEditModalOpen(true);
    } else {
      alert('Pilih data yang ingin diubah');
    }
  };

  const handleSave = (unit: UnitKerja) => {
    const newId = data.length ? data[data.length - 1].id + 1 : 1;
    setData([...data, { ...unit, id: newId }]);
    setIsModalOpen(false);
  };

  const handleEditSave = (unit: UnitKerja) => {
    const updatedData = data.map((row) => (row.id === selectedRow ? { ...unit, id: row.id } : row));
    setData(updatedData);
    setIsEditModalOpen(false);
  };

  const handleHapus = () => {
    if (selectedRow !== null) {
      const filteredData = data.filter((row) => row.id !== selectedRow);
      setData(filteredData);
      setSelectedRow(null);
    } else {
      alert('Pilih data yang ingin dihapus');
    }
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-8 text-black">Aplikasi Kepegawaian</h2>
        <nav className="space-y-4">
          <a href="/pegawai" className="block text-blue-600">Pegawai</a>
          <a href="/jabatan" className="block text-blue-600">Jabatan</a>
          <a href="/unit-kerja" className="block text-blue-600">Unit Kerja</a>
          <a href="/login" className="block text-blue-600">Logout</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-4 text-black">Unit Kerja</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-400 border border-gray-600">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-black">Checkbox</th>
                <th className="border px-4 py-2 text-black">Unit Kerja</th>
              </tr>
            </thead>
            <tbody>
              {data.map((unit) => (
                <tr key={unit.id} className={`${selectedRow === unit.id ? 'bg-gray-500' : ''}`}>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={selectedRow === unit.id}
                      onChange={() => setSelectedRow(unit.id)}
                    />
                  </td>
                  <td className="border px-4 py-2 text-black">{unit.namaUnit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex space-x-4 mt-4">
          <button onClick={handleTambah} className="bg-gray-400 py-2 px-4 text-black">Tambah</button>
          <button onClick={handleUbah} className="bg-gray-400 py-2 px-4 text-black">Ubah</button>
          <button onClick={handleHapus} className="bg-gray-400 py-2 px-4 text-black">Hapus</button>
        </div>
        <ModalUnitKerjaForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} />
        {editData && (
          <ModalUnitKerjaForm
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            onSave={handleEditSave}
            initialData={editData}
          />
        )}
      </main>
    </div>
  );
}
