import { Button } from 'react-bootstrap';
import './style.css';


export function Card(){

    const urlImgPrefix = 'https://codevalley.dev/games/guess-who/image/models';

    const person = [1,random(0,2),random(1,10),random(0,8),random(1,3),0,0,random(0,4),random(0,5),random(1,4),random(0,2),random(0,3)];
    //const person = ['sexo','masculino','preto','careca'];

   

    const earsImg     = <img src={`${urlImgPrefix}/1/${person[1]}/ears/1.fw.png`}/> ;
    const eyesImg     = person[2]<1?'':<img src={`${urlImgPrefix}/1/${person[1]}/eyes/${person[2]}.fw.png`}/>;
    const hairImg     = person[3]<1?'':<img src={`${urlImgPrefix}/1/${person[1]}/hair/${person[3]}.fw.png`}/>;
    const nooseImg    = person[4]<1?'':<img src={`${urlImgPrefix}/1/${person[1]}/noose/${person[4]}.fw.png`}/>;
    const beardImg    = person[7]<1?'':<img src={`${urlImgPrefix}/1/${person[1]}/beard/${person[7]}.fw.png`}/>;
    const mustacheImg = person[8]<1?'':<img src={`${urlImgPrefix}/1/${person[1]}/mustache/${person[8]}.fw.png`}/>;
    const eyebrowImg  = person[9]<1?'':<img src={`${urlImgPrefix}/1/${person[1]}/eyebrow/${person[9]}.fw.png`}/>;
    const glassesImg  = person[10]<1?'':<img src={`${urlImgPrefix}/1/${person[1]}/glasses/${person[10]}.fw.png`}/>;
    const hatImg      = person[11]<1?'':<img src={`${urlImgPrefix}/1/${person[1]}/hat/${person[11]}.fw.png`}/>;
    
    


    return (
            
                <div className="card">
                    <div className='personImg'>
                        
                        <div className='ears'>
                            {earsImg}
                        </div>
                        <div className='head'>
                            <img src={`${urlImgPrefix}/1/${person[1]}/head/1.fw.png`}/>
                        </div>
                        <div className='eyes'>
                            {eyesImg}
                        </div>
                        <div className='noose'>
                            {nooseImg}
                        </div>
                        
                        <div className='eyebrow'>
                            {eyebrowImg}
                        </div>
                        <div className='beard'>
                            {beardImg}
                        </div>
                        <div className='mouth'>
                            <img src={`${urlImgPrefix}/1/${person[1]}/mouth/1.fw.png`}/>
                        </div>
                        <div className='mustache'>
                           {mustacheImg}
                        </div>
                        <div className='hair'>
                           {hairImg}
                        </div>
                        <div className='glasses'>
                           {glassesImg}
                        </div>
                        <div className='hat'>
                           {hatImg}
                        </div>
                        
                        
                    </div>
                    <p className="card__name">Tubá</p>
                    <button className="btn draw-border">Virar</button>
                    <button className="btn draw-border">Escolher</button>
                </div>
           
    );


    function random(min,max){
        return Math.floor(Math.random() * (max - min) + min);
    }
}