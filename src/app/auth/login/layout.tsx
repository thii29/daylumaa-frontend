export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-screen h-screen overflow-hidden">

      {/* 1. Base gradient */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-primary-200 to-ink-25" />

      {/* 2. Aurora blobs */}
      <div className="pointer-events-none absolute inset-0 z-1 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] h-[60vw] w-[60vw] rounded-full bg-primary-300/50 blur-[80px] animate-drift-a" />
        <div className="absolute top-[5%] -right-[15%] h-[55vw] w-[55vw] rounded-full bg-primary-200/60 blur-[90px] animate-drift-b" />
        <div className="absolute -bottom-[20%] left-[25%] h-[65vw] w-[65vw] rounded-full bg-primary-400/40 blur-[100px] animate-drift-c" />
      </div>

      {/* 3. Grid overlay */}
      <div className="grid-overlay pointer-events-none absolute inset-0 z-2" />

      {/* 4. Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-8">
        {children}
      </div>
    </div>
  );
}