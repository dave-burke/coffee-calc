import styled from 'styled-components'

const Fieldset = styled.fieldset`
  border-style: none;
`

function Slider(props) {
    return (
        <Fieldset className="is-flex">
          <label htmlFor={props.id} className="m-2">{props.label}</label>
          <input
            id={props.id} type="range"
            className="is-flex-grow-1"
            min={props.min} max={props.max}
            value={props.value} onChange={e => props.onChange(e.target.value)}/>
            <span className="m-2">{props.value}</span>
        </Fieldset>
    )
}

export default Slider