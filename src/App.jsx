import { useState } from 'react'
import './App.css'
import pic from './assets/profile-pic.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='mn'>
        <section className='vw-prt'>
          <div className="profile-pic-cnt">
            <div className='profile-pic'></div>
          </div>
            <h2 className="name">Muhammad Talha</h2>
            <p className='des'>Programmer | Web Designer | Student</p>
          <div className="scl-cnt">
            <a title='Facebook' href="https://www.facebook.com/profile.php?id=100092518021987" className='scl f'></a>
            <a title='Instagram' href="https://www.instagram.com/ttlha._15" className='scl i'></a>
            <a title='Github' href="https://www.github.com/MuhammadTalha15" className='scl g'></a>
            <a title='Email' href="https://mail.google.com" className='scl m'></a>
            <a title='Pinterest' href="https://www.pinterest.com/talhaz5518" className='scl p'></a>
            <a title='Stack-Overflow' href="#" className='scl s'></a>
            <a title='Website' href="https://muhammadtalha-website.vercel.app" className='scl w'></a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
