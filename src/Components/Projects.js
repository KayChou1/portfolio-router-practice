import React,{Component} from 'react';

class Projects extends Component {
  constructor(props){
      super(props)
      this.state={}
  }
 
   componentDidMount()  {
       fetch('http://34.237.91.47:3030/projects')
       .then(res => res.json())
       .then(res =>this.setState({data:res}))
   };


    getAllProjects(){
        let response = this.state.data
        if(response){
       console.log(response)
        let allProjects = []; 
        for (let i = 0; i < response.length; i++){
          console.log(response[i])
          allProjects.push(
                <div className= "projectCard" key ={i}>
                <h1>{response[i].name}</h1>
                <h1>{response[i].description}</h1>
                <img src ={response[i].imageurl} height="100" alt={response[i].name}/>                
                <p> Tech: {response[i].techused}</p>
                
            


                </div>)
        }   
      return allProjects
    }
  }

    render() {
        return(
            <div className="container">
            {this.getAllProjects()}
            </div>
          
        )

    }

}

export default Projects;