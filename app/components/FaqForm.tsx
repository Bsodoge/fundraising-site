'use client'

import styles from './FaqForm.module.css';
import Button from './Button';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function FaqContainer() {
    const [email, setEmail] = useState<string>('');
    const [query, setQuery] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [queryError, setQueryError] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);
    const checkValidation = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email.trim().length || !email.length) {
            setEmailError('Email is empty');
        } else {
            setEmailError('');
        }
        if (!query.trim().length || !query.length) {
            setQueryError('Query is empty');
        } else {
            setQueryError('');
        }
        if (!email.match(/^\S+@\S+\.\S+$/)) {
            setEmailError('Email is invalid');
        } else {
            setEmailError('');
        }
        if (!emailError.length && !queryError.length) {
            setEmail('');
            setQuery('');
            //submit to backend here
            setSuccess(true);  
            setTimeout(() => {
                setSuccess(false);
            }, 5000); 
        }
    }
    return (
        <form className={styles.form_container} onSubmit={(e: FormEvent<HTMLFormElement>) => checkValidation(e)}>
            <div className={styles.inputs}>
                {
                    success ? <span className={styles.success}>Submitted Successfully</span> : <></>
                }
                <div className={styles.label_container}>
                    <label htmlFor="email">Your Email:</label>
                    <span className={styles.error}>{emailError}</span>
                </div>
                <input type="email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)} required />
            </div>
            <div className={styles.inputs}>
                <div className={styles.label_container}>
                    <label htmlFor="query">Your Query:</label>
                    <span className={styles.error}>{queryError}</span>
                </div>
                <textarea name="query" id="query" cols={30} rows={5} value={query} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setQuery(e.currentTarget.value)} required></textarea>
            </div>
            <Button button_text='Submit Query' />
        </form>
    )
}