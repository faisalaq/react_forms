import React, { Component } from 'react';

class Uncontrolled extends Component {

    state = {

    }

    handleSubmit = (event)=>{
        event.preventDefault();

        const values = {
            name:this.name.value,
            lastname:this.lastname.value
        }
        console.log(values)

    }

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>First Name</label>
                        <input 
                            type="text"
                            ref = {input => this.name = input}
                        />
                    </div>
                    <div className="form_element">
                        <label>Last Name</label>
                        <input 
                            type="text"
                            ref = {input => this.lastname = input}
                        />
                    </div>
                    <button onClick={this.handleSubmit} >Sign in</button>
                </form>
            </div>
        )
    }
}

export default Uncontrolled;