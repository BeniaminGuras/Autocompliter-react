import styles from './Tag.module.scss';

const Tag = props =>{

  const onClick = e => {
    
    const value = props.children;

    const newTags = props.tags.filter(x =>
      (value !== x)
    );

    props.setTags(newTags);
  }
    
  return(
    <div className={styles.tag}>
      <p>
        {props.children}<i className="fa-solid fa-x" onClick={onClick}></i>
      </p>
    </div>
  )
}

export default Tag;