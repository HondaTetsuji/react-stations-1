import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const ThreadCreate = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const textInput = (event) => {
    console.log(event);
    console.log(event.target.value);
    setTitle(event.target.value);
  }

  const create = (event) => {
    textInput(event);
    navigate("/");
  }

  return (
    <>
      <form className="threadcreate">
        <h2>スレッド新規作成</h2>
        <input value={title} onChange={textInput} placeholder="スレッドタイトル"></input><br />
        <div className="tips-left">
          <Link to="/">Topに戻る</Link>
        </div>
        <div className="tips-right">
          <button id="create" onClick={create}>作成</button>
        </div>
      </form>
    </>
  )
}

export default ThreadCreate
