import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <nav>
      <div className="title">掲示板</div>
      <div className="tips"><Link to="/thread">スレッドを立てる</Link></div>
    </nav>
  )
}

export default Header
