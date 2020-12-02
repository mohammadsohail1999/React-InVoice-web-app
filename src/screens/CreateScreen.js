import React from 'react'
import Form from '../Components/Form';

import {useDispatch} from 'react-redux';
import {createInVoice} from '../actions/index' 

const CreateScreen = ({history}) => {


    const dispatch = useDispatch();
    
    const onSubmitHandler = (obj)=>{

        dispatch(createInVoice(obj))
             
        history.push('/')
        
    }

    

    return (
        <div className="ui container">
            <h1 className="ui header">Create A InVoice!</h1>
            <Form onSubmitHandler={onSubmitHandler}  />
            
        </div>
    )
}

export default CreateScreen
