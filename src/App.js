import Account from "./Components/Account";
import Footer from "./Components/Footer";
import Aside from "./Components/Aside";
import Logo from "./Components/Logo";
import About from "./Components/About";
import Main from "./Components/Main";

function App() {
  return (
    <div className="h-screen w-screen">
      <Logo />
      <Account />
      <Aside />
      <Main />
      <Footer />
      <About />
    </div>
  );
}

export default App;
