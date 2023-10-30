import { useState } from 'react'
import '../styles/Work.css'
import './WorkForm'
import WorkForm from './WorkForm';
import WorkFormWithTitle from './WorkFormWithTitle';

function Education() {
  const [list, setList] = useState([0]);
  

  let addWork = (e) => {
    e.preventDefault();
    setList([...list,<list key={list.length}/>]);

  }

  let removeWork = (e) => {
    e.preventDefault();
    const list2=[...list];
    list2.pop();
    setList(list2);
  }
    
    return(
        <>
          <WorkFormWithTitle></WorkFormWithTitle>
          {list.map(id => <WorkForm key={id} />)}

         <button className='addRemoveButtons' onClick={addWork}>Add Experience</button>
         <button className='addRemoveButtons' onClick={removeWork}>Remove Experience</button>
         
        </>
    )


}

export default Education