import React from 'react';
import {add,sub,mul} from './Calc.jsx';
function App()
{
  return(
  <>
  <ul>
      <li>add two number{add(34,90)}</li>
      <li>sub two number{sub(95,90)}</li>
      <li>mul two number{mul(4,9)}</li>
  </ul>
  </>
  );
}
export default App;