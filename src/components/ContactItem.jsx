import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';

// Parent Component untuk ContactImage dan ContactItemBody
const ContactItem = ({ imageUrl, name, phone_number, tag, id, onDelete }) => {
    return (
        <div className="contact-item">
            <ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} phone_number={phone_number} tag={tag} />
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    );
}

export default ContactItem;