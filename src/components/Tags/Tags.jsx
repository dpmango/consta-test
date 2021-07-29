import React from 'react'
import cns from 'classnames'

import styles from './Tags.module.scss';

const Tags = ({tags, className}) => {
  return (
    <div className={cns(styles.tags, className)}>
      {tags &&
        tags.map((tag, idx) => (
          <div className={cns(styles.tag, tag.active && styles.tag_active)} key={idx}>{tag.title}</div>
        ))}
    </div>
  )
  
}

export default Tags