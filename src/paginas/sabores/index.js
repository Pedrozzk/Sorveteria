import React from'react';

    import Topo from '../../componentes/Topo';
    import RodaPe from '../../componentes/rodape';
    import './style.css';
export default function Sabores(){
    return(
        <div>
            <Topo />
            <main>
        <section>
            <section className='secao-banner-sabores'>
                <div className='titulo-banner-sabores'>
                    <h1>NOSSOS SABORES</h1>
                </div>
            </section>
        </section>

        <section className='limitar-secao secao-sabores'>
        <h2>Sabores de Sorvete</h2>
        <div className='container-sorvetes'> 
        <div className='box-sorvete'>
        <img src='assets/sabor-oreo.jpg' alt='Sabor oreo'/>
            <h3>Sabor Oreo</h3>
            <p>delicioso sorvete sabor Oreo. Uma explosao de sabor.</p>
        </div>

        <div className='box-sorvete'>
        <img src='assets/sabor-pistache.png'  alt='Sabor Pistache'/>
        <h3>Sorvete de Pistache</h3>
        <p>Cremoso Sorvete Sabor Pistache com pedacinhos de semente.</p>
        </div>

        <div className='box-sorvete'>
        <img src='assets/sabor-cookies-avela.png' alt='avela com cookie'/>
        <h3>Sabor Cookies e Avelã</h3>
        <p>Nosso MELHOR sorvete você vai adorar o sabor.</p>
        </div>

        <div className='box-sorvete'>
        <img src='assets/sorbet-kiwi.png' alt='Sorvete de kiwi'/>
        <h3>Sorvete de Kiwi</h3>
        <p>Delicioso e Refrescante sorvete sabor Kiwi. Rico em Vitamina C.</p>
        </div>

        <div className='box-sorvete'>
        <img src='assets/sorbet-morango.png'alt='sorvete de morango' />
        <h3>Sorvete de Morango</h3>
        <p>Sorvete de morango Gourmet. Tradicional e saboroso.</p>
        </div>  

        <div className="box-sorvete">
              <img src="assets/sorbet-limao.png" alt="sorbet limão siciliano"/>
              <h3>Sorvete de Limão Siciliano</h3>
              <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
            </div>
        </div>
        </section>

            </main>
           <RodaPe />
        </div>
        
    )
}