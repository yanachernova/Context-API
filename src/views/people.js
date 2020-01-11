import React, { useEffect } from "react";
import { Context } from './../store/appContext';
import { Link} from 'react-router-dom';

const People = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row">

                                {
                                    !!context.store.people.results &&
                                    context.store.people.results.map((item, i) => {
                                        return (
                                            <div key={i} className="col-md-4">
                                                <div className="card text-center text-white bg-dark m-2">
                                                    <img className="card-img-top" src="https://images.unsplash.com/photo-1546561892-65bf811416b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
                                                    <div className="card-block">
                                                        <h5>{item.name}</h5>
                                                        <p>Birth year {item.birth_year}</p>
                                                        <Link onClick ={() => context.actions.getKeyPeople(i)} to="/about" className="btn btn-dark">Learn more</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                <div className="col-md-12 d-flex justify-content-between">
                                    <button className="btn btn-dark"
                                        onClick={() => context.actions.getPeople(context.store.people.previous)}
                                    >
                                        Previous
                                    </button>
                                    <button className="btn btn-dark"
                                        onClick={() => context.actions.getPeople(context.store.people.next)}
                                    >
                                        Next
                                    </button>

                                </div>
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
export default People;