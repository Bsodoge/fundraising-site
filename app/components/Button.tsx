import styles from './Button.module.css'

export default function FaqContainer({ button_text }: IButton) {
    return (
        <a className={styles.button} href="https://buy.stripe.com/test_00g14vgho0Ei5Ko5kk" target="_blank" rel="noopener noreferrer">{button_text}</a>
    )
}