import shortid from 'shortid';
import clsx from 'clsx';
import styles from './ListOfSuggestions.module.scss';

const ListOfSuggestions = props => {

  const suggestionListProperties = props.suggestionListProperties;
  
  
  const onMouseOver = (e, index) => {
    if(index !== suggestionListProperties.activeSuggestionIndex){
      suggestionListProperties.setSelectedSuggestions(e.target);
      suggestionListProperties.setActiveSuggestionIndex(index);
    }
  }

  const onClick = e => {
    if(!suggestionListProperties.tags.includes(e.target.textContent)){
      suggestionListProperties.setTags([...suggestionListProperties.tags, e.target.textContent ]);
      suggestionListProperties.setValue('');
      suggestionListProperties.setShowSuggestion(false);
    }
  }

  return(
    <ul className={clsx(suggestionListProperties.showSuggestion && styles.active)}>

      {suggestionListProperties.matched.map((x, index) => 
        <li
          key={
            shortid()
          } 
          className={
            clsx(
              suggestionListProperties.activeSuggestionIndex === index && styles.active
            )} 
          data-index={
            index
          }
          onClick={e => onClick(e)
          }

          onMouseOver={e => onMouseOver(e, index)
          }
        >
        {x}

      </li>
      )}
    </ul>
  )
}

export default ListOfSuggestions;