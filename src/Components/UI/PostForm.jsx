import React, {useState} from 'react';
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";

const PostForm = ({creates}) => {
    const [posts , setPosts] = useState({title: '' , body: '' , banner: ''})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPosts = {
            ...posts, id: Date.now()
        }
        creates(newPosts)
        setPosts({title: '' , body: '' , banner: ''})
    }


    return (
        <form style={{
            backgroundColor:"black",
            opacity:"0.7",
            boxShadow:"1px 5px 60px 50px black",
            display:"flex",
            justifyContent:"center",
            padding:"20px 4px 5px 2px"}}>

            <MyInput
                value = {posts.banner}
                     onChange ={e => setPosts({...posts, banner: e.target.value})}
                     type="text"
                     placeholder="Bios :"              />
            <MyInput value = {posts.title}
                     onChange ={e => setPosts({...posts, title: e.target.value})}
                     type="text"
                     placeholder="Name post :"         />

            <MyInput value = {posts.body}
                     onChange ={e => setPosts({...posts, body: e.target.value})}
                     type="text"
                     placeholder="Prescribe post :"    />

            <MyButton onClick ={addNewPost} >Создать пост </MyButton>

        </form>

    );
};


export default PostForm;