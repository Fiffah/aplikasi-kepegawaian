'use client';
import { useState } from 'react';

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (pegawai: any) => void;
}

export default function ModalForm({ isOpen, onClose, onSave }: ModalFormProps) {
  const [npp, setNpp] = useState('');
  const [nama, setNama] = useState('');
  const [gender, setGender] = useState('L');
  const [tglLahir, setTglLahir] = useState('');
  const [status, setStatus] = useState('');
  const [unitKerja, setUnitKerja] = useState('');
  const [jabatan, setJabatan] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ npp, nama, gender, tglLahir, status, unitKerja, jabatan });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-black">Tambah Pegawai</h2>
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
            <div className="text-black">
              <label className="mr-4">
                <input type="radio" value="L" checked={gender === 'L'} onChange={() => setGender('L')} className="mr-2" />
                Laki-Laki
              </label>
              <label>
                <input type="radio" value="P" checked={gender === 'P'} onChange={() => setGender('P')} className="mr-2" />
                Perempuan
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
