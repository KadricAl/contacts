import { useEffect, useState } from "react";

const LeftSide = ({ contacts }) => {
    
    const [contactsLocal, setContactsLocal] = useState([]);

    //Load saved data from Local storage 
    useEffect(() => {
        
          const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
          setContactsLocal(savedContacts);
        
      }, [contacts]);

    return(
    <div className="w-full border-r-4 border-sky-700">
        <span className="flex w-full justify-center text-lg text-sky-600 font-medium">SAVED CONTACTS</span>
        <div className="flex flex-row justify-around m-4 border-y-4">
            <div>NAME</div>
            <div>PHONE</div>
        </div>
        <div></div>
        <div className="flex flex-col m-4 gap-4">
        {contactsLocal.length === 0 ? (
            <div className="flex justify-center text-gray-500">No saved data</div>) : (
        contactsLocal.map((contact, index) => (
            <div className="flex flex-row justify-around" key={index}>
            <span className="w-1/3 text-center">{contact.name}</span>
            <span className="w-1/3 text-center">{contact.phone}</span>
            </div>
        ))
    )}
      </div>
    </div> 
    );
};

export default LeftSide;