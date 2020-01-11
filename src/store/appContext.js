import React from 'react';
export const Context = React.createContext(null);
export class ContextWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            store: {
                todos: ["Make the bed", "Take out the trash"],
                name: "Yana",
                people: {},
                planets: {},
                vehicles: {},
                peopleKey: "",
                planetsKey: "",
                vehiclesKey: "",
            },
            actions: {
                addTask: title => {
                    this.setState({
                        store: Object.assign(
                            this.state.store,
                            { todos: this.state.store.todos.concat(title) }
                        )
                    })
                },
                setName: e => {
                    this.setState({
                        store: Object.assign(
                            this.state.store,
                            { name: e.target.value }
                        )
                    });
                },

                getKeyPeople: a => {
                    this.setState({
                        store: Object.assign(
                            this.state.store,
                            { peopleKey: a }
                        )
                    })
                    
                },

                getKeyPlanets: b => {
                    this.setState({
                        store: Object.assign(
                            this.state.store,
                            { planetsKey: b }
                        )
                    })
                    
                },
                getKeyVehicles: b => {
                    this.setState({
                        store: Object.assign(
                            this.state.store,
                            { vehiclesKey: b }
                        )
                    })
                    
                },

                getPeople: url => {
                    fetch(url)
                        .then(resp => resp.json())
                        .then(data => {
                            console.log(data);
                            this.setState({
                                store: Object.assign(
                                    this.state.store,
                                    { people: data }

                                )
                            });
                        });
                },
                getPlanets: url => {
                    fetch(url)
                        .then(resp => resp.json())
                        .then(data => {
                            console.log(data);
                            this.setState({
                                store: Object.assign(
                                    this.state.store,
                                    { planets: data }
                                )
                            });
                        });
                },
                getVehicles: url => {
                    fetch(url)
                        .then(resp => resp.json())
                        .then(data => {
                            console.log(data);
                            this.setState({
                                store: Object.assign(
                                    this.state.store,
                                    { vehicles: data }
                                )
                            });
                        });
                }

            }
        };
    }

    componentDidMount() {
        this.state.actions.getPeople("https://swapi.co/api/people/");
        this.state.actions.getPlanets("https://swapi.co/api/planets/");
        this.state.actions.getVehicles("https://swapi.co/api/vehicles/");

    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}