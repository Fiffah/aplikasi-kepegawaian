'use client';
import { useState } from 'react';

interface ModalJabatanFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (jabatan: any) => void;
  initialData?: any;
}

export default function ModalJabatanForm({ isOpen, onClose, onSave, initialData }: ModalJabatanFormProps) {
  const [namaJabatan, setNamaJabatan] = useState(initialData?.namaJabatan || '');
  const [kelompokJabatan, setKelompokJabatan] = useState(initialData?.kelompokJabatan || '');
  const [tingkatJabatan, setTingkatJabatan] = useState(initialData?.tingkatJabatan || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ namaJabatan, kelompokJabatan, tingkatJabatan });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 text-black">
        <h2 className="text-xl font-bold mb-4">{initialData ? 'Edit Jabatan' : 'Tambah Jabatan'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Nama Jabatan</label>
            <input type="text" value={namaJabatan} onChange={(e) => setNamaJabatan(e.target.value)} className="w-full p-2 border text-black" required />
          </div>
          <div className="mb-3">
            <label>Kelompok Jabatan</label>
            <input type="text" value={kelompokJabatan} onChange={(e) => setKelompokJabatan(e.target.value)} className="w-full p-2 border text-black" required />
          </div>
          <div className="mb-3">
            <label>Tingkat Jabatan</label>
            <input type="text" value={tingkatJabatan} onChange={(e) => setTingkatJabatan(e.target.value)} className="w-full p-2 border text-black" required />
          </div>
          <div className="flex justify-end mt-4">
            <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 mr-2 text-black">Batal</button>
            <button type="submit" className="bg-blue-500 text-black px-4 py-2 ">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
}
