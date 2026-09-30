import React from 'react';
import styles from './RecommendedForYou.module.sass';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import moreOptionsTabs from './moreOptionsTabs.json';
import popularDomainsCards from './popularDomainsCards.js';
import searchTags from './searchTags.json';

function RecommendedForYou () {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <article className={styles.recommendedContainer}>
        <div className={styles.recommendedInner}>
          <div className={styles.recommendedText}>
            <h1>✨ Recommended For You</h1>
            <p>Personalized picks based on your browsing & favorites</p>
          </div>
          <div className={styles.refineBar}>
            <input
              type='text'
              placeholder='Refine by keyword (e.g., tech, health, food...)'
              aria-label='Refine'
            />
            <button type='button'>Refine</button>
          </div>
        </div>
      </article>

      <section className={styles.popularDomainsContainer}>
        <h2>🔥 Popular Domains</h2>
        <p>Browse and interact to get personalized picks</p>
        <ul className={styles.domainsCards}>
          {popularDomainsCards.map((c, i) => (
            <li key={i} className={styles.domainCard}>
              <div className={styles.domainImageWrapper}>
                <img src={c.iconSrc} alt={c.title} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.price}</p>
            </li>
          ))}
        </ul>
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

      <section className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <span className='fas fa-search' aria-hidden='true'></span>
          <input
            type='text'
            placeholder='Search Over 300,000+ Premium Names'
            aria-label='Search premium names'
          />
          <button type='button' aria-label='Search'>
            <span className='fas fa-search' aria-hidden='true'></span>
          </button>
        </div>
        <ul className={styles.searchTags}>
          {searchTags.map(tag => (
            <li key={tag}>
              <a href='https://www.google.com'>{tag}</a>
            </li>
          ))}
        </ul>
      </section>

      <Footer className={styles.footer} />
    </div>
  );
}

export default RecommendedForYou;
