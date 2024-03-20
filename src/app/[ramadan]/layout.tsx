import WrapperDiv from '../wrapper';
import { Heading, Header } from "@/components/CardHeading";

export default function RootLayout({
    children,
    params,
  }: Readonly<{
    children: React.ReactNode;
    params: {ramadan:string}
  }>) {
    return (
      <WrapperDiv>
        <Header>
          <Heading>Ramadan Mubarak</Heading>
          <Heading>2024</Heading>
        </Header>
        {children}
      </WrapperDiv>
    );}
  