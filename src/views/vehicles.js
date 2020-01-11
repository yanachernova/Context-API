import React, { useEffect } from "react";
import { Context } from './../store/appContext';
import { Link} from 'react-router-dom';


const Vehicles = (props) => {
    /*  const {history, match} = props;
     console.log(match.params);
     console.log(history);
     useEffect(() => {
         history.push("/");
     }, []); */
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row">

                                {
                                    !!context.store.vehicles.results &&
                                    context.store.vehicles.results.map((item, i) => {
                                        return (
                                            <div key={i} className="col-md-4">
                                                <div className="card text-center text-white bg-dark m-2">
                                                    <img className="card-img-top" src="https://images.unsplash.com/photo-1578374173700-71fa7cbc4d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
                                                    <div className="card-block">
                                                        <h5>{item.name}</h5>
                                                        <p>Model:  {item.model}</p>
                                                        <Link onClick={() => context.actions.getKeyVehicles(i)} to="/aboutvehicles" className="btn btn-dark">Learn more</Link>                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                <div className="col-md-12 d-flex justify-content-between">
                                    <button className="btn btn-dark"
                                        onClick={() => context.actions.getVehicles(context.store.vehicles.previous)}
                                    >
                                        Previous
                                    </button>
                                    <button className="btn btn-dark"
                                        onClick={() => context.actions.getVehicles(context.store.vehicles.next)}
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
    );
}
/* class Services extends Component {
    componentDidMount(){
        const {history, match} = this.props;
        console.log(match.params);
        console.log(history);
        history.push("/")
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Services</h1>
                    </div>
                </div>
            </div>
        );
    }
} */
export default Vehicles;