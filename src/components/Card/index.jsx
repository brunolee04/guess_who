import { Button } from 'react-bootstrap';
import './style.css';


export function Card(){
    return (
            
                <div className="card">
                    <div className='personImg'>
                        
                        <div className='ears'>
                            <img src='https://dld.com.br/images/guess-who/models/orelha/1.fw.png'/>
                        </div>
                        <div className='head'>
                            <img src='https://dld.com.br/images/guess-who/models/cabeca/1.fw.png'/>
                        </div>
                        <div className='noose'>
                            <img src='https://dld.com.br/images/guess-who/models/nariz/1.fw.png'/>
                        </div>
                        <div className='eyes'>
                            <img src='https://dld.com.br/images/guess-who/models/olhos/1.fw.png'/>
                        </div>
                        <div className='eyebrow'>
                            <img src='https://dld.com.br/images/guess-who/models/sobrancelha/1.fw.png'/>
                        </div>
                        <div className='beard'>
                            <img src='https://dld.com.br/images/guess-who/models/barba/1.fw.png'/>
                        </div>
                        <div className='mouth'>
                            <img src='https://dld.com.br/images/guess-who/models/boca/1.fw.png'/>
                        </div>
                        
                    </div>
                    <p className="card__name">Tubá</p>
                    <button className="btn draw-border">Virar</button>
                    <button className="btn draw-border">Escolher</button>
                </div>
           
    );
}