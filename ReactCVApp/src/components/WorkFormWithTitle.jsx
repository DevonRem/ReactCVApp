import { useState } from 'react'
import '../styles/Work.css'

function WorkFormWithTitle() {
    const [inputs, setInputs] = useState({
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
        description: ""
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
            <h2>Work Experience</h2>
            <form className='formName'>
                <div className='wholeForm'>
                <div className='firstTwo'>
                        <input type='text' 
                        value={inputs.companyName} 
                        onChange={handleChange} 
                        id='companyName' 
                        name='companyName'
                        className='companyName' 
                        placeholder='Company Name' 
                        maxLength='30'/>

                        <input type='text' 
                        value={inputs.position} 
                        onChange={handleChange} 
                        id='position'
                        name='position' 
                        className='position' 
                        placeholder='Position Title' 
                        maxLength='30'/>
                </div>
                <div className='dates'>
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
                <div className='description'>
                        <textarea type='text' 
                        value={inputs.description} 
                        onChange={handleChange} 
                        id='description'
                        name='description' 
                        className='description' 
                        placeholder='Main Tasks Description' />
                </div>

                </div>

            </form>
        </div>

        <div className='CVRightSide'>
        <h1 className='workRightSide'>Work Experience</h1>
        <p className='rightsideDate'>{ inputs.startDate } - { inputs.endDate } | <b>{inputs.companyName} </b></p>
        <p>{inputs.position}</p>
        <p>{inputs.description}</p>

        </div>

        </div>
    
        </>
    )

}

export default WorkFormWithTitle