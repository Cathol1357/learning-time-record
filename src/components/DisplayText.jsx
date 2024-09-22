export const DisplayText = (props) => {
    const { learnText, inputText } = props;
  
    // CSSスタイルを関数内に定義
    const containerStyle = {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '5px',
      margin: '8px',
      backgroundColor: '#f0f0f0', // 薄いグレー
      borderRadius: '6px',
      fontFamily: 'Arial, sans-serif'
    };
  
    const learnTextStyle = {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333',
      marginRight: '10px'
    };
  
    const inputTextStyle = {
      fontSize: '16px',
      color: '#666',
      padding: '5px 10px',
      borderRadius: '5px',
      textAlign: 'left',  // 左揃え
      flexGrow: 1         // 残りのスペースを全て使う
    };
  
    return (
      <div style={containerStyle}>
        <span style={learnTextStyle}>{learnText}</span>
        <span style={inputTextStyle}>{inputText}</span>
      </div>
    );
  };
  