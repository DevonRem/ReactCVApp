import { useState } from 'react'
import '../styles/GeneralInfo.css'


function GeneralInfo() {
    const [inputs, setInputs] = useState({
      firstName: "",
      lastName: "",
      Email: "",
      phoneNumber: ""
    });

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setInputs((prev) => {
        return {...prev, [name]: value}
      })
    }

    return (
      <>
      <div className='wholePage'>
        <div className="GeneralInfoLeftSide">
        <h2>General Information</h2>
           <form className='formName'>
                <div className='nameSection'>

                    <input type='text' 
                    value={inputs.firstName} 
                    onChange={handleChange} 
                    required 
                    id='firstName' 
                    name='firstName'
                    className='firstName' 
                    placeholder='First Name' 
                    maxLength='15'/>

                    <input type='text' 
                    value={inputs.lastName} 
                    onChange={handleChange} 
                    required 
                    id='lastName'
                    name='lastName' 
                    className='lastName' 
                    placeholder='Last Name' 
                    maxLength='15'/>

                </div>
                <div className='theRest'>
                    <input type='email'
                    value={inputs.Email} 
                    onChange={handleChange}  
                    required id='Email' 
                    name='Email' 
                    placeholder='Email' 
                    maxLength='80'/>

                    <input type='tel' 
                    value={inputs.phoneNumber} 
                    onChange={handleChange} 
                    required id='phoneNumber'
                    name='phoneNumber'  
                    placeholder='Phone Number' 
                    maxLength='80'/>
                </div>
           </form>
        </div>
        <div className='CVHeaderRightSide'>        
        <h2>{ inputs.firstName } { inputs.lastName }</h2>
        <p>{ inputs.Email } { inputs.phoneNumber }</p>
        <p>________________________________________</p>
        </div>
        </div>
      </>
    )
  }
  
  export default GeneralInfo