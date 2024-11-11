import { NextResponse } from 'next/server';
import db from '@/utils/db';

export async function POST(req: Request) {
  const { id } = await req.json();

  try {
    const query = 'DELETE FROM Pegawai WHERE id = ?';
    await db.query(query, [id]);
    return NextResponse.json({ message: 'Data berhasil dihapus' });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ message: 'Gagal menghapus data' }, { status: 500 });
  }
}
