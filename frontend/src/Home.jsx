import Advertisement from "./components/Advertisement";
import { Categories } from "./components/Categories";
import SpotLight from "./components/SpotLight";

export default function Home() {
  return (
    <div>
      <Advertisement />
      <Categories />
      <SpotLight />
    </div>
  );
}
