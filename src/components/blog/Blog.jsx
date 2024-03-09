import './blog.css'

import twitter from '../../img/twitterx.svg'
import github from '../../img/github.svg'
import youtube from '../../img/youtube.svg'
import linkedin from '../../img/linkedin.svg'

const Blog = () => {
  return (
    <>

      <div className="jumbotron">
        <div className="container">
          <div className="row flex-column-reverse">

            <h1 className="display-3 col-md-1 text-center">Blogs</h1>
            <div className='d-flex col-md-11 justify-content-end'>
              <a className='px-3' href="mailto:joshuachinwendu@gmail.com"><img width="29" height="29" src="https://img.icons8.com/sf-regular/48/new-post.png" alt="new-post" /></a>
              <a className='px-3' href="https://www.linkedin.com/in/joshchinwendu/"><img src={linkedin} className="logo" alt="linkedin" /></a>
              <a className='px-3' href="https://github.com/joshualine"><img src={github} className="logo" alt="github" /></a>
              <a className='px-3' href="https://x.com/joshchinwendu"><img src={twitter} className="logo" alt="x.com" /></a>
              <a className='px-3' href="https://youtube.com/@joshchinwendu"><img src={youtube} className="logo" alt="youtube" /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-4">
        <div className="row align-items-md-stretch">


          <div className="col-md-6 p-3">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2 style={{ color: '#3e2929' }}>Understanding Cloud Computing: Introduction for Beginners</h2>
              <a href="https://joshdev.hashnode.dev/understanding-cloud-computing-introduction-for-beginners">
                <button className="btn btn-outline-secondary button" type="button">Read</button>
              </a>
            </div>
          </div>

          <div className="col-md-6 p-3">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2 style={{ color: '#3e2929' }}>The Essentiality of Reading API Documentations for Software Developers</h2>
              <a href="https://www.linkedin.com/pulse/essentiality-reading-api-documentations-software-joshua-chinwendu/?trackingId=SJfrkvlMR4CzzlZ079UIDw%3D%3D">
                <button className="btn btn-outline-secondary button" type="button">Read</button>
              </a>
            </div>
          </div>

          <div className="col-md-6 p-3">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2 style={{ color: '#3e2929' }}>Getting Started with AWS</h2>
              <a href="https://joshdev.hashnode.dev/getting-started-with-aws">
                <button className="btn btn-outline-secondary button" type="button">Read</button>
              </a>
            </div>
          </div>

          <div className="col-md-6 p-3">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2 style={{ color: '#3e2929' }}>My Little Coding Journey and Lessons I&apos;ve Learnt So Far</h2>
              <a href="https://dev.to/joshualine/my-little-coding-journey-and-lessons-ive-learnt-f9g">
                <button className="btn btn-outline-secondary button" type="button">Read</button>
              </a>
            </div>
          </div>

          <div className="col-md-6 p-3">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2 style={{ color: '#3e2929' }}>Building Scalable Microservice</h2>
              <a href="#">
                <button className="btn btn-outline-secondary button" type="button">Read</button>
              </a>
            </div>
          </div>

          <div className="col-md-6 p-3">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2 style={{ color: '#3e2929' }}>Now It Begins - My Coding Journey</h2>
              <a href="https://dev.to/joshualine/now-it-begins-an0">
                <button className="btn btn-outline-secondary button" type="button">Read</button>
              </a>
            </div>
          </div>
        </div>


        <hr />
      </div>
    </>
  )
}

export default Blog