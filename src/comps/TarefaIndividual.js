import {useState} from 'react'
import { Alert , Button} from 'react-bootstrap';


const TarefaIndividual = ({texto,id, deletar}) => {
    const [complete,setComplete] = useState(false)
  return (
    <div>
        <Alert variant={complete?'success':'danger'} key={id}>
            <Alert.Heading><span style={{textDecoration: complete?'line-through':'none'}}>{texto}</span></Alert.Heading>
            <hr />
            <Button onClick={()=>setComplete(!complete)}>✓</Button>
            <Button onClick={()=>deletar(id)}>X</Button>
        </Alert>
    </div>
  )
}

export default TarefaIndividual