import React from 'react';
import styles from './Contato.module.css';
import foto from '../../images/contato.jpg';
import Head from '../Head/Head';

export default function Contato() {
    return(
        <section className={styles.contato + ' animeLeft'}>
            <Head title="Ranek | Contato" description="Entre em contato" />
            <img src={foto} alt="Máquina de escrever" />
            <div>
                <h1>Entre em contato.</h1>
                <ul className={styles.dados}>
                    <li>
                        celio@email.com
                    </li>
                    <li>
                        (85) 9 99999999
                    </li>
                    <li>
                        Rua Tal - 1020
                    </li>
                </ul>
            </div>
        </section>
    )
}