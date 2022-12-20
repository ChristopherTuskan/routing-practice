import { BrowserRouter, Link, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import './App.css';

const Home = (props) => {
  return (
    <h1>Welcome!</h1>
  )
}

const NumOrWord = (props) => {
  const {numOrWord} = useParams();
  console.log(numOrWord);
  if (isNaN(+numOrWord) === false){
    return (<h1 style={{textAlign: "center"}}>The number is: {numOrWord}</h1>);
  }else{
    return (<h1 style={{textAlign: "center"}}>The word is: {numOrWord}</h1>);
  }
}

const WordBG = (props) => {
  const {word, textColor, bgColor} = useParams();
    return (
      <h1 style={{color: textColor, backgroundColor: bgColor, textAlign: "center"}}>This word is: {word}</h1>
    )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:numOrWord" element={<NumOrWord />} />
        <Route path="/:word/:textColor/:bgColor" element={<WordBG />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
