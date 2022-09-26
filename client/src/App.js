import { useEffect } from 'react';
import Login from './Components/login/Login';

function App() {
  useEffect(() => {
    fetch('/api').then((data) => data.json()).then((data) => console.log(data));
  });
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
