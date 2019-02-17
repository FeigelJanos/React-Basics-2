import React from "react"

class App extends React.Component{
  
  constructor(){
   super()
   this.state=({
   count: 0
   })
  }
  
  ClickHandler(){
    
  }
  
  render(){
    return(
      <div>
         <h1>Push the Button</h1>
         <h2> Counter: {}</h2>
         <button onClick={ClickHandler}>Add to counter</button>
         
      </div>
    )
  }
  
}


export default App
