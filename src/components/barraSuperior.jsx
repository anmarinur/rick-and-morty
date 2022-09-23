import React from "react";



class BarraSuperior extends React.Component{

    render(){
        return(<div className="barra__superior">
            <nav className="navegacion">
                <a href="#top">About</a>
                <a href="#top">Personajes</a>
            </nav>
        </div>)
    }
}

export default BarraSuperior;