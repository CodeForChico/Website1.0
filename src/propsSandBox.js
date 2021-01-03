import React from 'react';

// let i = 9;

class Board extends React.Component{
    //this is a funtion within Board that calls the Square Component
    rendersquare(i){
        return(
            <Square value={i}/>
        )
    }

    render(){

    //here the this.rendersqueare(i) is being called, and whatever is prop is passed as i shows up in the square
    return(
        <div>
            
            <div className="board-row">
                
                {this.rendersquare(0)}
                {this.rendersquare(1)}
                {this.rendersquare(2)}
            </div>

            <div className="board-row">
                {this.rendersquare(3)}
                {this.rendersquare(4)}
                {this.rendersquare(5)}
            </div>

            <div className="board-row">
                {this.rendersquare(6)}
                {this.rendersquare(7)}
                {this.rendersquare(8)}
            </div>
        </div>
        )
    }
}

class Square extends React.Component{
    render(){
        return(
            <button className="square" onClick={function() {alert('click') }}>
                {this.props.value}
            </button>
            
        )
    }
}

export default Board;