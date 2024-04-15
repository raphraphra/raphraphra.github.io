import PropTypes from 'prop-types'

function Interlude(props){

    return (
        <section className="interlude">
            {props.content}
            {props.subtitle}
        </section>
    )

}

Interlude.PropTypes = {
    content: PropTypes.string,
    subtitle: PropTypes.string
}

export default Interlude;