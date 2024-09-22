export const InputTodo = (props) => {
    const { contentText, inputText, onChange } = props;
  
    const style = {
      backgroundColor: '#c6e5d9',
      width: '400px',
      height: '30px',
      padding: '8px',
      margin: '8px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
    };
  
    const pStyle = {
      marginLeft: '20px',
      marginRight: '30px' // pタグの右側にマージンを追加
    };
  
    const inputStyle = {
      flexGrow: 1, // 残りのスペースを全て使って横に伸ばす
      height: '70%', // 高さを親要素と同じにする
      padding: '3px' // インプット内の余白を少し追加
    };
  
    return (
      <div style={style}>
        <p style={pStyle}>{contentText}</p>
        <input style={inputStyle} placeholder="入力してね！" value={inputText} onChange={onChange} />
      </div>
    );
  };
  