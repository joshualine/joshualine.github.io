import ahia from '../../img/icons8-shopping-cart-96.png'
import reminisce from '../../img/icons8-thinking-bubble-96 (1).png'
import api from '../../img/icons8-module-100.png'
import bullabr from '../../img/icons8-trading-96 (1).png'
import './project.css'

import twitter from '../../img/twitterx.svg'
import github from '../../img/github.svg'
import youtube from '../../img/youtube.svg'
import linkedin from '../../img/linkedin.svg'
import mail from '../../img/icons8-mailbox.svg'

const Project = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row flex-column-reverse">

            <h1 className="display-3 col-md-1 text-center">Projects</h1>
            <div className='d-flex col-md-11 justify-content-end'>
              <a className='px-3' href="mailto:joshuachinwendu@gmail.com"><img src={mail} className="logo" alt="mail" /></a>
              <a className='px-3' href="https://www.linkedin.com/in/joshchinwendu/"><img src={linkedin} className="logo" alt="linkedin" /></a>
              <a className='px-3' href="https://github.com/joshualine"><img src={github} className="logo" alt="github" /></a>
              <a className='px-3' href="https://x.com/joshchinwendu"><img src={twitter} className="logo" alt="x.com" /></a>
              <a className='px-3' href="https://youtube.com/@joshchinwendu"><img src={youtube} className="logo" alt="youtube" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-md-stretch">
          <div className="col-md-10 p-3 mx-auto">
            <div className="h-100 p-2 bg-light border rounded-3 row">
              <div className="col-md-10">
                <h2>Ahia</h2>
                <p>Ahia is an e-commerce app built with Spring, Microservices architecture, Docker.</p>
              </div>
              <img src={ahia} className="project-pics col-md-2 mx-auto" alt="project" />
            </div>
          </div>
          <div className="col-md-10 p-3 mx-auto">
            <div className="h-100 p-2 bg-light border rounded-3 row">
              <div className="col-md-10">
                <h2>Reminisce</h2>
                <p>Reminisce is an app that allows users reminsce about the past fun memories and share the wonderful stories with people. Users can share their stories and comment on other people &apos;s stories</p>
              </div>
              <img src={reminisce} className="project-pics col-md-2 mx-auto" alt="project" />
            </div>
          </div>
          <div className="col-md-10 p-3 mx-auto">
            <div className="h-100 p-2 bg-light border rounded-3 row">
              <div className="col-md-10">
                <h2>Job portal</h2>
                <p>Job-Portal is an application that enables job-seekers to register for viewing the jobs posted by employers as well as apply to them. The admin can post jobs, and receive applications for the job they posted. Built for ProOutsourcing ltd using Java Spring (Core, Boot, Data), ReactJS for the frontend and MongoDB.</p>
              </div>
              <img src={api} className="project-pics col-md-2 mx-auto" alt="project" />
            </div>
          </div>
          <div className="col-md-10 p-3 mx-auto">
            <div className="h-100 p-2 bg-light border rounded-3 row">
              <div className="col-md-10">
                <h2>Bullabr</h2>
                <p>Bullabr is a stock summary app app built with Spring, Microservices architecture, Docker.</p>
              </div>
              <img src={bullabr} className="project-pics col-md-2 mx-auto" alt="project" />
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          <p>&copy; 2024 Joshua Chinwendu - All Rights Reserved.</p>
        </footer>
      </div>

    </>
  )
}

export default Project