import WrapperDiv from "../wrapper";
import { Header, Heading } from '../../components/CardHeading';

export default function Page() {
  return (
    <WrapperDiv>
      <Header>
        <Heading>
          Eid Mubarak
        </Heading>
        <Heading className="text-xl">
          by immi
        </Heading>
      </Header>
      <div>
        thanks
      </div>
    </WrapperDiv>
  );
}