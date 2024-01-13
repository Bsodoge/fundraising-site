'use client'

import styles from './FaqForm.module.css';
import Button from './Button';

export default function FaqContainer() {
    return (
        <form className={styles.form_container}>
            <div className={styles.inputs}>
                <label htmlFor="email">Your Email:</label>
                <input type="email" />
            </div>
            <div className={styles.inputs}>
                <label htmlFor="query">Your Query:</label>
                <textarea name="query" id="query" cols={30} rows={5}></textarea>
            </div>
            <Button button_text='Submit Query'/>
        </form>
    )
}