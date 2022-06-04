
import shortid from 'shortid';
import styles from './UpperLevel.module.scss';
import Tag from "../Tag/Tag";

const UpperLevel = props => {

  const upperLevelProperites = props.upperLevelProperites;
  
  const onChange = e => {
    const userInput = e.target.value;
    let arrayOfMatched = [];
    
    if(upperLevelProperites.callback === undefined){
      
      arrayOfMatched = upperLevelProperites.data.filter(
        x =>{
          if(x.isNaN){
            return x.toLowerCase().includes(userInput.toLowerCase())
          } else {
            return x.toString().includes(userInput.toString());
          }
        }
      );
    } else {
      arrayOfMatched = upperLevelProperites.data.filter(
        x => 
          upperLevelProperites.callback(x, userInput)
      )
    }

    upperLevelProperites.setValue(e.target.value);

    if(userInput !== ''){
      upperLevelProperites.setMatchedSuggestions(arrayOfMatched);
      upperLevelProperites.setShowSuggestion(true);
    } else {
      upperLevelProperites.setMatchedSuggestions([]);
      upperLevelProperites.setShowSuggestion(false);
    }

    
    if(arrayOfMatched.length > 0){
      upperLevelProperites.setActiveSuggestionIndex(0);
    } else {
      upperLevelProperites.setActiveSuggestionIndex(null);
      upperLevelProperites.setShowSuggestion(false);
    }
  }

  const onSubmit = e => {

    e.preventDefault();

    if(upperLevelProperites.activeSuggestionIndex == null){
      if(upperLevelProperites.value !== ''){
        if(!upperLevelProperites.tags.includes(upperLevelProperites.value)){  
          upperLevelProperites.setTags([...upperLevelProperites.tags, upperLevelProperites.value]);
          upperLevelProperites.setValue('');
          upperLevelProperites.setShowSuggestion(false);
        }
      }
    } else {
      if(upperLevelProperites.selectedSuggestions !== undefined){
        if(!upperLevelProperites.tags.includes(upperLevelProperites.selectedSuggestions)){
          upperLevelProperites.setTags([...upperLevelProperites.tags, upperLevelProperites.selectedSuggestions]);
          upperLevelProperites.setValue('');
          upperLevelProperites.setShowSuggestion(false);
        }
      }
    }
  }

  
  const keyboardKeys = e => {
    const arrowUpKey = 38;
    const arrowDownKey = 40;
    const enterKey = 13;
    const pressedKey = e.keyCode;
    const indexesAmount = upperLevelProperites.matched.length;

    if(upperLevelProperites.activeSuggestionIndex === 0 && pressedKey === arrowUpKey){
      upperLevelProperites.setActiveSuggestionIndex(null);
    } else if (upperLevelProperites.activeSuggestionIndex !== 0 && pressedKey === arrowUpKey){
      upperLevelProperites.setActiveSuggestionIndex(upperLevelProperites.activeSuggestionIndex - 1);
    } else if (upperLevelProperites.activeSuggestionIndex === indexesAmount && pressedKey === arrowDownKey){
      upperLevelProperites.setActiveSuggestionIndex(upperLevelProperites.activeSuggestionIndex);
    } else if (upperLevelProperites.activeSuggestionIndex < indexesAmount && pressedKey === arrowDownKey) {
      upperLevelProperites.setActiveSuggestionIndex(upperLevelProperites.activeSuggestionIndex + 1);
    }

    if(enterKey === pressedKey){
      const newTag = upperLevelProperites.matched[upperLevelProperites.activeSuggestionIndex];
      upperLevelProperites.setSelectedSuggestions(newTag);
    }
  }
  
  
  return(
    <div className={styles.upperLevel}>
      <div className={styles.tags}>
        {upperLevelProperites.tags.map(tag => <Tag key={shortid()} setTags={upperLevelProperites.setTags} tags={upperLevelProperites.tags}>{tag}</Tag>)}
      </div>
        <form onSubmit={onSubmit}>
          <input type="text" value={upperLevelProperites.value} onChange={onChange} onKeyDown={keyboardKeys} />
        </form>
    </div>
  )  
}

export default UpperLevel;
