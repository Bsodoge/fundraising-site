import styles from './ProgressBar.module.css';

export default function ProgressBar() {
    return (
        <>
            <span className={styles.percentage}>X% towards our goal</span>
            <div className={styles.progress_bar} style={{ ['--progress-bar-progress-width' as any]: `${73.333}%` }}></div>
        </>
    )
}