import twitter from '../../img/twitterx.svg'
import github from '../../img/github.svg'
import youtube from '../../img/youtube.svg'
import linkedin from '../../img/linkedin.svg'
import mail from '../../img/icons8-mailbox.svg'

const Blog = () => {
  return (
    <>

      <div className="jumbotron">
        <div className="container">
          <div className="row flex-column-reverse">

            <h1 className="display-3 col-md-1 text-center">Blogs</h1>
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

      <div className="container p-4">
        <div className="row align-items-md-stretch">
          <div className="col-md-6 p-3">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2 style={{ color: '#3e2929' }}>How to Dockerize your Application</h2>
              <button className="btn btn-outline-secondary" type="button">Read</button>
            </div>
          </div>
          <div className="col-md-6 p-3">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2 style={{ color: '#3e2929' }}>Building Scalable Microservice</h2>
              <button className="btn btn-outline-secondary" type="button">Read</button>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default Blog