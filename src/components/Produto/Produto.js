import React from 'react';
import { useParams } from 'react-router-dom';
import Head from '../Head/Head';
import styles from './Produto.module.css';


export default function Produto() {
    const [produto, setProduto] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [erro, setErro] = React.useState(null);
    const { id } = useParams();

    React.useEffect(() => {
        async function fetchProduto(url) {
            try {
                setLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setProduto(json)
            } catch(err) {
                setErro('Ocorreu um erro.')
            } finally {
                setLoading(false)
            }
        }

        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    }, [id])

    if(loading) return <div className="loading"></div>
    if(erro) return <p>{erro}</p>;
    if(produto === null) return null;

    return(
        <section className={styles.produto}>
            <Head title={`Ranek | ${produto.nome}`} description={`Ranek | Produto: ${produto.descricao}`} />
            <div>
                {produto.fotos.map(foto => (
                    <img key={foto.src} src={foto.src} alt={foto.titulo}></img>
                ))}
            </div>
            <div>
                <h1>{produto.nome}</h1>
                <span className={styles.preco}>R$ {produto.preco}</span>
                <p className={styles.descricao}>{produto.descricao}</p>
            </div>
        </section>
    )
};