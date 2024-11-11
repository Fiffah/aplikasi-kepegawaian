import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import db from '@/utils/db';

export async function POST(req: Request) {
  const { username, password } = await req.json();

  try {
    const [rows]: any = await db.query('SELECT * FROM Users WHERE username = ?', [username]);

    if (rows.length === 0) {
      return NextResponse.json({ message: 'Username tidak ditemukan' }, { status: 401 });
    }

    const user = rows[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (isPasswordValid) {
      return NextResponse.json({ message: 'Login sukses' });
    } else {
      return NextResponse.json({ message: 'Username atau password salah' }, { status: 401 });
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Terjadi kesalahan server' }, { status: 500 });
  }
}
