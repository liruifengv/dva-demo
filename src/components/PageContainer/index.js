import React from 'react';
import styles from './index.css'

const PageContainer = (props) => {
  const { title, content, headerExplain } = props;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>{title}</div>
        <div className={styles.headerExplain}>{headerExplain}</div>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

PageContainer.propTypes = {
};

export default PageContainer;
