import {Alert,Form,Button, InputGroup, Stack} from 'react-bootstrap'
import {useState} from 'react';

import TarefaIndividual from '../comps/TarefaIndividual';

var aux;

const Page2 = () => {
  const [caixa,setCaixa] = useState("1");
  const [tarefas, setTarefas] = useState([]);
  const inputTarefa = document.getElementById('input-tarefa');

  function adicionarElemento(){
    let aleatorio = Math.floor(Math.random()*1000)
    let idUnico = aleatorio + aux;
    setTarefas([...tarefas,<TarefaIndividual key={idUnico}
    id={idUnico}
    deletar={deletarElemento} 
    texto={aux}/>]);
    
    inputTarefa.value = ''; //Apaga a caixa de texto quando o botao é clicado
  }

  function deletarElemento(value){
    setTarefas(() =>{ return tarefas.filter((tarefa) => tarefa.key !== value)})
    console.log(value)
  }

  

  return (
    <div>
        <Alert>
            <Alert.Heading>Tarefas</Alert.Heading>
            <Stack direction='horizontal' gap={2}>
                <Form.Control type='text' onChange={(event)=> aux = event.target.value} id='input-tarefa'/>
                <Button onClick={()=>adicionarElemento()}>+</Button>
            </Stack>
            <hr />
            {tarefas}
        </Alert>
    </div>
  )
}

export default Page2