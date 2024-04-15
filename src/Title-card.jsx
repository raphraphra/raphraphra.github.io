function TitleCard(props){

    const image = (props.image != null) && <img src={props.image} alt="No image" />

    return (
        <section className="title-card">
            <p className="title">{props.title}</p>
            {props.content}
            {image}
        
            
        </section>
    );
}

TitleCard.defaultProps = {
    title : 'Error',
    content : ['Change it dumbass']
}

export default TitleCard;

