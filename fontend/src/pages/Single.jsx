import React from 'react'
import user from '../assets/avatar_trung.jpg'
import { Link } from 'react-router-dom'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import Menu from '../component/Menu'
const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://localhouze.com/wp-content/uploads/2022/11/Quan-Baggy-Nam-Khaki-Vang-1-430x430.jpg" alt="" />
        <div className='user'>
          <img src={user} alt="" />
          <div className="info">
            <span>Liver</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link className='links' to={`/write?edit=2`}>
              <AiOutlineEdit style={{ width: '20px', height: '20px', cursor: 'pointer', backgroundColor: 'rgb(15, 69, 155,0.7)' }} />
            </Link>
            <AiOutlineDelete style={{ width: '20px', height: '20px', cursor: 'pointer', backgroundColor: 'red' }} />
          </div>
        </div>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis modi provident praesentium, dolorem nemo ducimus omnis error voluptate unde consectetur suscipit ut, sint velit sunt. Praesentium corrupti voluptas eius deleniti.
          Debitis, quo esse. Sunt excepturi vitae obcaecati veniam quae nam, hic, cum sint dolorem, ex libero nobis veritatis! Assumenda iure in nisi facilis id expedita quibusdam aliquid error nihil incidunt?
          Eius, explicabo? Reprehenderit obcaecati in natus illo deserunt odio, ad repellendus omnis rerum consectetur, esse quod aperiam, totam velit voluptatem quaerat et est non unde doloremque? Amet fugit reiciendis sequi.
          Dolorem, temporibus aliquam? Odit fuga eius, soluta sint qui est molestias voluptas perspiciatis amet laboriosam vel beatae maxime nostrum itaque eveniet eum tempore praesentium neque esse nulla recusandae? Quisquam, magnam!
          Officia, expedita aperiam! Molestias, nostrum accusamus voluptatum cum qui aperiam eum aliquid tempore ratione eaque enim veniam minus eveniet error voluptatibus, atque repudiandae quae fugiat. Suscipit pariatur dolorem ipsa at.
          Nam minus quos atque corporis? Illo aliquam, saepe reprehenderit blanditiis illum eligendi voluptatem vitae animi soluta doloremque qui autem, repellat officia dolores vero deleniti iure asperiores debitis quis iusto enim?
          Numquam laborum perspiciatis vero itaque, reprehenderit fuga harum earum facilis error vel dicta, at nobis eius quo. Blanditiis, porro, vero aspernatur doloribus ea debitis officia commodi quaerat odio, minima adipisci?</p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Single
