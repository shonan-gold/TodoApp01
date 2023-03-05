import React from "react";

export const Incomplete = (props) => {
  const { onClickDelete, onClickComplete, incomplete } = props;
  return (
    <div className="inCompleteArea areaBase">
      <h2>未完了のTODO</h2>
      <ul className="incompleteList">
        {incomplete.map((todo, index) => {
          return (
            <li key={todo}>
              <span>{todo}</span>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
