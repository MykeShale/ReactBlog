import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="../img/img2.jpg" alt="" />
        <div className="user">
          <img src="img/post.jpg" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam id earum odit eveniet hic cumque.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam accusantium delectus provident consequuntur sint illo. Dolorem saepe, cupiditate assumenda nemo veniam animi beatae nesciunt, dolore enim aliquid pariatur adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam accusantium delectus provident consequuntur sint illo. Dolorem saepe, cupiditate assumenda nemo veniam animi beatae nesciunt, dolore enim aliquid pariatur adipisci?</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam accusantium delectus provident consequuntur sint illo. Dolorem saepe, cupiditate assumenda nemo veniam animi beatae nesciunt, dolore enim aliquid pariatur adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam accusantium delectus provident consequuntur sint illo. Dolorem saepe, cupiditate assumenda nemo veniam animi beatae nesciunt, dolore enim aliquid pariatur adipisci?</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae libero itaque voluptas temporibus aperiam, beatae perferendis deserunt ab in non ipsa enim delectus unde facilis reiciendis facere id maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae libero itaque voluptas temporibus aperiam, beatae perferendis deserunt ab in non ipsa enim delectus unde facilis reiciendis facere id maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae libero itaque voluptas temporibus aperiam, beatae perferendis deserunt ab in non ipsa enim delectus unde facilis reiciendis facere id maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam accusantium delectus provident consequuntur sint illo. Dolorem saepe, cupiditate assumenda nemo veniam animi beatae nesciunt, dolore enim aliquid pariatur adipisci?</p>

      </div>
      <Menu />
    </div>
  )
}

export default Single