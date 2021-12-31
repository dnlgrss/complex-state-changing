import React, { useState } from "react";

function App() {
  //passing an object 'fullName' with the two const name and fname to avoid to create 2 useState const for each name and fname
  const [fullName, setFullName] = useState({
    name: "",
    fname: ""
  });

  function changeFullName(e) {
    //const value = e.target.value;
    //const name = e.target.name;
    // Destructuring the event target
    const { value, name } = e.target;

    // you can pass previous event as parameter (same as event handler)
    setFullName((previousValue) => {
      if (name === "fName") {
        return {
          name: value,
          fname: previousValue.fname
        };
      } else if (name === "lName") {
        return {
          name: previousValue.name,
          fname: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.name} {fullName.fname}
      </h1>
      <form>
        <input
          onChange={changeFullName}
          name="fName"
          placeholder="First Name"
          value={fullName.name}
        />
        <input
          onChange={changeFullName}
          name="lName"
          placeholder="Last Name"
          value={fullName.fname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
