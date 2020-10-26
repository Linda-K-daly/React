import React from 'react';
​
class Quizz extends React.Component {
​
    
    constructor() {
        super();
        this.click = this.click.bind(this);
​
        this.state = {
            list: []
        }
    }
​
    componentDidMount() {
        this.setState({
            list: [1,2,3,4]
        })
    }
​
    click() {
        console.log('Je suis clické');
        return list.push('989')
        // il faut que je rajoute un element à ma list
    }
    render() {
        return (
            <div>
                {/* afficher dans une balise p tout les element de la list}*/}
                <button onClick={this.click}>Button</button>
                <p>{this.state.list.join}</p>
            </div>
        )
    }
​
}
​
export default Quiz