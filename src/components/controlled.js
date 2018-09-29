import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name:'',
        lastname: ''
        
    }

    handlenameChange=(event)=>{
        this.setState({
            lastname:event.target.value
        })
    }

    handleLastnameChange=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>First Name</label>
                        <input 
                            type="text"
                            onChange={this.handlenameChange}
                            value={this.state.name}
                        />
                    </div>
                    <div className="form_element">
                        <label>Last Name</label>
                        <input 
                            type="text"
                            onChange={this.handleNameChange}
                            value={this.state.lastname}
                        />
                    </div>
                </form>
                
            </div>
        )
    }
}

export default Controlled;