import React, { useEffect, useState } from "react";
import LanguageInput from "../LanguageInput/LanguageInput";
import TextInput from "../TextInput/TextInput";
import axios from "axios";

const apiKey = "61fe42194dmsha3e696751cf48edp14633fjsn5dd03c4a1e74";
function LanguageTranslator() {
  const [languages, setLanguage] = useState([]);
  const [sourceLanguage, setSourceLanguage] = useState('')
  const [targetLanguage, setTargetLanguage] = useState('')
  const [inputText , setInputText] = useState('')
  const [translatedText, setTranslatedText] = useState('')


  useEffect(() => {
    getLanguage();
  }, []);

  async function getLanguage() {
    const options = {
      method: "GET",
      url: "https://text-translator2.p.rapidapi.com/getLanguages",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "text-translator2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setLanguage(response.data.data.languages);
    } catch (error) {
      console.error(error);
    }
  }

  async function translate() {
    const data = new FormData();
    data.append("source_language", sourceLanguage);
    data.append("target_language", targetLanguage);
    data.append("text", inputText);

    const options = {
      method: "POST",
      url: "https://text-translator2.p.rapidapi.com/translate",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "text-translator2.p.rapidapi.com",
      },
      data: data,
    };

    try {
      const response = await axios.request(options);
      setTranslatedText(response.data.data.translatedText)
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="main">
      <LanguageInput label="Source Language" languages={languages} onInput={(value)=>{
        setSourceLanguage(value)
      }} />
      <LanguageInput label="Target Language" languages={languages} onInput={(value) => {
        setTargetLanguage(value)
      }} />
      <TextInput label="TextInput" onInput={(value) => {
        setInputText(value)
      }} />
      <button className="btn" onClick={()=>{
        translate()
        console.log(sourceLanguage, targetLanguage, inputText)
      }}
      >Translate</button>

      {translatedText ? <h1>{translatedText}</h1> : null}

    </div>
  );
}

export default LanguageTranslator;
