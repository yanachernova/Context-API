import React, { useEffect } from "react";
import { Context } from './../store/appContext';
import { Link} from 'react-router-dom';

const AboutPlanets = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row">

                                {
                                    !!context.store.planets.results &&
                                    context.store.planets.results.map((item, i) => {
                                        if(i === context.store.planetsKey)
                                        {
                                        return (
                                                <div key={i} className="card text-center text-white bg-dark m-2">
                                                    <img className="card-img-top" src="https://images.unsplash.com/photo-1505580064377-8b7a8bf554c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
                                                    <div className="card-block">
                                                        <h5>{item.name}</h5>
                                                        <p>Rotation period: {item.rotation_period}</p>
                                                        <p>Orbital perion: {item.orbital_period}</p>
                                                        <p>Diameter: {item.diameter}</p>
                                                        <p>Climate: {item.climate}</p>
                                                        <p>Gravity: {item.gravity}</p>
                                                        <p>Terrain: {item.terrain}</p>
                                                        <p>Surface wather: {item.surface_water}</p>
                                                        <p>Population: {item.population}</p>
                                                        <p>Residents: {item.residents}</p>
                                                    </div>
                                                </div>
                                        )
                                        }
                                    })
                                }

                                {/*  <div className="row">
                                    <div className="col-md-12">
                                        <h1>Home</h1>
                                        <ul>
                                            {
                                                context.store.todos.map((item, i) => {
                                                    return <li key={i}>{item}</li>
                                                })
                                            }
                                        </ul>
                                        <p>{context.store.name}</p>
                                        <input onChange={(e) => context.actions.setName(e)} placeholder="setName" />
                                        <button onClick={() => context.actions.addTask("I am the task " + parseInt(context.store.todos.length + 1))}>+ add</button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    )
                }
            }
        </Context.Consumer>
    )
}
export default AboutPlanets;