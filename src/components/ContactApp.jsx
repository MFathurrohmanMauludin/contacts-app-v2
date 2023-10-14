import React from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';

// Parent component untuk semua child component
class ContactApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: getData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }


    onDeleteHandler(id) {
        const contacts = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({ contacts });
    }

    render() {
        return (
            <div className="contact-app">
                <h1>Daftar Kontak</h1>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
            </div>
        )
    }
}

export default ContactApp;

/*
    praktik unidirectional data flow sangat kental di React. Sekali lagi, di React data 
    selalu hidup (berada) di parent component. Jika child component membutuhkannya, data 
    akan dikirim secara drilling (menurun) mulai dari komponen ContactList, ContactItem, 
    ContactItemImage, dan ContactItemBody yang memanfaatkan properti.
*/