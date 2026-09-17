import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './Pricing.module.sass';
import pricingList from './pricingList.json';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Pricing () {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <section>
        {pricingList.map(c => (
          <article>
            <div style={{ border: `10px solid ${c.color}` }}>
              <h3 style={{ color: c.color }}>{c.type}</h3>
              <p>{c.describeType}</p>
              <p style={{ color: c.color }}>{c.price}</p>
            </div>
            <ul>
              {c.profit.map(p => (
                <li className={styles.body} data-tooltip={p.tooltip}>
                  {p.body}
                </li>
              ))}
            </ul>
            <Link to='/startContest' style={{ backgroundColor: c.color }}>
              Start
            </Link>
          </article>
        ))}
      </section>
      <Footer className={styles.footer} />
    </div>
  );
}

export default Pricing;

// <ul className={styles.blockOfcContainers}>
//   {firstNamingPlatform.map((c, i) => (
//     <li key={i} className={styles.container}>
//       <img src={c.iconSrc} alt={c.title} />
//       <h3>
//         {c.title.map(t => (
//           <div>{t}</div>
//         ))}
//       </h3>
//       <p>{c.body}</p>
//     </li>
//   ))}
// </ul>
