import ahia from '../../img/icons8-shopping-cart-96.png'
import reminisce from '../../img/icons8-thinking-bubble-96 (1).png'
import api from '../../img/icons8-module-100.png'
import bullabr from '../../img/icons8-trading-96 (1).png'
import link from '../../img/icons8-link.svg'
import './project.css'

import twitter from '../../img/twitterx.svg'
import github from '../../img/github.svg'
import youtube from '../../img/youtube.svg'
import linkedin from '../../img/linkedin.svg'

const Project = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="row flex-column-reverse">

            <h1 className="display-3 col-md-1 text-center">Projects</h1>
            <div className='d-flex col-md-11 justify-content-end'>
              <a className='px-3' href="mailto:joshuachinwendu@gmail.com"><img width="29" height="29" src="https://img.icons8.com/sf-regular/48/new-post.png" alt="new-post"/></a>
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

                <div className="d-flex">
                  <h2>Ahia</h2>
                  <div className='pt-1 px-4'>
                    <a className='px-2' href="https://github.com/joshualine"><img src={github} className="logo" alt="github" /></a>
                    <a className='' href="https://github.com/joshualine"><img src={link} className="logo" alt="link" width="28" height="28" /></a>
                  </div>
                </div>
                <p>Ahia is an e-commerce app built with Spring, Microservices architecture, Docker.</p>
                <div className="d-flex flex-wrap">
                  <p className='px-2' ><span className="badge" style={{ backgroundColor: '#3e2929' }}>Java</span></p>
                  <p className='px-2'><span className="badge text-bg-secondary">Spring Boot</span></p>
                  <p className='px-2'><span className="badge text-bg-secondary">Docker</span></p>
                </div>
              </div>
              <img src={ahia} className="project-pics col-md-2 mx-auto" alt="project" />
            </div>
          </div>
          <div className="col-md-10 p-3 mx-auto">
            <div className="h-100 p-2 bg-light border rounded-3 row">
              <div className="col-md-10">
                <div className="d-flex">
                  <h2>Reminisce</h2>
                  <div className='pt-1 px-4'>
                    <a className='px-2' href="https://github.com/joshualine"><img src={github} className="logo" alt="github" /></a>
                    <a className='' href="https://github.com/joshualine"><img src={link} className="logo" alt="link" width="28" height="28" /></a>
                  </div>
                </div>
                <p>Reminisce is an app that allows users reminsce about the past fun memories and share the wonderful stories with people. Users can share their stories and comment on other people &apos;s stories</p>
                <div className="d-flex flex-wrap">
                  <p className='px-2' ><span className="badge" style={{ backgroundColor: '#3e2929' }}>Java</span></p>
                  <p className='px-2'><span className="badge text-bg-secondary">Spring Boot</span></p>
                  <p className='px-2'><span className="badge text-bg-secondary">Docker</span></p>
                </div>
              </div>
              <img src={reminisce} className="project-pics col-md-2 mx-auto" alt="project" />
            </div>
          </div>
          <div className="col-md-10 p-3 mx-auto">
            <div className="h-100 p-2 bg-light border rounded-3 row">
              <div className="col-md-10">
                <div className="d-flex">
                  <h2>Job Portal</h2>
                  <div className='pt-1 px-4'>
                    <a className='px-2' href="https://github.com/joshualine"><img src={github} className="logo" alt="github" /></a>
                    <a className='' href="https://github.com/joshualine"><img src={link} className="logo" alt="link" width="28" height="28" /></a>
                  </div>
                </div>
                <p>Job-Portal is an application that enables job-seekers to register for viewing the jobs posted by employers as well as apply to them. The admin can post jobs, and receive applications for the job they posted. Built for ProOutsourcing ltd using Java Spring (Core, Boot, Data), ReactJS for the frontend and MongoDB.</p>
                <div className="d-flex flex-wrap">
                  <p className='px-2' ><span className="badge" style={{ backgroundColor: '#3e2929' }}>Java</span></p>
                  <p className='px-2'><span className="badge text-bg-secondary">Spring Boot</span></p>
                  <p className='px-2'><span className="badge text-bg-secondary">Netflix Eureka</span></p>
                  <p className='px-2'><span className="badge text-bg-secondary">Resilience4j</span></p>
                  <p className='px-2'><span className="badge text-bg-secondary">Docker</span></p>
                </div>
              </div>
              <img src={api} className="project-pics col-md-2 mx-auto" alt="project" />
            </div>
          </div>
          
          <div className="col-md-10 p-3 mx-auto">
            <div className="h-100 p-2 bg-light border rounded-3 row">
              <div className="col-md-10">
                <div className="d-flex">
                  <h2>Bullabr</h2>
                  <div className='pt-1 px-4'>
                    <a className='px-2' href="https://github.com/joshualine"><img src={github} className="logo" alt="github" /></a>
                    <a className='' href="https://github.com/joshualine"><img src={link} className="logo" alt="link" width="28" height="28" /></a>
                  </div>
                </div>
                <p>Bullabr is a stock summary app app built with Spring, Microservices architecture, Docker.</p>
                <div className="d-flex flex-wrap">
                  <p className='px-2' ><span className="badge" style={{ backgroundColor: '#3e2929' }}>Java</span></p>
                  <p className='px-2'><span className="badge text-bg-secondary">Spring Boot</span></p>
                  <p className='px-2'><span className="badge text-bg-secondary">Docker</span></p>
                  <p className='px-2'><span className="badge" style={{ backgroundColor: '#3e2929' }}>ReactJS</span></p>
                  <p className='px-2'><span className="badge text-bg-secondary">Spring Config</span></p>
                </div>
              </div>
              <img src={bullabr} className="project-pics col-md-2 mx-auto" alt="project" />
            </div>
          </div>
        </div>

        <hr />
      </div>

    </>
  )
}

export default Project