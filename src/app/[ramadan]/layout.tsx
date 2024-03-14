
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <><div className="flex flex-col justify-center items-center text-center text-4xl font-extrabold mb-5">
        <h2 className="gradient-text">Ramadan Mubarak</h2>
        <h2 className="gradient-text">2024</h2>
      
    </div>
    {children}
    </>
    )}