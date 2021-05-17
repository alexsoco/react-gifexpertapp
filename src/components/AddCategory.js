import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {       //component function
    
    const[inputValue, setInputValue]=useState('Añade un elemento');//Hook

    const handleInputChange=(e)=>{      //función que se activa cuando inputValue cambia
        setInputValue(e.target.value)
    }
    
    const handleSubmit=(e)=>{       //función que se activa al darle al enter
        e.preventDefault()
        if(inputValue.trim().length>2){
            setCategories(categ=>[ inputValue,...categ, ]);
            setInputValue('');    
        }
        

    }

    const handlevacio=()=>{     //función que se activa al darle click al input 
        setInputValue('');
    }
    return (
        <form onSubmit={handleSubmit}>

            <input 
                type='text'
                value={inputValue}
                onClick={handlevacio}
                onChange={handleInputChange}
                
            />
        </form>
    )
}

AddCategory.propTypes={     
    setCategories:PropTypes.func.isRequired     //Para que setCategories se tenga que usar si o sí
}