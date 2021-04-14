import React from 'react';
import { Card } from 'antd';
import styles from './index.css'

const ColumnPanel = (props) => {
  const { title, content, explain } = props;
  return (
    <Card>
      <div className={styles.panel}>
        <div className={styles.left}>
          <div className={styles.column}>
            <div className={styles.title}>
              {title}
            </div>
            <div className={styles.explain}>
              {explain}
            </div>
          </div>
        </div>
        <div className={styles.right}>
        {content}
        </div>
      </div>
    </Card>
  );
};

ColumnPanel.propTypes = {
};

export default ColumnPanel;
