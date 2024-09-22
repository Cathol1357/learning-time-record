import { useState } from 'react';
import './App.css';
import { InputTodo } from './components/InputWithText';
import { DisplayText } from './components/DisplayText';
import { DisplayLearningSubject } from './components/DisplayLearningSubjectList';
import { RegisterAndLoadButton } from './components/RegisterAndLoadButton';

function App() {
  const [inputText, setInputText] = useState('');
  const [learningTimeText, setLearningTimeText] = useState('');
  const [learningSubjectList, setLearningSubjectList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputAreaExist, setInputAreaExist] = useState(false);
  const [totalTime, setTotalTime] = useState(0);

  const onChangeText = (event) => {
    setInputText(event.target.value);
  };

  const onChangeLearningTime = (event) => {
    setLearningTimeText(event.target.value);
  };

  const learnSubject = '学習内容';

  const learnTime = '学習時間';

  const learnText = '入力されている学習内容 :';

  const learnTimeText = '入力されている時間 :';

  const isNumeric = (value) => {
    const regex = /^[0-9]+(\.[0-9]+)?$/; // 整数と小数を許可する正規表現
    return regex.test(value.trim());
  };

  const onClickRegister = () => {
    if (inputText && learnTimeText) {
      setInputAreaExist(false);
      if (isNumeric(learningTimeText)) {
        const addText = inputText + ' : ' + learningTimeText + ' 時間';
        const newLearningList = [...learningSubjectList, addText];
        setLearningSubjectList(newLearningList);
        calcLearningTime();

        setInputText(''); // 入力エリアを初期化
        setLearningTimeText('');
        setErrorMessage(''); // エラーメッセージをリセット
      } else {
        setErrorMessage('学習時間には数字を入力してください！！！');
      }
    } else {
      // エラーメッセージ出力
      setInputAreaExist(true);
    }
  };

  const calcLearningTime = () => {
    const timeValue = Number(learningTimeText);
    const newTotalTime = Number(totalTime) + timeValue;
    setTotalTime(newTotalTime);
  };

  const Containerstyle = {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '5px',
      margin: '8px',
      backgroundColor: '#f0f0f0', // 薄いグレー
      borderRadius: '6px',
      fontFamily: 'Arial, sans-serif'
  }

  return (
    <>
      <div className="title">学習時間記録アプリうほ！！</div>

      <InputTodo
        contentText={learnSubject}
        inputText={inputText}
        onChange={onChangeText}
      />

      <InputTodo
        contentText={learnTime}
        inputText={learningTimeText}
        onChange={onChangeLearningTime}
      />

      <DisplayText learnText={learnText} inputText={inputText} />

      <DisplayText learnText={learnTimeText} inputText={learningTimeText} />

      <RegisterAndLoadButton onClick={onClickRegister}>登録</RegisterAndLoadButton>


      {inputAreaExist && (
        <div style={{ color: 'red' }}>入力されていない内容があります</div>
      )}

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <DisplayLearningSubject learningSubjectList={learningSubjectList} />

      <div style={Containerstyle}>合計時間 {totalTime}/1000(h)</div>

      {totalTime >= 1000 && <div>（1000時間超えたら）よくがんばりました!</div>}
    </>
  );
}

export default App;
