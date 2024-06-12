import cardapio from '../../data/cardapio.json';

export default function Inicio() {
    let pratosRecomendados = [...cardapio];

    pratosRecomendados = pratosRecomendados.sort(() => Math.random() - 0.5).splice(0, 3);

    return (
        <section>
            <h3>
                Recomendações da cozinha
            </h3>
            <div>
                {pratosRecomendados.map(item => (
                    <>
                        <div key={item.id}>
                            <img src={item.photo} alt={item.title} />
                            <h4>{item.title}</h4>
                        </div>
                        <button>
                            Ver mais
                        </button>
                    </>
                ))}
            </div>
        </section>
    );
}