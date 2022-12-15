import React, { Suspense } from 'react';
import Loader from './components/Loader';
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

     <Suspense fallback={<Loader/>}>
     <Home/>
     </Suspense>
    </div>
  );
}

export default App;
