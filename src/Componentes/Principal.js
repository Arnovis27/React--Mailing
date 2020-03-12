import React from "react";

import "./Styles/style.css";
//Importando imagenes
import logoim from '../images/logo.png'
import galar from '../images/galar.jpg'
import pangoro from '../images/pangoro.jpg'
import battle from '../images/battle.jpg'

class Principal extends React.Component {
    render() {
        return ( 
        <body>
            <div className = "Principal" >
                <section className = "arriba" >
                    <div className = "centro" >
                        <img className = "logo" alt = "logo nintendo" src = { logoim }/> 
                    </div> 
                </section>

                <section className = "contenedor" >
                    <div className = "dentro" >
                        <hr className = "linea" />  
                        <h1 > Pokémon Espada y Escudo </h1> 
                        <p className = "argumento" > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut vehicula felis id tortor porta tincidunt. </p> 
                        <hr className = "linea" /> 
                    </div> 
                </section> 

                <section className="siguiente">
                    <div className= "parte1">
                        <img className= "icono1" alt="galar" src= {galar}/>
                        <h2>Nueva Region</h2>
                    </div>

                    <div className="parte2">
                        <img className= "icono1" alt="pangoro" src= {pangoro}/> 
                        <h2>Formas Dinamax</h2>  
                    </div>

                    <div className= "parte1">
                        <img className= "icono1" alt= "battle" src= {battle} />
                        <h2>Nuevos Sistemas de Combate</h2>
                    </div>
                </section>

                <section className="boton">
                    <div className= "esta">
                        <a className="boton2" href="https://www.nintendo.es/Juegos/Nintendo-Switch/Pokemon-Espada-1522111.html">Quiero Informacion</a>
                    </div>
                </section>

                <flooter>
                    <section className="final">
                        <p className="copy">Copyright 2019 - All Rigth Reserved</p>
                    </section>
                </flooter>

            </div>    
        </body>

        );
    }
}

export default Principal;