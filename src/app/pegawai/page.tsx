'use client';
import { useState } from 'react';
import ModalForm from '@/components/ModalForm';
import EditModal from '@/components/EditModal';

export default function PegawaiPage() {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState<any>(null);

  const [data, setData] = useState([
    { id: 1, npp: '10001', nama: 'Anang Hermansyah', jenisKelamin: 'Laki-Laki', tanggalLahir: '01-Januari-1980', jabatan: 'Kepala Bagian', unitKerja: 'Divisi ISB', status: 'PT' },
    { id: 2, npp: '10002', nama: 'Bobby Nasution', jenisKelamin: 'Laki-Laki', tanggalLahir: '15-Februari-1990', jabatan: 'Staff', unitKerja: 'Divisi HRD', status: 'Kontrak' }
  ]);

  const handleSave = (pegawai: any) => {
    setData([...data, { ...pegawai, id: data.length + 1 }]);
    setIsModalOpen(false);
  };

  const handleEdit = () => {
    if (selectedRow !== null) {
      const rowData = data.find(row => row.id === selectedRow);
      setEditData(rowData);
      setIsEditModalOpen(true);
    }
  };

  const handleEditSave = (pegawai: any) => {
    const updatedData = data.map(row => (row.id === pegawai.id ? pegawai : row));
    setData(updatedData);
    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    if (selectedRow !== null) {
      const filteredData = data.filter(row => row.id !== selectedRow);
      setData(filteredData);
      setSelectedRow(null);
      alert('Data berhasil dihapus');
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

      <main className="flex-1 p-8 bg-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-black">Pegawai</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-400 border border-gray-600 text-center">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-black">Checkbox</th>
                <th className="border px-4 py-2 text-black">NPP</th>
                <th className="border px-4 py-2 text-black">Nama</th>
                <th className="border px-4 py-2 text-black">Jenis Kelamin</th>
                <th className="border px-4 py-2 text-black">Tanggal Lahir</th>
                <th className="border px-4 py-2 text-black">Jabatan</th>
                <th className="border px-4 py-2 text-black">Unit Kerja</th>
                <th className="border px-4 py-2 text-black">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map(row => (
                <tr
                  key={row.id}
                  className={`${selectedRow === row.id ? 'bg-gray-500' : ''}`}
                  onClick={() => setSelectedRow(row.id)}
                >
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={selectedRow === row.id}
                      onChange={() => setSelectedRow(row.id)}
                    />
                  </td>
                  <td className="border px-4 py-2 text-black">{row.npp}</td>
                  <td className="border px-4 py-2 text-black">{row.nama}</td>
                  <td className="border px-4 py-2 text-black">{row.jenisKelamin}</td>
                  <td className="border px-4 py-2 text-black">{row.tanggalLahir}</td>
                  <td className="border px-4 py-2 text-black">{row.jabatan}</td>
                  <td className="border px-4 py-2 text-black">{row.unitKerja}</td>
                  <td className="border px-4 py-2 text-black">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex space-x-4 mt-4">
          <button onClick={() => setIsModalOpen(true)} className="bg-gray-400 text-black py-2 px-4">Tambah</button>
          <button onClick={handleEdit} className="bg-gray-400 text-black py-2 px-4">Ubah</button>
          <button onClick={handleDelete} className="bg-gray-400 text-black py-2 px-4">Hapus</button>
        </div>

        <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} />
        {editData && (
          <EditModal
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
