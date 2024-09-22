import { SimpleButton } from "./atoms/SimpleButton";

export const RegisterAndLoadButton = (props) => {
    const { children, onClick } = props;
  
    const style = {
      display: 'flex', // フレックスボックスを使う
      justifyContent: 'center', // 水平方向の中央揃え
      alignItems: 'center', // 垂直方向の中央揃え
    };

    const onClickLoadDB = () => {
      alert('うほ');
    }
  
    return (
      <div style={style}>
        <SimpleButton onClick={onClick}>{children}</SimpleButton>
        <SimpleButton onClick={onClickLoadDB}>データをロード</SimpleButton>
      </div>
    );
  };
  