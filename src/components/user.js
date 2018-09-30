import React, { Component } from 'react';
import FormFields from '../widgets/Forms/formFields'

class User extends Component {

    state = {
        formData:{
            name:{
                element:'input',
                value:'',
                label:true,
                labelText:'Name',
                config:{
                    name:'name_input',
                    type:'text',
                    placeholder: 'Enter your name'    
                }
            },
            lastname:{
                element:'input',
                value:'',
                label:true,
                labelText:'Lastname',
                config:{
                    name:'name_input',
                    type:'text',
                    placeholder: 'Enter your lastname'    
                }
            }
        }
        
    }

    updateForm=(newState)=>{
        console.log(newState)
        this.setState({
            formData: newState
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault();

        let dataToSubmit = {};

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value
        }

        console.log(dataToSubmit)
    }

    render(){
        return(
            <div className={"container"}>
                <form className="form_element" onSubmit={this.handleSubmit} >
                    <FormFields 
                        formData={this.state.formData}
                        change={(newState)=> this.updateForm(newState) }
                    />
                    <button type="submit">Submit</button>
                </form>
                
            </div>
        )
    }
}

export default User;