import ITierBox from '../interfaces/ITierBox';
import styles from './TierBox.module.css';

export default function TierBox({ tierName, tierRequirment, tierDescription, tierImage }: ITierBox) {
    return (
        <div className={styles.tier}>
            <h3 className={styles.header}>{tierName}</h3>
            <div>${tierRequirment}</div>
            <img className={styles.image} src={tierImage} alt={tierName} />
            <div>{tierDescription}</div>
        </div>
    )
}