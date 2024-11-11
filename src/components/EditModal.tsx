'use client';
import { useState } from 'react';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (pegawai: any) => void;
  initialData: any;
}

export default function EditModal({ isOpen, onClose, onSave, initialData }: EditModalProps) {
  const [npp, setNpp] = useState(initialData.npp);
  const [nama, setNama] = useState(initialData.nama);
  const [gender, setGender] = useState(initialData.gender);
  const [tglLahir, setTglLahir] = useState(initialData.tglLahir);
  const [status, setStatus] = useState(initialData.status);
  const [unitKerja, setUnitKerja] = useState(initialData.unitKerja);
  const [jabatan, setJabatan] = useState(initialData.jabatan);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ id: initialData.id, npp, nama, gender, tglLahir, status, unitKerja, jabatan });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-black">Edit Pegawai</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="text-black">NPP</label>
            <input type="text" value={npp} onChange={(e) => setNpp(e.target.value)} className="w-full p-2 border text-black" required />
          </div>
          <div className="mb-3">
            <label className="text-black">Nama</label>
            <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} className="w-full p-2 border text-black" required />
          </div>
          <div className="mb-3">
            <label className="text-black">Jenis Kelamin</label>
            <div>
              <label className="mr-4 text-black">
                <input type="radio" value="L" checked={gender === 'L'} onChange={() => setGender('L')} /> Laki-Laki
              </label>
              <label className="text-black">
                <input type="radio" value="P" checked={gender === 'P'} onChange={() => setGender('P')} /> Perempuan
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="text-black">Tanggal Lahir</label>
            <input type="date" value={tglLahir} onChange={(e) => setTglLahir(e.target.value)} className="w-full p-2 border text-black" />
          </div>
          <div className="mb-3">
            <label className="text-black">Status</label>
            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-2 border text-black" />
          </div>
          <div className="mb-3">
            <label className="text-black">Unit Kerja</label>
            <input type="text" value={unitKerja} onChange={(e) => setUnitKerja(e.target.value)} className="w-full p-2 border text-black" />
          </div>
          <div className="mb-3">
            <label className="text-black">Jabatan</label>
            <input type="text" value={jabatan} onChange={(e) => setJabatan(e.target.value)} className="w-full p-2 border text-black" />
          </div>
          <div className="flex justify-end mt-4">
            <button type="button" onClick={onClose} className="bg-gray-300 text-black px-4 py-2 mr-2">Batal</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
}
