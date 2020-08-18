import React, {useState, useEffect} from "react"

const Post = ({post, setActive, isActive})=>{

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        const {id} = post;
        if(!comments.length > 0 && isActive){
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(resp=>resp.json())
                .then(data=>setComments(data))
            }
    },[comments, isActive, post])
    
    return(
        <li onClick={()=>setActive(post.id)} id={'post_'+post.id}>
            <h3>{post.title}</h3>
            <div>{post.body}</div>
            <aside>{post.userId}</aside>
            <div>{isActive &&
            comments.map(comment=><div key={comment.id}>{comment.id}</div>)}
            </div>
        </li>
    )
        
}

export default Post;