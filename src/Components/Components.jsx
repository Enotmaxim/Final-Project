import React from 'react';
import MyButton from "./UI/button/MyButton";
import AcceptBtn from "./UI/button/AcceptBtn";

const Components = (props) => {

    return (
        <div className="block__style">
            <div className="text_profile">
                <div className="profile_info">
                    <h1>Bios :{props.number} {props.post.banner}</h1>
                    <h1> My name is {props.post.title}</h1>
                    <p> Prescribe : {props.post.body}</p>
                </div>
                <div className="destine" style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <MyButton>Add to friend</MyButton>
                    <AcceptBtn onClick = {()=> props.remove(props.post) }> Remove friend</AcceptBtn>
                </div>
            </div>
        </div>
    );
};

export default Components;
