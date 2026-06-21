export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen bg-linear-135 from-primary-700 to-primary-500 relative px-8 flex items-center justify-center">
      {children}
    </div>
  );
}
