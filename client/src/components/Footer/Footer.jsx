import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Footer.module.sass';
import CONSTANTS from '../../constants';

class Footer extends Component {
  topFooterItemsRender = item => (
    <div key={item.title}>
      <h4>{item.title}</h4>
      {item.items.map(i => (
        <a key={i} href='https://google.com'>
          {i}
        </a>
      ))}
    </div>
  );

  topFooterRender () {
    return CONSTANTS.FooterItems.map(item => this.topFooterItemsRender(item));
  }

  render () {
    const { className } = this.props;
    return (
      <div className={classNames(styles.footerContainer, className)}>
        <div className={styles.footerTop}>
          <div>{this.topFooterRender()}</div>
        </div>
      </div>
    );
  }
}

export default Footer;
