import { useEffect } from 'react';
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';

function App() {
  useEffect(() => {
    fetch('/api').then((data) => data.json()).then((data) => console.log(data));
  });
  return (
    <div>
      {/* <Login /> */}
      <Signup />
    </div>
  );
}

export default App;
