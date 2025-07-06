

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import AnimatedBackground from "./components/AnimatedBackground"; 

const App = () => {
  return (
    <AnimatedBackground>
      <Header />
      <LandingPage />
    </AnimatedBackground>
  );
};

export default App;
