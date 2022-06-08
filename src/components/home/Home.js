import RenderAnimals from "../animals/RenderAnimals";
import Heading from "../layout/Heading";

export default function Home() {
  return (
    <>
      <Heading content="Home" />
      <RenderAnimals />
    </>
  );
}
