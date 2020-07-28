import React,{Component} from 'react';
let response = [
    { 
    name: 'Space Kirby', 
    url: 'https://kaychou1.github.io/Space-Kirby/',
    description: 'Project description 1',
    imgUrl: 'https://data.whicdn.com/images/292689451/original.gif', 
    techUsed: ['JavaScript', 'html' ],
    },
    
    { 
    name: 'Calculator', 
    url: 'https://kaychou1.github.io/calculatorProject/',
    description: 'Project description 2',
    imgUrl: 'project2.com', 
    techUsed: ['JavaScript', 'html' ], 
    },
    
    { 
    name: 'Movie Fetch', 
    url: 'https://kaychou1.github.io/IMDB-Movie-Fetch/',
    description: 'Project description 1',
    imgUrl: 'project3.com', 
    techUsed: ['JavaScript', 'html' ],
    },
    
    { 
    name: 'Sneaker API', 
    url: 'https://kaychou1.github.io/Lakai-sneaker-API/',
    description: 'Project description 2',
    imgUrl: 'project4.com', 
    techUsed: ['JavaScript', 'html' ], 
    },
    
    {
    name: 'Movie API', 
    url: 'https://kaychou1.github.io/Movie-API/',
    description: 'Project description 2',
    imgUrl: 'project4.com', 
    techUsed: ['JavaScript', 'html' ], 
    }

]
   

class Projects extends Component {
  state = {


    }
        getAllProjects(){
        //   fetch goes here in the future
        let allProjects = []; 
        for (let i = 0; i < response.length; i++){
          allProjects.push(
                <div className= "projectCard">
                <h1>{response[i].name}</h1>
                <h1>{response[i].description}</h1>
                <img src ={response[i].imgUrl} height="100" alt={response[1].name}/>                
                <p>Tech: {response[i].techUsed.join(' , ')}</p>


          </div>)
          
      }
      return allProjects
  }

    render() {
        return(
            <div className="container">
            {this.getAllProjects}

            </div>
          
        )

    }

}

export default Projects;