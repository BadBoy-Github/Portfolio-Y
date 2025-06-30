import Header from "./components/Header";
import LandingPage from "./components/LandingPage";


const App = () => {
  return (
    <>
      <div className="bg-[#1d1d1d] text-white min-h-screen ">
        <Header />
        <LandingPage />
      </div>
    </>
  );
}

export default App