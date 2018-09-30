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
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''

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
            },
            message:{
                element:'text',
                value:'',
                label:true,
                labelText:'message',
                config:{
                    name:'name_input',
                    rows:4,
                    cols: 30     
                }
            },
            age:{
                element:'select',
                value:'',
                label:true,
                labelText:'Age',
                config:{
                    name:'name_input',
                    options:[
                        {val:'1', text:'10-20'},
                        {val:'2', text:'20-30'},
                        {val:'3', text:'+30'}
                    ]    
                }
            }
        }
        
    }

    updateForm=(newState)=>{
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