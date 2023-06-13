export default function Titulo(props){
    
    return (
        <h1 style={{color:props.cor}}>
            {props.children}
        </h1>
    )
}