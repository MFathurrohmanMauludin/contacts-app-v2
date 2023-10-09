import React from 'react';

function ContactItemBody({ name, phone_number, tag }) {
    return (
        <div className="contact-item__body">
            <h3 className="contact-item__title">{name}</h3>
            <span className="contact-item__phone-number">Contact: {phone_number}</span>
            <p className="contact-item__username">Twitter: @{tag}</p>
        </div>
    );
}

export default ContactItemBody;