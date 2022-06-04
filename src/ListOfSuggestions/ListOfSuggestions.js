import shortid from 'shortid';
import clsx from 'clsx';
import styles from './ListOfSuggestions.module.scss';

const ListOfSuggestions = props => {
  
  
  const onMouseEnter = (e, index) => {
    props.setSelectedSuggestions(e.target);
    props.setActiveSuggestionIndex(index);
  }

  const onClick = (e, x) => {
    props.setTags([...props.tags, e.target.textContent ]);
    props.setValue('');
    props.setShowSuggestion(false);
  }

  return(
    <ul className={clsx(props.showSuggestion && styles.active)}>

      {props.matched.map((x, index) => 
        <li
          key={
            shortid()
          } 
          className={
            clsx(
              props.activeSuggestionIndex === index && styles.active
            )} 
          data-index={
            index
          }
          onClick={e => onClick(e)
          }

          onMouseOver={e => onMouseEnter(e, index)
          }
          
        >
        {x}

      </li>
      )}
    </ul>
  )
}

export default ListOfSuggestions;