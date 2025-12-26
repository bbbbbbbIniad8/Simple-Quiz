"use client";
import React, { useState } from 'react';
import Papa from 'papaparse';
import SubResult from './components/subresult';
import { StartWindow } from './components/startWindow';
import { QuizWindow } from './components/quizWindow';
import Result from './components/result';
import LoadCSV from './components/loadCSV';

interface CsvRow {
  [key: string]: string | string;
}

export default function CsvUploader() {
  type ScreenState = "answering" | "correct" | "incorrect" | "result";

  const [rows, setRows] = useState<CsvRow[]>([]);
  const [loadCsv, setCsv] = useState<boolean>(false);
  const [startQuiz, setStart] = useState<boolean>(false);
  const [quizMax, setQuizMax] = useState<number>(-1);
  const [correctLst, setCorrectLst] = useState<string[]>([]);
  const [incorrectLst, setIncorrectLst] = useState<string[]>([]);
  const [nowScreen, setScreen] = useState<ScreenState>("answering");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse<CsvRow>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setRows(results.data); 
        setCsv(true)
        setQuizMax(results.data.length)
      },
    });
  };

  const handleStart = () =>{
    setStart(true)
  }

  const calcQuizIndex = () =>{
    return correctLst.length + incorrectLst.length
  }

  const handleReset = () =>{
    setStart(false);
    setCorrectLst([]);
    setIncorrectLst([]);
    setScreen("answering");
  }

  const handleAnswer = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return;
    const answer = e.currentTarget.value;
    const correct = rows[calcQuizIndex()]["Answer"]
    
    if (answer == correct){
      setScreen("correct")
      setCorrectLst(prev => [...prev, correct]);
    } else {
      setScreen("incorrect")
      setIncorrectLst(prev => [...prev, correct]);
    }

    const nextIndex = correctLst.length + incorrectLst.length + 1;
    setTimeout(()=>{
      if (quizMax <= nextIndex){
        setScreen("result")
      } else{
        setScreen("answering")
      }
    }, 1000)
  }

  const renderContent = () => {
  if (!startQuiz) return <StartWindow quizMax={quizMax} onStart={handleStart} />;
  switch (nowScreen) {
    case "answering": return  <QuizWindow quizNum={calcQuizIndex()+1} 
                               quizMsg={rows[calcQuizIndex()]["Question"]}
                               answerEvent={(e) => handleAnswer(e)}/>;
    case "correct": return    <SubResult currect={true} currectWord={rows[calcQuizIndex()-1]["Answer"]} />;
    case "incorrect": return  <SubResult currect={false} currectWord={rows[calcQuizIndex()-1]["Answer"]} />;
    case "result": return     <Result correctLst={correctLst} incorrectLst={incorrectLst} resetEvent={handleReset}></Result>;
    default: return null;
  }
};
  return (
    
    <div className="p-20 flex flex-col  justify-center items-center bg-blue-200 h-screen min-h-screen">
      {loadCsv && <>
      </>}
      {!loadCsv ? <LoadCSV loadEvent={e => handleFileChange(e)}/> : renderContent()}

    </div>
  );
}