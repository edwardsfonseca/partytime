import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import '../syles/App.css'

function Home() {

  return (
    <>
      <div className='container login-container'>
        <div className='columns'>
    <div className='column is-3'>
        <div className="card">
          <div className="card-content">
            <div className="content">
              Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec
              id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis
              consectetur purus sit amet fermentum.
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
      <Link to="/login"><button>LOGIN</button></Link>
      <Link to="/registro">REGISTRO</Link>

    </>
  )
}

export default Home