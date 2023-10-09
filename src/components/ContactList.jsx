import React from 'react';
import ContactItem from './ContactItem';

// Menampilkan contact berdasarkan banyaknya data yang diberikan (oleh data.js) melalui properti (props)
const ContactList = ({ contacts }) => {
    return (
        <div className="contact-list">
            {
                contacts.map((contact) => (
                    <ContactItem key={contact.id} {...contact} />
                ))
            }
        </div>
    )
}

export default ContactList;