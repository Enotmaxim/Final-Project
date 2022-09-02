import React, { useState} from 'react';
import './Style/Style.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/UI/PostForm";
import MySelect from "./Components/UI/select/MySelect";
import Foto from "./Components/Slider/Foto";
import backg from "./Components/UI/wild.jpg";

function App() {
    const [post , setPost]= useState(
        [
            {id: 1, title: 'Maxim', body: "LOrem12", banner: "Hello"},
            {id: 2, title: 'Vika', body: "LOrem42",banner: "Hello"},
            {id: 3, title: 'Dima', body: "LOrem213",banner: "Hello"},
        ])
    const [selectSort,setSelectedSort] = useState('')
const createPost = (newPosts) => {
        setPost([...post, newPosts])
    }


const removePost = (posts ) => {
        setPost(post.filter(p => p.id !== posts.id))
}

const sortPost = (sort) => {
        setSelectedSort(sort)
    setPost([...post.sort((a,b) => a[sort].localeCompare(b[sort]))])
}
  return (

      <div className="App" style={{
          backgroundImage: `url(${backg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width:"100%"



      }}>
    <PostForm creates={createPost}/>

          <div>
              <MySelect
                  value={selectSort}
                  onChange={sortPost}
                  defaultValue=" Sort by "
              options={[
                  {value:'title',name:'name by'},
                  {value:'body',name:'text by'}
              ]}
              />



          </div>
          {post.length
              ?
              <PostList remove ={removePost} post = {post}/>
              :
              <h1 style={{textAlign: 'center'}}> All post is gone</h1>
          }
          <Foto/>
          
    </div>
  );
}
export default App;
