/* eslint-disable react/prop-types */
import React from 'react';

class ContactInput extends React.Component {
    constructor(props) {
        super(props)

        // inisialisasi state (data)
        this.state = {
            name: '',
            phone_number: '',
            tag: '',
        }


        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        this.onPhoneNumberChangeEventHandler = this.onPhoneNumberChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    // event handler
    onNameChangeEventHandler(event) {
        this.setState(() => {
            return {
                name: event.target.value
            }
        });
    }

    onTagChangeEventHandler(event) {
        this.setState(() => {
            return {
                tag: event.target.values,
            }
        })
    }

    onPhoneNumberChangeEventHandler(event) {
        this.setState(() => {
            return {
                phone_number: event.target.values,
            }
        })
    }


    onSubmitChangeEventHandler(event) {
        // menghentikan aksi default dari tombol submit
        event.preventDefault();
        this.props.addContact(this.state);
        /*
            karena fungsi untuk menambahkan (mengubah) data harus berada pada component yang memiliki data tersebut (ContactApp) sehingga fungsi addContact di component ini dikirimkan melalui props.
        */
    }



    render() {
        return (
            <form className='contact-input' onSubmit={this.onSubmitChangeEventHandler}>
                <input type='text' placeholder='Name' value={this.state.name} onChange={this.onNameChangeEventHandler} />
                <input type='text' placeholder='Phone Number' value={this.state.phone_number} onChange={this.onTagChangeEventHandler} />
                <input type='text' placeholder='Tag' value={this.state.tag} onChange={this.onTagChangeEventHandler} />
                <button type='submit'>Add Contact</button>
            </form>
        )
    }
}

export default ContactInput;