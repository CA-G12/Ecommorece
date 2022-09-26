import { useEffect } from 'react';
import Signup from './Components/signup/Signup';
import PriceFilter from './Components/landingPage/Filters/PriceFilter'; 
import CategoryFilter from './Components/landingPage/Filters/CategoryFilter';
function App() {
  useEffect(() => {
    fetch('/api').then((data) => data.json()).then((data) => console.log(data));
  });
  return (
    <div>
      {/* <Login /> */}
      {/* <CategoryFilter />
      <PriceFilter /> */}
      <Signup />
    </div>
  );
}

export default App;
