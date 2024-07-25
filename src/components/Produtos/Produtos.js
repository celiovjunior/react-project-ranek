import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../Head/Head';
import styles from './Produtos.module.css';

export default function Produtos() {
    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto')
        .then(r => r.json())
        .then(json => setProdutos(json) )
    }, []);

    if(produtos === null) return null;

    return(
        <section className={styles.produtos + ' animeLeft'}>
            <Head title="Ranek" description="Site's description" />

            {produtos.map((produto, index) => (
                <Link to={`produto/${produto.id}`} key={index}>
                    <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
                    <h1 className={styles.nome}>{produto.nome}</h1>
                </Link>
            ))}
        </section>
    )
};