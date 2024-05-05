import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Main from './components/main/Main'

export default function App() {

  useEffect(() => {
    Aos.init();
  }, [])
  return<>
   <Main />
  </>
}
