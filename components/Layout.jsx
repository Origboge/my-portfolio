import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-800 text-gray-100 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-400">Origboge</h1>
          <div className="space-x-4">
            <Link href="/" legacyBehavior>
              <a className="text-red-400 hover:text-green-400 transition-colors">Home</a>
            </Link>
            <Link href="#about" legacyBehavior>
              <a className="text-red-400 hover:text-green-400 transition-colors">About</a>
            </Link>
            <Link href="#projects" legacyBehavior>
              <a className="text-red-400 hover:text-green-400 transition-colors">Projects</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center p-4 mt-8 text-sm border-t border-gray-700">
        &copy; {new Date().getFullYear()} Origboge. All rights reserved.
      </footer>
    </div>
  );
}
