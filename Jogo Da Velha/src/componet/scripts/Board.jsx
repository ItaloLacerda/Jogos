import React from "react";
import Square from "./Square";
import H2 from "./H2";
import '../style/Board.css'


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : Array(9).fill('style'),
            xIsNext: true,
            

        }
    }

    
   changeSquare(i) {
    const square = this.state.name.slice();
   
    if(Winner(square)) {        
        return;
    }else {
        if (square[i] === 'style') {
            
            square[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
              name: square,
              xIsNext: !this.state.xIsNext,
              
              });
            
        } else {
            return;
        }
     }
    }



    render() {

        const winner = Winner(this.state.name);
        

        let status = '';

        if(winner) {
            status = winner;
        }
        
        return(
                <div>

                        <div className="board">
                            
                            <ul>
                                <Square className = {this.state.name[0]} name = {this.state.name[0]} onClick = {() => this.changeSquare(0)} />
                                <Square className = {this.state.name[1]} name = {this.state.name[1]} onClick = {() => this.changeSquare(1)} />
                                <Square className = {this.state.name[2]} name = {this.state.name[2]} onClick = {() => this.changeSquare(2)} />
                                
                            </ul>
                            <ul>
                                <Square className = {this.state.name[3]} name ={this.state.name[3]} onClick = {() => this.changeSquare(3)} />
                                <Square className = {this.state.name[4]} name ={this.state.name[4]} onClick = {() => this.changeSquare(4)} />
                                <Square className = {this.state.name[5]} name ={this.state.name[5]} onClick = {() => this.changeSquare(5)} />
                            </ul>
                            <ul>
                                <Square className = {this.state.name[6]} name ={this.state.name[6]} onClick = {() => this.changeSquare(6)} />
                                <Square className = {this.state.name[7]} name ={this.state.name[7]} onClick = {() => this.changeSquare(7)} />
                                <Square className = {this.state.name[8]} name ={this.state.name[8]} onClick = {() => this.changeSquare(8)} />
                            </ul>

                         </div>              
                     
                         <div className='info'>
                             <H2 name = {`Jogador: ${this.state.xIsNext ? 'X' : 'O'}`}/>
                             <H2 name = {`Campeão: ${status}`}/>
                        </div>
                </div>
                         
        )
    }

    
}

function Winner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
    if (squares[a] !== 'style' && squares[a] === squares[b] && squares[a] === squares[c]) {
            
        return (
            squares[a]
        )
      }
    }
    
    return null;
  }



export default Board;