import { useState } from 'react'
import '../styles/Work.css'
import './WorkForm'
import WorkForm from './WorkForm';

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
        
          {list.map(id => <WorkForm key={id} />)}

         <button onClick={addWork}>Add Experience</button>
         <button onClick={removeWork}>Remove Experience</button>
         
        </>
    )


}

export default Education