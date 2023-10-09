import React from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';

// Parent component untuk semua child component
const ContactApp = () => {
    const contacts = getData();

    return (
        <div className="contact-app">
            <h1>Daftar Kontak</h1>
            <ContactList contacts={contacts} />
        </div>
    );
}

export default ContactApp;

/*
    praktik unidirectional data flow sangat kental di React. Sekali lagi, di React data 
    selalu hidup (berada) di parent component. Jika child component membutuhkannya, data 
    akan dikirim secara drilling (menurun) mulai dari komponen ContactList, ContactItem, 
    ContactItemImage, dan ContactItemBody yang memanfaatkan properti.
*/