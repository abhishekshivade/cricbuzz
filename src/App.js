import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import AboutUs from "./Routes/AboutUs";
import ContactUs from "./Routes/ContactUs";
import Stats from "./Routes/Stats";
import Teams from "./Routes/Teams";
import NavBar from "./Components/Navbar";
import Dashboard from "./Routes/Dashboard";
import Footer from "./Components/Footer";
import LogIn from "./Routes/LogIn";
import SignUp from "./Routes/SignUp";

function App() {
  return (
    <div className="w-11/12 mx-auto mt-5">
      <NavBar />

      <Routes>
        <Route index exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/stats" element={<Stats />} />
        <Route exact path="/teams" element={<Teams />} />
        {/* <Route exact path="/dashboard" element={<Dashboard/>}/> */}
        <Route exact path="/login" element={<LogIn/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
