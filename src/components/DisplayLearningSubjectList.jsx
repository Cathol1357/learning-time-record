export const DisplayLearningSubject = (props) => {

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

    const { learningSubjectList } = props;
    return (    
      <div>
        <p style={containerStyle}>登録した学習内容と学習時間</p>
          <ul>
            {learningSubjectList.map((todo) => (
              <li key={todo}>
                <div>
                  <p>{todo}</p>
                </div>
              </li>
            ))}
          </ul>
      </div>
    );
  }; 