import React, { Suspense } from 'react';

// import Home from "./Page/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = React.lazy(() => import('./Page/Home'));
function App() {
  AOS.init({
    offset:200,
  duration:900
  })
  return (
    <div className="App">
     <Suspense fallback={<div>Please wait...</div>}>
     <Home/>
     </Suspense>
    </div>
  );
}

export default App;
