import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import AnimatedBackground from "./components/AnimatedBackground";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AnimatedBackground>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <LandingPage />
        </main>
        <Footer />
      </div>
    </AnimatedBackground>
  );
};

export default App;
