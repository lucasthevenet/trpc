export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: 'hsla(216, 28%, 7%, 1)',
          color: 'hsla(210, 16%, 80%, 1)',
        }}
      >
        <main
          style={{
            padding: '3rem',
            fontSize: '1.1rem',
          }}
        >
          <div
            style={{
              padding: '1rem',
              background: 'hsla(218, 18%, 12%, 1)',
              borderRadius: '0.5rem',
              color: 'hsla(210, 16%, 80%, 1)',
            }}
          >
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}