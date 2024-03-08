import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css'
import Navbar from './components/navbar/Header';
import Hero from './components/hero/Hero';
import Project from './components/project/Project';
import Blog from './components/blog/Blog';

function App() {

  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      {/* <Project /> */}
      <Blog />
    </>
  )
}

export default App
