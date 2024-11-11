import Sidebar from '@/components/SideBar';
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Aplikasi Kepegawaian',
  description: 'Aplikasi manajemen kepegawaian',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen w-screen flex overflow-hidden">
        <Sidebar />

        <div className="flex flex-col flex-1 h-full overflow-auto">
          <header className="bg-gray-100 p-4 shadow flex justify-between items-center top-0">
            <span className="text-black">User Login</span>
            <Link href="/login" className="text-blue-600 hover:text-blue-800">
              Logout
            </Link>
          </header>

          <main className="flex-1 p-8 bg-gray-200 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
