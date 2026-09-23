import betterThanNamingAgencyCards from './betterThanNamingAgencyCards';
import styles from './BetterThanNamingAgency.module.sass';

function BetterThanNamingAgency () {
  return (
    <ul className={styles.blockOfContainers}>
      {betterThanNamingAgencyCards.map(c => (
        <li key={c.title} className={styles.container}>
          <span className={c.icon} aria-hidden='true'></span>
          <h3>{c.title}</h3>
          <p>{c.body}</p>
        </li>
      ))}
    </ul>
  );
}
export default BetterThanNamingAgency;
