
import React,{Component} from 'react'

export default class ClassComponent extends Component {

    constructor(props){
        super(props)
        this.state={counter:0}

    }

    arttir=()=>{
        console.log(this)
        this.setState({counter:this.state.counter+1})
    }
    azalt=()=>{
        console.log(this)
        this.setState({counter:this.state.counter-1})
        this.azalt=this.azalt.bind(this)
    }


  render() {
    return (
        <div>
       <h1>Class Component</h1> 
       <p>Counter:{this.state.counter}</p>
       <button className='btn btn-secondary mx-2' onClick={this.arttir} >Arttır</button>
       
       {/* <button className='btn btn-secondary mx-2' onClick={this.arttir.bind(this)} >Arttır</button> */}

       {/* Fonksyionda bind işlemi yapma yöntemi */}
       <button className='btn btn-secondary' onClick={this.azalt} >Azalt</button>
        </div>
    )
  }
  
  
}

// export default ClassComponent