import { useState } from "react";
import UpperLevel from "../UpperLevel/UpperLevel";
import ListOfSuggestions from "../ListOfSuggestions/ListOfSuggestions";
import styles from './Autocompliter.module.scss';

const Autocompliter = props => {
  
  //array of matched suggestions with an options
  const [matchedSuggestions, setMatchedSuggestions] = useState([]);

  //index of list that has been pointed by mouse or arrow keys
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(null);

  //selected suggestion - DOM element
  const [selectedSuggestions, setSelectedSuggestions] = useState('');

  //define if suggestions are visible or not
  const [showSuggestion, setShowSuggestion] = useState(false);

  // the value of client input
  const [value, setValue] = useState('');

  //array of tags that were added
  const [tags, setTags] = useState([]);

  const upperLevelProperties = {
    data: props.data,
    matched: matchedSuggestions,
    setMatchedSuggestions: setMatchedSuggestions,
    setActiveSuggestionIndex: setActiveSuggestionIndex,
    activeSuggestionIndex: activeSuggestionIndex,
    setSelectedSuggestions: setSelectedSuggestions,
    selectedSuggestions: selectedSuggestions,
    setShowSuggestion: setShowSuggestion,
    value: value,
    setValue: setValue,
    tags: tags,
    setTags: setTags,
    callback: props.callback,
  }

  const suggestionListProperties = {
    matched: matchedSuggestions,
    activeSuggestionIndex: activeSuggestionIndex,
    setActiveSuggestionIndex: setActiveSuggestionIndex,
    setSelectedSuggestions: setSelectedSuggestions,
    selectedSuggestions: selectedSuggestions,
    setShowSuggestion: setShowSuggestion,
    showSuggestion: showSuggestion,
    setValue: setValue,
    tags: tags,
    setTags: setTags,
  }

  return(
    <div className={styles.bar}>
      <UpperLevel 
        upperLevelProperites={upperLevelProperties}
         />
      <ListOfSuggestions
        suggestionListProperties={suggestionListProperties}
         />
    </div>
  )

}

export default Autocompliter;