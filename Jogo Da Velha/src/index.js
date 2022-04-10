import React from 'react'
import {createRoot} from 'react-dom/client'
import Board from './componet/scripts/Board';
import H1 from './componet/scripts/H1';
import Logo from './componet/scripts/Logo';
import '../src/index.css';

class App extends React.Component{




    render(){
        return(

            <div className='conteiner'>
                {this.props.children}
                <div className='conteiner-title'>
                 <Logo/>                
                 <H1 name = 'Jogo Da Velha'/>
                </div>
                <div className='conteiner-board'>
                 <Board/>  
                </div>
                
                
            </div>
            
        )
    }
   
}

const elementRoot = document.getElementById('root');
const root = createRoot(elementRoot);
root.render(<App/>)