import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ThreadList = () => {
  const url = "https://railway.bulletinboard.techtrain.dev/threads";
  const [offset, setOffset] = useState(0);
  const [lists, setLists] = useState([]);
  useEffect(() => {
    const fetchLists = () => {
      fetch(url+'?offset='+offset)
      .then(res => res.json())
      .then(json => {
        setLists(json);
        console.log(lists);
      });
    }
    fetchLists();
  }, []);

  return (
    <>
      スレッド一覧
      <ul className="threadlist">
        {lists.map((list) => (
          <li key={list.id}><Link to={"thread/"+list.id}>{list.title}</Link></li>
        ))}
     </ul>
    </>
  );
}

export default ThreadList
