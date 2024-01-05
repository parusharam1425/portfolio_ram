import React, {useState} from 'react'
// import Image from '../Assects/Vector.png';

import '../Projects/index.css'

function Project({addProject}) {
    const [project, setProject] = useState({
        projectName: '',
    projectLink: '',
    description: '',
    })

    const handleInputChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
      };
      const handleAddProject = () => {
        // Assuming all fields are required for simplicity
        if (project.projectName && project.projectLink && project.description) {
          addProject(project);
          // Clear the form after adding the project
          setProject({
            projectName: '',
            projectLink: '',
            description: '',
          });
        } else {
          alert('Please fill in all fields');
        }
      };

  return (
    <div className='main-contaner'>
        <div className='row'>
            
                <h1>
                    Add Project
                    <hr className='hr'/>
                </h1>
            
            <div >
                <form className='d-flex flex-column align-items-center'>
                    <label>
                        Project Name
                    </label>
                    <input type='text'
                      name='projectName'
                      value={project.projectName}
                      onChange={handleInputChange}/>
                    <label>
                        Project Link
                    </label>
                    <input type='text'
                     name='projectLink'
                     value={project.projectLink}
                     onChange={handleInputChange}/>
                    <label>
                        Description
                    </label>
                    <textarea
            className=''
            name='description'
              placeholder='Enter your project description...'
              rows='4'
              value={project.description}
              onChange={handleInputChange}
          />
                </form>
            </div>
            <div className='d-flex flex-row justify-content-center'>

                    <button className='btn btn-primary' onClick={handleAddProject}>
                        Add
                    </button>
        </div>
            </div>
            {/* <img className='bottom_image' alt='logo' src={Image}/> */}

        </div>

  )
}

export default Project