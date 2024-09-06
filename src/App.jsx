import React, { useState } from "react";
import LeftSide from "./components/leftSide";
import RightSide from "./components/rightSide";


function App() {

  const [contacts, setContacts] = useState([]);

  const updateContacts = (newContacts) => {
    setContacts(newContacts);
  }
  
  return (
    <div className="w-full flex flex-row justify-around mt-12">
      <LeftSide contacts = {contacts} />
      <RightSide updateContacts={updateContacts}/>
    </div>
  );
};

export default App;
