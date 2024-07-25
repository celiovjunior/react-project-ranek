import React from 'react';
import styles from './Contato.module.css';
import foto from '../../images/contato.jpg';
import Head from '../Head/Head';

export default function Contato() {
    return(
        <section className={styles.contato + ' animeLeft'}>
            <Head title="Ranek | Contato" description="Entre em contato" />
            <img src={foto} alt="Writing machine" />
            <div>
                <h1>Get in touch.</h1>
                <ul className={styles.dados}>
                    <li>
                        cl.juniorr@gmail.com
                    </li>
                    <li>
                        +61 455 467 439
                    </li>
                    <li>
                        <a target='_blank' rel="noreferrer" href='https://www.github.com/celiovjunior'>@celiovjunior</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}