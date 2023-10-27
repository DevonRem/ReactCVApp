import { useState } from 'react'
import '../styles/Education.css'
import './EducationForm'
import EducationForm from './EducationForm';

function Education() {
  const [list, setList] = useState([0]);
  

  let addEducation = (e) => {
    e.preventDefault();
    setList([...list,<list key={list.length}/>]);
  }

  let removeEducation = (e) => {
    e.preventDefault();
    const list2=[...list];
    list2.pop();
    setList(list2);
  }
    
    return(
        <>
        
          {list.map(id => <EducationForm key={id} />)}
 
         <button onClick={addEducation}>Add Education</button>
         <button onClick={removeEducation}>Remove Education</button>
         
        </>
    )


}

export default Education