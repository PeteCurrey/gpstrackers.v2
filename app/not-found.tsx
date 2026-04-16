import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-void min-h-screen flex items-center justify-center pt-20">
      <div className="container text-center">
        <h1 className="text-white text-4xl mb-6">404 - Not Found</h1>
        <Link href="/" className="btn-signal">Go Home</Link>
      </div>
    </div>
  );
}
