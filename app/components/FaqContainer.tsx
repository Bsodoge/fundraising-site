'use client'

import { useState } from 'react';
import styles from './FaqContainer.module.css';

export default function FaqContainer({ question, answer }: IFaqContainer) {
    const [hidden, setHidden] = useState(true);
    const toggleHidden = () => setHidden(prevHidden => !prevHidden);
    return (
        <li className={styles.QA_container}>
            <div className={`${styles.question_container} ${!hidden ? styles.clicked : ""}`} onClick={toggleHidden}>
                <h3>{question}</h3>
            </div>
            <div className={hidden ? styles.hidden : styles.answer_container}>
                <p>{answer}</p>
            </div>
        </li>
    )
}