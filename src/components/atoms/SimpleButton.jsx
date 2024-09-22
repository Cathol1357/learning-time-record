export const SimpleButton = (props) => {
    const { children, onClick} = props;

    const buttonStyle = {
        borderRadius: '8px',
        border: 'solid 0.5px',
        padding: '5px 14px',
        margin: '0px 2px',
        backgroundColor: '', // 通常時は空にしておく
        color: '', // 通常時は空にしておく
        cursor: 'pointer',
      };
    
      // ホバー時のスタイル
      const hoverStyle = {
        backgroundColor: '#79a8a9',
        color: '#fff',
      };

      return (
          <button
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = hoverStyle.backgroundColor;
              e.target.style.color = hoverStyle.color;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '';
              e.target.style.color = '';
            }}
            onClick={onClick}
          >
            {children}
          </button>
      );

}