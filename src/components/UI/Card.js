import './Card.css'

// Arrow function based component.
// Works 100% same as normal function based component.
const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card;