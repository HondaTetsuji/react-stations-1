import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom"

export const ThreadPosts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const threadId = location.pathname.split("/")[2];  
//  const threadId = "1171deea-e90b-4bad-9fd6-d7eed40c7602";
  const url = "https://railway.bulletinboard.techtrain.dev/threads/"+threadId+"/posts";
  const [offset, setOffset] = useState(0);
  const [posts, setPosts] = useState([]);
  function userfetchPosts() {
    fetch(url+'?offset='+offset)
    .then(res => res.json())
    .then(json => {
      setPosts(json.posts);
      console.log(posts);
    });
  }

  useEffect(() => {
    userfetchPosts();
  }, []);

  const [draft, setDraft] = useState([]);
  const inputText = (event) => {
    setDraft(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrolHeight + 'px';
  }
  const post = (event) => {
//    event.preventDefault();
    const requestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({post: draft})
    };
    inputText(event);
    fetch(url, requestOptions)
    .then((res) => {
      console.log(res);
      userfetchPosts();
    });
  }
    
  return (
    <>
      <div className="tips-left">
        {threadId}
        <ul className="threadlist">
          {posts.map((post) => (
            <li key={post.id}>{post.post}</li>
          ))}
        </ul>
      </div>
      <div className="tips-right">
        <textarea value={draft} onChange={inputText} rows="10" placeholder="投稿しよう" /><br />
        <div className="tips-left">
          <Link to="/">戻る</Link>
        </div>
        <div className="tips-right">
          <button id="create" onClick={post}>投稿</button>
        </div>
      </div>
    </>
  )
}

export default ThreadPosts
