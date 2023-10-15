import React from 'react';
import ContactList from './ContactList';
import { getData } from '../utils/data';
import ContactInput from './ContactInput';

// Parent component untuk semua child component
class ContactApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: getData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    }

    // Menghapus data di UI
    onDeleteHandler(id) {
        const contacts = this.state.contacts.filter(contact => contact.id !== id); //  menyimpan data contacts di dalam this.state agar perubahan datanya memicu render UI.
        this.setState({ contacts }); // mengubah data this.state menggunakan this.setState
        console.log(contacts);
    }

    // Menambahkan kontak baru
    onAddContactHandler({ name, tag, phone_number }) {
        // prevState -> mengambil data/state sebelumnya
        this.setState((prevState) => {
            return {
                contacts: [
                    ...prevState.contacts,
                    {
                        id: +new Date(),
                        name,
                        phone_number,
                        tag,
                        imageUrl: '/images/default.jpg'
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div className="contact-app">
                <h1>Aplikasi Kontak</h1>
                <h2>Tambah Kontak</h2>
                <ContactInput addContact={this.onAddContactHandler} />
                <h2>Daftar Kontak</h2>
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