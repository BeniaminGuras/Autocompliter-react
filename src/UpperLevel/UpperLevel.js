
import shortid from 'shortid';
import styles from './UpperLevel.module.scss';
import Tag from "../Tag/Tag";

const UpperLevel = props => {


  const onChange = e => {
    const userInput = e.target.value;
    
    const arrayOfMatched = props.data.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    props.setValue(e.target.value);

    if(userInput !== ''){
      props.setMatchedSuggestions(arrayOfMatched);
      props.setShowSuggestion(true);
    } else {
      props.setMatchedSuggestions([]);
      props.setShowSuggestions(false);
    }

    
    if(arrayOfMatched.length > 0){
      props.setActiveSuggestionIndex(0);
    } else {
      props.setActiveSuggestionIndex(null);
      props.setShowSuggestion(false);
    }
  }

  const onSubmit = e => {

    e.preventDefault();

    if(props.activeSuggestionIndex == null){
      if(props.value !== ''){
        if(!props.tags.includes(props.value)){
          console.log(props.tags);
          props.setTags([...props.tags, props.value]);
          props.setValue('');
          props.setShowSuggestion(false);
        }
      }
    } else {
      if(!props.tags.includes(props.selectedSuggestions)){
        console.log(props.tags);
        props.setTags([...props.tags, props.selectedSuggestions]);
        props.setValue('');
        props.setShowSuggestion(false);
      }
   }
  }

  const keyboardKeys = e => {
    const arrowUpKey = 38;
    const arrowDownKey = 40;
    const enterKey = 13;
    const pressedKey = e.keyCode;
    const indexesAmount = props.matched.length;

    if(props.activeSuggestionIndex === 0 && pressedKey === arrowUpKey){
      props.setActiveSuggestionIndex(null);
    } else if (props.activeSuggestionIndex !== 0 && pressedKey === arrowUpKey){
      props.setActiveSuggestionIndex(props.activeSuggestionIndex - 1);
    } else if (props.activeSuggestionIndex === indexesAmount && pressedKey === arrowDownKey){
      props.setActiveSuggestionIndex(props.activeSuggestionIndex);
    } else if (props.activeSuggestionIndex < indexesAmount && pressedKey === arrowDownKey) {
      props.setActiveSuggestionIndex(props.activeSuggestionIndex + 1);
    }

    if(enterKey === pressedKey){
      const newTag = props.matched[props.activeSuggestionIndex];
      props.setSelectedSuggestions(newTag);
    }
  }
  
  
  return(
    <div className={styles.upperLevel}>
      <div className={styles.tags}>
        {props.tags.map(tag => <Tag key={shortid()} setTags={props.setTags} tags={props.tags}>{tag}</Tag>)}
      </div>
        <form onSubmit={onSubmit}>
          <input type="text" value={props.value} onChange={onChange} onKeyDown={keyboardKeys} />
        </form>
    </div>
  )  
}

export default UpperLevel;