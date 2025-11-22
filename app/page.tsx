import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-[#7DB343]">
      <Main />
      <Footer />
    </div>
  );
}
