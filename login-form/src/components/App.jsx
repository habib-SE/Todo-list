import React from "react";
import Form from "./Form";
var userIsRegister = true;
function App() {
  return (
    <div className="container">
     <Form
     isRegisterd = {userIsRegister}
     />
    </div>
  );
}

export default App;
