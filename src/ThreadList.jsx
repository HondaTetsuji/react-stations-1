import { useState, useEffect } from 'react';

export const ThreadList = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    const fetchLists = () => {
      fetch('https://railway.bulletinboard.techtrain.dev/threads')
      .then(res => res.json())
      .then(json => {
        setLists(json);
        console.log(json);
      });
    }
    fetchLists();
  }, []);

  return (
    <>
      スレッド一覧
      <ul className="threadlist">
        {lists.map((list) => (
          <li key={list.id}>{list.title}</li>
        ))}
     </ul>
    </>
  );
}

export default ThreadList
