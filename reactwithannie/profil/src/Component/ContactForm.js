import React, { Component } from 'react';

class ContactForm extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="formComponent">
            <form>
                <label>
                    Nom :
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Envoyer" />

            </form>
        </div>

         );
    }
}
 
export default ContactForm;