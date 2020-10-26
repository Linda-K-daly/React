import React from 'react';
import CompB from './CompB'

class CompA extends React.Component {

    constructor() {
        super(),
            this.click = this.click.bind(this);

        this.state = {
            name: 'coucou',
            countries: []
        }
        
    }



    click() {
        this.setState.name = 'salut'
    }

    render() {

        <div>
            Je suis le composant A
            <CompB title={this.state.name}></CompB>
            <button onclick={this.props.click}></button>
        </div>
    }
}

export default CompA;


// ------------------------

import React from 'react';

class CompB extends React.Component {

    constructor() {
        super()
        this.state = {
            name: 'nihao'
        }
    }

    componentDidMount() {
        console.log('Je suis une méthode de cycle de vie appellé au mount')
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>{this.props.countries}</p>
            </div>
        )
    }
}

export default CompB;




