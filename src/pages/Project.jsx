import project1 from "../components/images/project1.png"
import project2 from "../components/images/project2.png"
import project3 from "../components/images/project3.png"
import project4 from "../components/images/project4.png"
import project5 from "../components/images/project5.png"
import project6 from "../components/images/project6.png"
import project7 from "../components/images/project7.png"


function Project() {
    return (
        <section id="project">
            <h2 className="project_heading">My Projects</h2>
            <div className="project_container">
                <div className="projects-box">
                    <img src={project1} alt="Project 1" className="project-image" />
                    <h3 className="project-title">Portfolio Website</h3>
                    <p className="project-description">A personal portfolio site built using React and CSS.</p>
                    <div className="button-group">
                    <a href="https://portfolio-five-flax-86.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">
                        Visit Site
                    </a>
                    <a href="https://github.com/notmarga/portfolio" target="_blank" rel="noopener noreferrer" className="btn">
                        See Code
                    </a>
                    </div>
                </div>


                <div className="projects-box">
                    <img src={project2} alt="Project 1" className="project-image" />
                    <h3 className="project-title">API Search Project</h3>
                    <p className="project-description">Advanced API that fetches books with search bar and pagination.</p>
                    <div className="button-group">
                    <a href="https://pelec202-q2-api-search.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">
                        View Site
                    </a>
                    <a href="https://github.com/notmarga/Pelec202_Q2-API_search" target="_blank" rel="noopener noreferrer" className="btn">
                        See Code
                    </a>
                    </div>
                </div>


                <div className="projects-box">
                    <img src={project3} alt="Project 1" className="project-image" />
                    <h3 className="project-title">State Management</h3>
                    <p className="project-description">State Management and Redux Basics.</p>
                    <div className="button-group">
                    <a href="https://state-management-vo2x.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">
                        View Site
                    </a>
                    <a href="https://github.com/notmarga/State-management" target="_blank" rel="noopener noreferrer" className="btn">
                        See Code
                    </a>
                    </div>
                </div>


                <div className="projects-box">
                    <img src={project4} alt="Project 1" className="project-image" />
                    <h3 className="project-title">Responsive Portfolio website</h3>
                    <p className="project-description">Responsive One-Page Portfolio Website Using HTML and CSS.</p>
                    <div className="button-group">
                    <a href="https://notmarga.github.io/Final_hands_on/Final_exam.html" target="_blank" rel="noopener noreferrer" className="btn">
                        View Site
                    </a>
                    <a href="https://notmarga.github.io/Final_hands_on/Final_exam.html" target="_blank" rel="noopener noreferrer" className="btn">
                        See Code
                    </a>
                    </div>
                </div>


                <div className="projects-box">
                    <img src={project5} alt="Project 1" className="project-image" />
                    <h3 className="project-title">Responsive Webpage using Media Query</h3>
                    <p className="project-description">Responsive Webpage using HTML and CSS and Media Query.</p>
                    <div className="button-group">
                    <a href="https://notmarga.github.io/Assignment-1/Assignmet1.html" target="_blank" rel="noopener noreferrer" className="btn">
                        View Site
                    </a>
                    <a href="https://github.com/notmarga/Assignment-1" target="_blank" rel="noopener noreferrer" className="btn">
                        See Code
                    </a>
                    </div>
                </div>


                <div className="projects-box">
                    <img src={project6} alt="Project 1" className="project-image" />
                    <h3 className="project-title">Responsive Navbar & Cards</h3>
                    <p className="project-description">Responsive navbar & cards about Myself using Media Query .</p>
                    <div className="button-group">
                    <a href="https://notmarga.github.io/Assignment2/Assignment2.html" target="_blank" rel="noopener noreferrer" className="btn">
                        View Site
                    </a>
                    <a href="https://github.com/notmarga/Assignment2" target="_blank" rel="noopener noreferrer" className="btn">
                        See Code
                    </a>
                    </div>
                </div>


                <div className="projects-box">
                    <img src={project7} alt="Project 1" className="project-image" />
                    <h3 className="project-title">Enrollment Form</h3>
                    <p className="project-description">STUDENT ENROLLMENT FORM using HTML and CSS.</p>
                    <div className="button-group">
                    <a href="https://notmarga.github.io/enrollmentform/enrollment_form" target="_blank" rel="noopener noreferrer" className="btn">
                        View Site
                    </a>
                    <a href="https://github.com/notmarga/student_enrollment_form" target="_blank" rel="noopener noreferrer" className="btn">
                        See Code
                    </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Project;