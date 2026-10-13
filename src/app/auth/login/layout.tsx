import StarFall from '@/components/commons/starfall';
import './../auth.css';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-white">
      {/* 1. Base: near-white -> very light green */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-white via-primary-100/35 to-ink-25" />

      <StarFall />
      {/* 2. Grid overlay */}
      <div className="grid-overlay pointer-events-none absolute inset-0 z-2" />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-8">
        {children}
      </div>
    </div>
  );
}
