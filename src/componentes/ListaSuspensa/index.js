import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
  
  const aoSelecionar = (evento) => {
    props.aoAlterar(evento.target.value)
  }

  return (
    <div className='Lista-suspensa'>
      <label>{props.label}</label>
      <select required={props.obrigatorio} value={props.valor} onChange={aoSelecionar}>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default ListaSuspensa