'use client';

export default function ErrorPage({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html>
      <body>
        <div className="p-6 text-center">
          <h1>Error Title</h1>
          <p>{error.message}</p>
          <button
            onClick={() => retry()}
            className="mt-4 px-4 py-2 bg-warning-2"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
