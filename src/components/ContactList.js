import React from "react";
import ContactCard from './ContactCard'
import { Link } from "react-router-dom";
import {listheader,liststyle,addButtonstyle} from "../styles"


const ContactList = (props)=>{

    
    const deleteContactHandler = (id,name)=>{
        props.getDelContactId(id,name);
    };

    const renderContactList = props.contacts.map((contact)=>{
        return <ContactCard contact = {contact} key = {contact.id} clickHandler={deleteContactHandler}/>;
    }
    );
    return(
        <div className="main" style={{marginTop:"80px",justifyContent:"center",zIndex:"-1"}}>
            <div style={listheader}>
                <div><h2>Contact List</h2></div>
                <Link to={"/add"}>
                <button style={addButtonstyle}>Add Contact</button>
                </Link>
             </div>
            <div style={liststyle}>{renderContactList}</div>
        </div>
    );
}
export default ContactList;