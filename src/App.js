import React from "react";
import background from './adobe.jpg';
import Signup from "./Signup.js";



function App() {
  return (
    <section className="signup">
       <div style={{backgroundImage: `url(${background})`}} className='background-img'>
      <Signup/>
    </div>
    </section>
      
  );
}

export default App;
