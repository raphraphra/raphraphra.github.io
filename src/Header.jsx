function Header(props){

    return(
        <section className="header">
            <p className="header-title">{props.header}</p>
            {props.subtitle}
        </section>
    );

}

export default Header;