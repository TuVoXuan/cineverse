import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './PageLayout.module.scss';

type props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: props) {
  return (
    <main>
      <Header />
      <section className={styles.container}>{children}</section>
      <Footer />
    </main>
  );
}
