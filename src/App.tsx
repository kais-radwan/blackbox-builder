import { Figma } from "./components/figma";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Proof } from "./components/proof";

function App() {
  return (
    <>
      <Header />

      <Hero />

      <div className="mt-56"></div>

      <Proof />
      <Figma />

      <div className="min-h-screen"></div>
    </>
  );
}

export default App;
