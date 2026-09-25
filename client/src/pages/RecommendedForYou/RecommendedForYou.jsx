import React from 'react';
import styles from './RecommendedForYou.module.sass';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import moreOptionsTabs from './moreOptionsTabs.json';

function RecommendedForYou () {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <article className={styles.recommendedContainer}>
        <div>
          <h1>✨ Recommended For You</h1>
          <p>Personalized picks based on your browsing & favorites</p>
        </div>
        {/* <input>Refine</input> */}
      </article>

      <section className={styles.popularDomainsContainer}>
        <h2>🔥 Popular Domains</h2>
        <p>Browse and interact to get personalized picks</p>
        <ul></ul>
      </section>

      <article className={styles.moreOptionsContainer}>
        <h2>Need More Options?</h2>
        <p>Two ways to find your perfect brand name</p>
        <ul className={styles.moreOptionsSmallBoxWrapper}>
          {moreOptionsTabs.map((c, i) => (
            <li key={i} className={styles.moreOptionsSmallBox}>
              <span className={c.icon} aria-hidden='true'></span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <a href='http://www.google.com' className={styles.moreOptionsBtn}>
                {c.btn}
              </a>
            </li>
          ))}
        </ul>
      </article>
      <Footer className={styles.footer} />
    </div>
  );
}

export default RecommendedForYou;
