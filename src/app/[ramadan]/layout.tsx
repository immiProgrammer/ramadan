import WrapperDiv from '../wrapper';

export default function RootLayout({
    children,
    params,
  }: Readonly<{
    children: React.ReactNode;
    params: {ramadan:string}
  }>) {
    return (
      <WrapperDiv>
        <div className="flex flex-col justify-center items-center text-center text-4xl font-extrabold mb-5">
          <h2 className="gradient-text">Ramadan Mubarak</h2>
          <h2 className="gradient-text">2024</h2>
        </div>
        {children}
      </WrapperDiv>
    );}
  