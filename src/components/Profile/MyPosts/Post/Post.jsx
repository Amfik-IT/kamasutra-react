import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
      <div className={s.item}>
        <img alt="user" src="https://c0.klipartz.com/pngpicture/136/22/gratis-png-perfil-de-usuario-computadora-iconos-chica-cliente-avatar-thumbnail.png"/>
        {props.message}
        <div>
          <span className={s.likeCount}>{props.likeCount}</span> <span className={s.icon}>{props.likeIcon}</span>
        </div>
      </div>
    );
}

export default Post;