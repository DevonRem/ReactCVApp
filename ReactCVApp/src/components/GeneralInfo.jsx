//import { useState } from 'react'
import '../styles/GeneralInfo.css'


function GeneralInfo() {
//    const [inputs, setInputs] = useState({});

    return (
      <>
        <div className="GeneralInfo">
        <h2>General Information</h2>
           <form className='formName'>
                <div className='nameSection'>
                    <input type='text' className='firstName' placeholder='First Name' maxLength='15'/>
                    <input type='text' className='lastName' placeholder='Last Name' maxLength='15'/>
                </div>
                <div className='theRest'>
                    <input type='text' placeholder='Email' maxLength='80'/>
                    <input type='text' placeholder='Phone Number' maxLength='80'/>
                </div>
           </form>
        </div>
      </>
    )
  }
  
  export default GeneralInfo