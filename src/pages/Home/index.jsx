import './style.css'

import {Card} from '../../components/Card';

export function Home() {
 

  return (
    <div className="App">
      <h1>Adivinha quem</h1>

      <div className="container">

        <div className='row'>
          <div className='col-md-6 col-double-card'>
              <Card/>
              <Card/>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 col-double-card'>
              <Card/>
              <Card/>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 col-double-card'>
              <Card/>
              <Card/>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 col-double-card'>
              <Card/>
              <Card/>
          </div>
        </div>
      </div>      
    </div>
  )
}

