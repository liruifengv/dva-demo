import React from 'react'

const Posts = () => {

  const posts = [
    {
      title: '111',
      content: '2323'
    }
  ]

  const postItems = posts.map((item, index) =>
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
export default Posts
