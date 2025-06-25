import Header from "./components/Header";
import LandingPage from "./components/LandingPage";


const App = () => {
  return (
    <>
      <div className="bg-[#0A0A0A] text-white min-h-screen ">
        <Header />
        <LandingPage />
      </div>
    </>
  );
}

export default App