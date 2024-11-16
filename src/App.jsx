import { useState } from 'react'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='mn'>
        <section className='vw-prt'>
          <div className="profile-pic-cnt">
            <div className="profile-pic"></div>
          </div>
          <h1 className="name">MUHAMMAD TALHA</h1>
          <h3 className="des">Web Developer | Programmer | Student</h3>
          <h2 className="cont-head">Biography</h2>
          <p className="txt-des">Hey! I'm Muhammad Talha - a Web designer, developer and Programmer breathing in Islamabad, Pakistan</p>
          <h2 className="cont-head">Social Links</h2>
          <div className="scl-cnt">
            <a title='Facebook' href="https://www.facebook.com/profile.php?id=100092518021987" className='scl f'></a>
            <a title='Instagram' href="https://www.instagram.com/ttlha._15" className='scl i'></a>
            <a title='Github' href="https://www.github.com/MuhammadTalha15" className='scl g'></a>
            <a title='Email' href="https://mail.google.com" className='scl m'></a>
            <a title='Pinterest' href="https://www.pinterest.com/talhaz5518" className='scl p'></a>
            <a title='Stack-Overflow' href="#" className='scl s'></a>
            <a title='Website' href="https://mtalha-website.vercel.app" className='scl w'></a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App