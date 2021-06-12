import React from 'react';


import './aboutme.styles.scss';



import Education from '../../components/education/education.component';
import Footer from '../../components/footer/footer.component';



class AboutMePage extends React.Component {

    constructor() { 
        super();
        this.state = {
            education: [
                {
                    id:1,
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Georgia_Tech_seal.svg/1024px-Georgia_Tech_seal.svg.png",
                    name: "Georgia Institute of Technology",
                    degree: "Master of Science",
                    major: "Computer Science",
                    specialization: "Machine Learning",
                    grad: "N/A"
                },
                {
                    id:2,
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Seal_of_the_University_of_Michigan.svg/1024px-Seal_of_the_University_of_Michigan.svg.png",
                    name: "University of Michigan",
                    degree: "Bachelor's of Science in Engineering",
                    major: "Computer Science",
                    specialization: "N/A",
                    grad: "May 2021"
                }
            ]
        }
    }

    render() {
        const schools = this.state.education;
        return(
    <div className = 'summary' >
        <div className='section' id='aboutme'>
            <div className='content'>
        <h1>About me</h1>
            <div className='section-text'>
        
        <p>
            I'll be attending Georgia Tech this fall to pursue my masters in Computer Science with a specialization in machine learning or potentially within interactive computing. 
        </p>
        <br/>
        <p>
            I recently graduated from the University of Michigan - College of Engineering with a BSE in Computer Science. 
        </p>
        <br/>
        <p>
            This summer, I'll be interning at Amazon as an SDE 1 Intern based in Seattle. 
        </p>
        
        </div>
        </div>
        </div>


        <div className = 'section' id='interests'>
            <div className='content'>
        <h1> My interests</h1>
            <div className='section-text'>
        
        <p>
            Within computer science, I'm primarily interested in machine learning - particularly natural language understanding/processing. I have experience working with a variety of frameworks such as TensorFlow, PyTorch, NumPy, Scikit-Learn, and Pandas. The majority of my work in this space comes from coursework and a few personal projects. As of right now, I'm running myself up to speed with RNNs.
        </p>
        <br/>
        <p>
            I also enjoy full-stack development due to both creating visually appealing projects as well as seeing my changes immediatly propagate throughout my project. I enjoy using React and Angular for the front-end of my projects. Currently, I'm working on a Vue based web-application to gain more exposure to the framework. 
        </p>
        <br/>

        <p> 
            Outside of computer science and academia, my biggest hobby would definitely be sneaker collecting and reselling. I started this "side business" in high school and have sold over $30,000 in sneakers. 
        </p>
        </div>
        </div>
        </div>


        
        <div className = 'education-total' id = 'education'>
        <div className='content'>
        <h1>Education</h1>
            <div className='section-text'> 
       
        <div className='education-container'>
            
            {schools.map( ({id,...schoolProps}) => (
                <Education key={id} {...schoolProps}></Education>
            ))}
        </div>
        </div>
        </div>
        </div>
        
        <Footer/>
        </div>
        
    
        )
    }

}; //endClass

export default AboutMePage;