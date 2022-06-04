import { useState } from "react";
import UpperLevel from "../UpperLevel/UpperLevel";
import ListOfSuggestions from "../ListOfSuggestions/ListOfSuggestions";
import styles from './Autocompiler.module.scss';

const Autocompliter = props => {
  
  const [matchedSuggestions, setMatchedSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(null);
  const [selectedSuggestions, setSelectedSuggestions] = useState('');
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [value, setValue] = useState('');
  const [tags, setTags] = useState([]);

  return(
    <div className={styles.bar}>
      <UpperLevel 
        data={props.data}
        matched={matchedSuggestions}
        setMatchedSuggestions={setMatchedSuggestions}
        setActiveSuggestionIndex={setActiveSuggestionIndex}
        setSelectedSuggestions={setSelectedSuggestions}
        activeSuggestionIndex={activeSuggestionIndex}
        selectedSuggestions={selectedSuggestions}
        setShowSuggestion={setShowSuggestion}
        value={value}
        setValue={setValue}
        tags={tags}
        setTags={setTags}
         />
      <ListOfSuggestions
        matched={matchedSuggestions}
        activeSuggestionIndex={activeSuggestionIndex}
        setActiveSuggestionIndex={setActiveSuggestionIndex}
        setSelectedSuggestions={setSelectedSuggestions}
        selectedSuggestions={selectedSuggestions}
        setShowSuggestion={setShowSuggestion}
        showSuggestion={showSuggestion}
        setValue={setValue}
        tags={tags}
        setTags={setTags}
         />
    </div>
  )

}

export default Autocompliter;