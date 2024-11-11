'use client';
import { useState } from 'react';

interface ModalUnitKerjaFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (unit: any) => void;
  initialData?: any;
}

export default function ModalUnitKerjaForm({ isOpen, onClose, onSave, initialData }: ModalUnitKerjaFormProps) {
  const [namaUnit, setNamaUnit] = useState(initialData?.namaUnit || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ namaUnit });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 text-black">
        <h2 className="text-xl font-bold mb-4">{initialData ? 'Edit Unit Kerja' : 'Tambah Unit Kerja'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Unit Kerja</label>
            <input
              type="text"
              value={namaUnit}
              onChange={(e) => setNamaUnit(e.target.value)}
              className="w-full p-2 border"
              required
            />
          </div>
          <div className="flex justify-end mt-4">
            <button type="button" onClick={onClose} className="bg-gray-300 text-black px-4 py-2 mr-2">Batal</button>
            <button type="submit" className="bg-blue-500 text-black px-4 py-2">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  );
}
