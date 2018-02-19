import React, {Component} from 'react';
import axios from 'axios';

class SmurfForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: 'german',
            age: 23,
            height: 1,

        };
        this.addSmurf = this.addSmurf.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateAge = this.updateAge.bind(this);
        this.updateHeight = this.updateHeight.bind(this);
    }

    addSmurf(event) {
        event.preventDefault();

        axios
            .post('http://localhost:3333/smurfs', this.state)
            .then(response => {
                console.log('response from post', response);
                // console.log('check prosp to see if has onCreation', response.data);
                this.props.onCreation(response.data);
            })
            .catch(error => {
                console.error('error saving the data');
            });
    }

    updateName(event) {
        this.setState({
            name: event.target.value
        });
    }

    updateAge(event) {
        this.setState({
            age: event.target.value
        });
    }

    updateHeight(event) {
        this.setState({
            height: event.target.value
        });
    }

    render() {
        return (
            <div className="SmurfForm">
                <h1>Add New Smurf </h1>
                <form onSubmit={this.addSmurf}>
                    <input
                        onChange={this.updateName}
                        placeholder="name"
                        value={this.state.name}
                    />
                    <input
                        onChange={this.updateAge}
                        placeholder="age"
                        value={this.state.age}
                    />
                    <input
                        onChange={this.updateHeight}
                        placeholder="height"
                        value={this.state.height}
                    />


                    <button type="submit">Add to the village</button>
                </form>
            </div>
        );
    }
}

export default SmurfForm;