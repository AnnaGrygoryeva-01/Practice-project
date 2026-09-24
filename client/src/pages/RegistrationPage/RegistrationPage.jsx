import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../components/Logo';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import { clearAuthError } from '../../store/slices/authSlice';
import CONSTANTS from '../../constants';
import registrationPageQA from './registrationPageQA.json';

const RegistrationPage = props => {
  const { clearError } = props;

  useEffect(() => {
    clearError();
  }, [clearError]);

  const contactArticle = (
    <React.Fragment>
      <div className={styles.headerArticle}>
        I have other questions! How can I get in touch with Squadhelp?
      </div>
      <div className={styles.article}>
        Check out our <span className={styles.orangeSpan}>FAQs</span> or send us
        a <span className={styles.orangeSpan}>message</span>. For assistance
        with launching a contest, you can also call us at{' '}
        {CONSTANTS.COMPANY_CONTACTS.CONTACT_NUMBER} or schedule a{' '}
        <span className={styles.orangeSpan}>Branding Consultation</span>
      </div>
    </React.Fragment>
  );

  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpContainer}>
        <div className={styles.headerSignUpPage}>
          <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} />
          <div className={styles.linkLoginContainer}>
            <Link to='/login'>
              <span>Login</span>
            </Link>
          </div>
        </div>
        <RegistrationForm history={props.history} />
      </div>
      <div className={styles.footer}>
        <div className={styles.articlesMainContainer}>
          {registrationPageQA.map((column, index) => (
            <div className={styles.columnContainer} key={index}>
              {column.map(({ header, text }) => (
                <React.Fragment key={header}>
                  <div className={styles.headerArticle}>{header}</div>
                  <div className={styles.article}>{text}</div>
                </React.Fragment>
              ))}
              {index === registrationPageQA.length - 1 && contactArticle}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearAuthError()),
});

export default connect(null, mapDispatchToProps)(RegistrationPage);
