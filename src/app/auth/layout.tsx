import StarFall from '@/components/commons/starfall';

import './auth.css';
import Button from '@/components/commons/button';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-white">
      {/* 1. Base: near-white -> very light green */}
      <div className="absolute inset-0 z-0 bg-linear-to-bl from-white to-primary-100" />
      <StarFall />
      {/* 2. Grid overlay */}
      <div className="grid-overlay pointer-events-none absolute inset-0 z-2" />

      <div className="relative z-10 h-full w-full flex flex-col items-center">
        <div className="text-body-sm text-ink-500 py-16">Shirley x Tony</div>
        <div className=" flex flex-col gap-4">
          <div className="mt-8 flex flex-col items-end -space-y-4">
            <div className="text-body text-primary-500">Welcome to</div>
            <div className="font-script text-welcome text-primary-main">
              Daylumaa
            </div>
          </div>
          <div>Tasks. Goals. Money. Sorted.</div>
          <div className="flex justify-around">
            <Button label="Login" />
            <Button label="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  );
}
