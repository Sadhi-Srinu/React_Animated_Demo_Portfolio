
import Navbar from '../navbar/Navbar'
import Skills from '../skills/Skills'
import Home from '../home/Home'
import Exprience from '../exprience/Exprience'
import Projects from '../project/Projects'
import Contact from '../contact/Contact'
// import './Main.css'


export default function Main() {
  

  return <>
  <Navbar/>
  <div className='container'>
  <Home/>
  <Exprience/>
  <Skills/>
  <Projects/>
  <Contact />
  </div>
  </>
}
