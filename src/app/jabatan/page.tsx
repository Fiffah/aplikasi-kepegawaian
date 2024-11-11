'use client';
import { useState } from 'react';
import ModalJabatanForm from '@/components/ModalJabatanForm';

type Jabatan = {
  id: number;
  namaJabatan: string;
  kelompokJabatan: string;
  tingkatJabatan: string;
};

export default function JabatanPage() {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<Jabatan | null>(null);
  
  const [data, setData] = useState<Jabatan[]>([
    { id: 1, namaJabatan: 'Kepala Divisi ISB', kelompokJabatan: 'Struktural', tingkatJabatan: '8-B' },
    { id: 2, namaJabatan: 'Kepala Bagian', kelompokJabatan: 'Struktural', tingkatJabatan: '7-A' }
  ]);

  const handleTambah = () => {
    setIsModalOpen(true);
  };

  const handleUbah = () => {
    if (selectedRow !== null) {
      const rowData = data.find((row) => row.id === selectedRow);
      setEditData(rowData || null);
      setIsEditModalOpen(true);
    } else {
      alert('Pilih data yang ingin diubah');
    }
  };

  const handleSave = (jabatan: Jabatan) => {
    const newId = data.length ? data[data.length - 1].id + 1 : 1;
    setData([...data, { ...jabatan, id: newId }]);
    setIsModalOpen(false);
  };

  const handleEditSave = (jabatan: Jabatan) => {
    const updatedData = data.map((row) => (row.id === selectedRow ? { ...jabatan, id: row.id } : row));
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
        <h2 className="text-2xl font-bold mb-4 text-black">Jabatan</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-400 border border-gray-600">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-black">Checkbox</th>
                <th className="border px-4 py-2 text-black">Nama Jabatan</th>
                <th className="border px-4 py-2 text-black">Kelompok Jabatan</th>
                <th className="border px-4 py-2 text-black">Tingkat Jabatan</th>
              </tr>
            </thead>
            <tbody>
              {data.map((jabatan) => (
                <tr key={jabatan.id} className={`${selectedRow === jabatan.id ? 'bg-gray-500' : ''}`}>
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={selectedRow === jabatan.id}
                      onChange={() => setSelectedRow(jabatan.id)}
                    />
                  </td>
                  <td className="border px-4 py-2 text-black">{jabatan.namaJabatan}</td>
                  <td className="border px-4 py-2 text-black">{jabatan.kelompokJabatan}</td>
                  <td className="border px-4 py-2 text-black">{jabatan.tingkatJabatan}</td>
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
        <ModalJabatanForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} />
        {editData && (
          <ModalJabatanForm
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
