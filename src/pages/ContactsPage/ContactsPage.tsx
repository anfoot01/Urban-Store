import Icon from '../../components/Icon/Icon';
import Layout from '../../components/Layout/Layout';
import Logo from '../../components/Logo/Logo';
import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
  return (
    <Layout>
      <h2 className={styles.contacts__title}>Contacts | space</h2>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2>Contacts</h2>
          <div className={styles.contacts}>
            <div className={styles.socials}>
              <Icon icon="instagram" size={36} className="inst" />
              <Icon icon="twitter" size={36} />
              <Icon icon="facebook" size={36} />
            </div>
            <span className="body-medium-regular">urbanzen@help.com</span>
          </div>
        </div>
        <div className={styles.logo}>
          <Logo variant="dark" />
        </div>
      </div>
    </Layout>
  );
};

export default ContactsPage;
