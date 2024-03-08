import './hero.css'
// import viteLogo from '/vite.svg'
import josh from '../../img/josh_portrait.jpg'

import twitter from '../../img/twitterx.svg'
import github from '../../img/github.svg'
import youtube from '../../img/youtube.svg'
import linkedin from '../../img/linkedin.svg'
import mail from '../../img/icons8-mailbox.svg'

const Hero = () => {
  return (
    <>

      {/* <!-- Main jumbotron for a primary marketing message or call to action --> */}
      <div className="jumbotron">
        <div className="container ">

          <h1 className="display-3 d-flex justify-content-center"><img src={josh} className="display-pics" alt="Joshua Chinwendu" /></h1>
          <h1 className="display-3 d-flex justify-content-center">Joshua Chinwendu</h1>
          <h4 className='text-center' style={{ color: '#3e2929' }}>A Software Developer with specialty in building highly performant applications that solve real-world problems.</h4>
        </div>
      </div>

      <div className="container">

        {/* <!-- Example row of columns --> */}
        <div className="row justify-content-center">
          <div className="col-md-5">
            <h2 >About Me</h2>
            <p className=''>I am a passionate and results-oriented Backend Engineer with 3 years of experience designing, developing, and maintaining large-scale, distributed systems using microservices architectures. I possess strong expertise in Java Spring (including Core, Boot, Data, Cloud, and MVC), containerization technologies like Docker, and various monitoring and visualization tools like ELK Stack and Grafana.

              

              </p>

              <p className="">
              My experience extends to distributed messaging systems like Kafka and RabbitMQ, allowing me to build efficient and scalable communication pipelines. Additionally, I am proficient in various relational and non-relational databases (MySQL, PostgreSQL, MongoDB) and cloud platforms (AWS, Azure) for robust data storage and management. I am also well-versed in serverless architectures, service discovery (Netflix Eureka), API gateways (Netflix Zuul), and service mesh (Istio) technologies for building highly scalable and resilient applications.
              </p>

              <p className="">
              Beyond technical skills, I am a strong team player with excellent communication and problem-solving abilities. I am constantly learning and evolving, keeping myself updated with the latest trends and technologies in the backend development landscape. I am eager to leverage my skills and experience to contribute to the development of innovative and impactful software solutions.
              </p>
          </div>
          <div className="col-md-1">
            <h2>Contact</h2>
            <div className="">
              <h2><img src={mail} className="logo" alt="mail" /></h2>
              <h2><img src={linkedin} className="logo" alt="linkedin" /></h2>
              <h2><img src={github} className="logo" alt="github" /></h2>
              <h2><img src={twitter} className="logo" alt="x.com" /></h2>
              <h2><img src={youtube} className="logo" alt="youtube" /></h2>
            </div>
          </div>
        </div>

        <hr />

      </div>

      <footer className="container">
        <p>&copy; 2024 Joshua Chinwendu - All Rights Reserved.</p>
      </footer>

    </>
  )
}

export default Hero