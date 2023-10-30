import { useState } from 'react'
import '../styles/Education.css'

function EducationFormWithTitle() {
    const [inputs, setInputs] = useState({
        schoolName: "",
        degree: "",
        startDate: "",
        endDate: ""
      });
  
      const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
  
        setInputs((prev) => {
          return {...prev, [name]: value}
        })
      }

    return(
        <>
        <div className='wholePage'>
            <div className="EducationLeftSide">
            <h2>Education</h2>
            <form className='formName'>
                <div className='wholeForm'>
                <div className='firstTwo'>
                        <input type='text' 
                        value={inputs.schoolName} 
                        onChange={handleChange} 
                        id='schoolName' 
                        name='schoolName'
                        className='schoolName' 
                        placeholder='School Name' 
                        maxLength='30'/>

                        <input type='text' 
                        value={inputs.degree} 
                        onChange={handleChange} 
                        id='degree'
                        name='degree' 
                        className='degree' 
                        placeholder='Degree' 
                        maxLength='30'/>
                </div>
                <div className='lastTwo'>
                        <p className='dateText'>Start Date:</p>
                        <input type='date'
                        value={inputs.startDate} 
                        onChange={handleChange}  
                        id='startDate' 
                        name='startDate' />

                        <p className='dateText'>End Date:</p>
                        <input type='date' 
                        value={inputs.endDate} 
                        onChange={handleChange} 
                        id='endDate'
                        name='endDate'  />
                </div>
                </div>

            </form>
        </div>

        <div className='CVRightSide'>
        <h1 className='educationRightSide'>Education</h1>
        <p className='rightsideDate'>{ inputs.startDate } - { inputs.endDate } | <b>{inputs.schoolName} </b></p>
        <p>{inputs.degree}</p>

        </div>

        </div>
    
        </>
    )

}

export default EducationFormWithTitle