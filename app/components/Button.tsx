import styles from './Button.module.css'

export default function FaqContainer({button_text} : IButton) {
    return (
        <button className={styles.button}>{button_text}</button>
    )
}