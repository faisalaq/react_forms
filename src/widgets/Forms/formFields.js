import React from 'react'

const FormFields = (props)=>{

    const renderFields=()=>{
        const formArr = []

        for(let element in props.formData){
            formArr.push({
                id:element,
                settings: props.formData[element]
            })
        }

        return formArr.map((item, i)=>{
            return (
                <div key={i} className= "form_element">
                    {renderTemplates(item)}
                </div>
            )
        })
    }


    const showLabel=(show, label)=>{
        return show ?
            <label>{label}</label>
        :
            null
    }

    const changeHandler=(event, id)=>{
        let newState = props.formData
        newState[id].value = event.target.value
        
        let validData = validate(newState[id])
        console.log(validData)
     
        newState[id].valid = validData[0]
        newState[id].validationMessage = validData[1]
     
        props.change(newState)
    }

    const validate = (element)=>{
        console.log(element)
        let error = [true, '']

        if(element.validation.required){
            let valid = element.value.trim() !== ''
            let message = `${!valid ? 'this field is required' : ''}`

            error = !valid ? [valid, message] : error
        }

        return error;
    }

    const showValidation=(data)=>{
        let errorMessage = null
        if(data.validation && !data.valid){
            errorMessage = (
                <div className="label_error">
                    {data.validationMessage}
                </div>
            )
        }
        return errorMessage
    }

    const renderTemplates=(data)=>{
        let formTemplate = '';
        let values = data.settings;

        switch(values.element){
            case('input'):
            formTemplate = (
                <div>
                    {showLabel(values.label, values.labelText)}
                    <input 
                        {...values.config}
                        value={values.value}
                        onChange={
                            (event)=> changeHandler(event, data.id)
                        }
                    />
                    {showValidation(values)}
                </div>
            )
                break;
            case('text'):
            formTemplate = (
                <div>
                    {showLabel(values.label, values.labelText)}
                    <textarea 
                        {...values.config}
                        value={values.value}
                        onChange={
                            (event)=> changeHandler(event, data.id)
                        }
                    />
                </div>
            )
                break;
            case('select'):
            formTemplate = (
                <div>
                    {showLabel(values.label, values.labelText)}
                    <select 
                        value={values.value}
                        onChange={
                            (event)=> changeHandler(event, data.id)
                        }
                    >
                        {values.config.options.map((item, i)=>(
                            <option key={i} value={item.val}>{item.text} </option> 
                        ))}
                    </select>
                </div>
            )
                break;
            default:
                formTemplate= null;
        }

        return formTemplate;
    }

    return (
        <div>
            {renderFields()}
        </div>
    )
}
export default FormFields;