import React from "react";

export const Complete = (props) => {
  const { complete, onClickBack } = props;
  return (
    <div className="completeArea areaBase">
      <h2>完了したTODO</h2>
      <ul className="completeList">
        {complete.map((todo, index) => {
          return (
            <li key={todo}>
              <span>{todo}</span>
              <button onClick={() => onClickBack(index)}>戻る</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
