import { NextResponse } from 'next/server';
import db from '@/utils/db';

export async function POST(req: Request) {
  const { id, npp, nama, gender, tglLahir, status, unitKerja, jabatan } = await req.json();

  try {
    const query = `
      UPDATE Pegawai 
      SET NPP = ?, Nama = ?, Gender = ?, Tgl_Lahir = ?, Status = ?, uk_id = ?, jab_id = ?
      WHERE id = ?
    `;
    await db.query(query, [npp, nama, gender, tglLahir, status, unitKerja, jabatan, id]);
    return NextResponse.json({ message: 'Data berhasil diupdate' });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ message: 'Gagal mengupdate data' }, { status: 500 });
  }
}
