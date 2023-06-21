
import './style.css';

export default function RodaPe(){
    return(
        <footer>
            <div className='limitar-secao container-logo-informacoes'>
                <img src='assets/logo.png'  alt='logoMarca'/>
                <div>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardinho campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>tel: (11) 3456-7890</p>
                </div>
                <div>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 20:00</p>
                </div>
            </div>
            <div className='limitar-secao direito-autoral'>
                <p>Gelateria. Orgulhosamente Desenvolvido por Pedro Henrique</p>
            </div>
        </footer>
    )
}