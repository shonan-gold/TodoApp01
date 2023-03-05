import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { Incomplete } from "./components/Incomplete";
import { Complete } from "./components/Complete";
import "./index.css";

export const App = () => {
  const [inputText, setInputText] = useState("");
  const [incompleteList, setIncompleteList] = useState([]);
  const [completeList, setCompleteList] = useState([]);

  // フォームに入力されたテキストを表示
  const onChangeTodoText = (event) => {
    setInputText(event.target.value);
  };
  // フォームに入力されたテキストをTODOとして追加
  const onClickAdd = () => {
    if (inputText === "") return;
    const newIncompleteList = [...incompleteList, inputText];
    setIncompleteList(newIncompleteList);
    setInputText("");
  };
  // 削除ボタンを押されたら、その場所を削除
  const onClickDeleteTodos = (index) => {
    const newIncompleteList = [...incompleteList];
    newIncompleteList.splice(index, 1);
    setIncompleteList(newIncompleteList);
  };
  // 完了ボタンを押されたら、未完了から削除、完了へ再表示
  const onClickCompleteTodos = (index) => {
    const newIncompleteTodo = [...incompleteList];
    newIncompleteTodo.splice(index, 1);

    const newCompleteList = [...completeList, incompleteList[index]];
    setIncompleteList(newIncompleteTodo);
    setCompleteList(newCompleteList);
  };
  // 戻るボタンを押されたら、完了から削除、未完了へ再表示
  const onClickBackTodos = (index) => {
    const newCompleteTodo = [...completeList];
    newCompleteTodo.splice(index, 1);

    const newIncompleteList = [...incompleteList, completeList[index]];
    setIncompleteList(newIncompleteList);
    setCompleteList(newCompleteTodo);
  };

  return (
    <div className="all">
      <InputTodo
        todoText={inputText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteList.length >= 5}
      />
      {incompleteList.length >= 5 && (
        <p className="upTodo">予定は５つまでですよ！</p>
      )}
      <Incomplete
        incomplete={incompleteList}
        onClickDelete={onClickDeleteTodos}
        onClickComplete={onClickCompleteTodos}
      />
      <Complete complete={completeList} onClickBack={onClickBackTodos} />
    </div>
  );
};
