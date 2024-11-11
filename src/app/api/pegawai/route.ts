import { NextResponse } from 'next/server';
import db from '@/utils/db';

export async function POST(req: Request) {
  const { npp, nama, gender, tglLahir, status, unitKerja, jabatan } = await req.json();
  const query = `INSERT INTO Pegawai (NPP, Nama, Gender, Tgl_Lahir, Status, uk_id, jab_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [npp, nama, gender, tglLahir, status, unitKerja, jabatan];
  await db.query(query, values);
  return NextResponse.json({ message: 'Data berhasil disimpan' });
}
