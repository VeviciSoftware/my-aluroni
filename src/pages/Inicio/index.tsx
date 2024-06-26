import cardapio from '../../data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from '../../styles/Tema.module.scss'
import casa from '../../assets/sobre/casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from '../../types/Prato';

export default function Inicio() {
    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);

    const navigate = useNavigate();

   function redirecionarParaDetalhes(prato: Prato) {
      navigate(`/prato/${prato.id}`, { state: { ...prato }});
   }

    return (
      <section>
        <h3 className={stylesTema.titulo}>
          Recomendações da cozinha
        </h3>
        <div className={styles.recomendados}>
          {pratosRecomendados.map(item => (
            <div key={item.id} className={styles.recomendado}>
              <div className={styles.recomendado__imagem}>
                <img src={item.photo} alt={item.title} />
              </div>
              <button className={styles.recomendado__botao}
                onClick={() => redirecionarParaDetalhes(item)}
              >
                Ver mais
              </button>
            </div>
          ))}
        </div>
        <h3 className={stylesTema.titulo}>Nossa Casa</h3>
        <div className={styles.nossaCasa}>
          <img src={casa} alt='Nossa Casa' />
          <div className='styles.nossaCasa__endereco'>
            <p>Endereço: Rua dos Alfeneiros, 4</p>
            <p>Telefone: (11) 5555-5555</p>
          </div>
        </div>
      </section>
    );
  }