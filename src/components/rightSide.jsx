import { TextField, Button } from "@mui/material";
import { useState } from "react";

const RightSide = ({ updateContacts }) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handlePhone = (e) => {
        
        const value = e.target.value;
        const isValid =  /^[+\d]{0,14}$/.test(value);

        if (!isValid) {
            setPhoneError(true);
            setPhone(value);
          } else {
            setPhoneError(false);
            setPhone(value);
          }
        };
    

    const handleAddButton = () => {
        const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const contact = {name, phone};
        const newContacts = [...savedContacts, contact];
        
        localStorage.setItem('contacts', JSON.stringify(newContacts));
        
        updateContacts(newContacts);

        setName('');
        setPhone('');
    };

    const handleClearButton = ()=> {

        setName('');
        setPhone('');

    }


    return(
    <div className="flex flex-col gap-4 mx-4 w-full text-center">
        <span className="text-lg text-sky-600 font-medium">ADD CONTACT</span>
        <TextField value={name} onChange={handleName}  label="Contact name" variant="outlined" />
        <TextField value={phone} onChange={handlePhone} error={phoneError} helperText={phoneError ? 'Please enter numbers': ''}  label="Phone number" variant="outlined" />
        <div className="flex flex-row justify-between gap-4">
            <Button onClick={handleClearButton} className="w-1/2" variant="outlined">CLEAR</Button>
            <Button onClick={handleAddButton} className="w-1/2" variant="contained">ADD</Button>
        </div>
    </div>
    );
};

export default RightSide;