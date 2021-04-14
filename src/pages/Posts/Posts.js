import React, { useEffect } from 'react'
import { connect } from 'dva';

const Posts = ({ dispatch, posts }) => {

  useEffect(() => {
    dispatch({ type: 'posts/fetchPosts', payload: 1 });
  }, [dispatch]);
  
  const postItems = posts.list.map((item, index) =>
    <div key={ index }>
      <h1>{item.title}</h1>
      <div>{item.content.substring(0, 100)}</div>
    </div>
  )
  // 获取歌单列表
  return (
    <div className="">
      {postItems}
    </div>
  )
}

export default connect(({ posts }) => ({
  posts,
}))(Posts);