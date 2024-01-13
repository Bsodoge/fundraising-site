'use client'

import { useState } from 'react';
import styles from './FaqContainer.module.css';
import FaqForm from './FaqForm';

export default function FaqContainer() {
    const [hidden, setHidden] = useState(true);
    const toggleHidden = () => setHidden(prevHidden => !prevHidden);
    return (
        <li className={styles.QA_container}>
            <div className={`${styles.question_container} ${!hidden ? styles.clicked : ""}`} onClick={toggleHidden}>
                <h3>Any more questions?</h3>
            </div>
            <div className={hidden ? styles.hidden : styles.answer_container}>
                <FaqForm />
            </div>
        </li>
    )
}