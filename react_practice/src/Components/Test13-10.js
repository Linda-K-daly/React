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
                <button onClick={this.click}>Button</button>
        let newList = this.state.list.map((elem) => {

            return (
                   <p>{this.state.list[0]}</p>
                   <p>{this.state.list[1]}</p>
                   <p>{this.state.list[2]}</p>
                   <p>{this.state.list[3]}</p>
                   <p>{this.state.list[4]}</p>
            
        })
            </div>
        )
    }
​
}
​
export default Quiz