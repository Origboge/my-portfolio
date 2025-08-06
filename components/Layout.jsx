import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <div className="space-x-4">
            <Link href="/" legacyBehavior><a className="hover:underline">Home</a></Link>
            <Link href="/about" legacyBehavior><a className="hover:underline">About</a></Link>
            <Link href="#projects" legacyBehavior><a className="hover:underline">Projects</a></Link>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 mt-8 text-sm">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
