import React, { Suspense } from 'react';
import Loader from './components/Loader';
// import Home from "./Page/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = React.lazy(() => import('./Page/Home'));
function App() {
  AOS.init({
    offset:200,
  duration:900
  })

  document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
          "#loader").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};

  return (
    <div className="App">

     <Suspense fallback={<Loader/>}>
     <Home/>
     </Suspense>
    </div>
  );
}

export default App;
