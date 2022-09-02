import React from 'react';
import Components from "./Components";

const PostList = ({post , banner, remove}) => {
    return (
        <div className="App"
             style={{
                 display:"flex",
                 justifyContent:"center",
                 flexWrap:"wrap",
        }}>
            <h1 style={{textAlign: 'center'}}>{post.banner}</h1>
            {post.map ((post) =>
                <Components remove={remove} post={post} key = {post.id} title ={banner}/>
            )}
        </div>
    );
};

export default PostList;
