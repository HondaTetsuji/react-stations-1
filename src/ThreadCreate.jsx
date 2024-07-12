import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const ThreadCreate = () => {
  const navigate = useNavigate();
  const url = "https://railway.bulletinboard.techtrain.dev/threads";
  const [title, setTitle] = useState("");

  const inputText = (event) => {
    setTitle(event.target.value);
  }

  const create = (event) => {
//    event.preventDefault();
    const requestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({title: title})
    };
    inputText(event);
    fetch(url, requestOptions)
    .then((res) => {
      console.log(res);
    });
    navigate("/");
  }

  return (
    <>
      <form className="threadcreate">
        <h2>スレッド新規作成</h2>
        <input value={title} onChange={inputText} placeholder="スレッドタイトル"></input><br />
        <div className="tips-left">
          <Link to="/">Topに戻る</Link>
        </div>
        <div className="tips-right">
          <button id="create" type="button" onClick={create}>作成</button>
        </div>
      </form>
    </>
  )
}

export default ThreadCreate
