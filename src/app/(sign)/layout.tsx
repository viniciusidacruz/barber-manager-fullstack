export default function SignLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      {children}
    </main>
  );
}
