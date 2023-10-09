import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';

const ContactItem = ({ imageUrl, name, phone_number, tag }) => {
    return (
        <div className="contact-item">
            <ContactItemImage imageUrl={imageUrl} />
            <ContactItemBody name={name} phone_number={phone_number} tag={tag} />
        </div>
    );
}

export default ContactItem;