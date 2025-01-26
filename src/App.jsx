import { useState } from 'react'
import './styles/App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='mn'>
        <section className='vw-prt'>
          <div className="profile-pic-cnt">
            <div className="profile-pic"></div>
          </div>
          <h1 className="name">Muhammad Talha</h1>
          <h3 className="des">Programmer | Tech Enthusiast</h3>
          <h2 className="cont-head">Social Links</h2>

          <div className="scl-cnt">

            <a title='Facebook' href="https://www.facebook.com/profile.php?id=100092518021987" className='scl-btn' target='_blank'>
             <div className='scl f'></div>
             <span className='face-tag'>Facebook</span>
            </a>

            <a title='Facebook' href="https://www.instagram.com/ttlha._15" className='scl-btn' target='_blank'>
             <div className='scl i'></div>
             <span className='face-tag'>Instagram</span>
            </a>

            <a title='Facebook' href="https://www.github.com/MuhammadTalha15" className='scl-btn' target='_blank'>
             <div className='scl g'></div>
             <span className='face-tag'>Github</span>
            </a>

            <a title='Facebook' href="https://muhammadtalha-portfolio.vercel.app" className='scl-btn' target='_blank'>
             <div className='scl w'></div>
             <span className='face-tag'>Website</span>
            </a>

          </div>
          <p className="ftr">Designed by | Muhammad Talha</p>
        </section>
      </main>
    </>
  )
}

export default App