import firstNamingPlatform from '../firstNamingPlatform';
import styles from './FirstNamingPlatformList.module.sass';

function FirstNamingPlatformList () {
  return (
    <ul className={styles.blockOfcContainers}>
      {firstNamingPlatform.map((c, i) => (
        <li key={i} className={styles.container}>
          <img src={c.iconSrc} alt={c.title} />
          <h3>
            {c.title.map(t => (
              <div key={t}>{t}</div>
            ))}
          </h3>
          <p>{c.body}</p>
        </li>
      ))}
    </ul>
  );
}
export default FirstNamingPlatformList;
