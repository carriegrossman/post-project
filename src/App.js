import React, {useState, useEffect} from 'react';
//import posts from "./posts";
import Post from "./Post";
//import UserButton from "./UserButton";
import SelectUserDropdown from "./SelectUserDropdown";

const App = () => {

  const [filteredPosts, setFilteredPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState(null);
  

  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(resp=>resp.json())
      .then(data=>{
        setFilteredPosts(data)
        setPosts(data)
     })

  }, []) //only runs when isLoading is changed


  const whenUserIdSelected = (user) => {
    let selectedUser = user;
    setFilteredPosts(posts.filter(post=>post.userId === selectedUser))
  }


  const setActive=(postId)=>{
    setActivePost(postId)
  }


  let userIds=[...new Set(posts.map(post=>post.userId))]


    return (
      <div className="main-content">
        <div>
          <SelectUserDropdown userIds={userIds} whenSelected={whenUserIdSelected} />
          <button onClick={()=>setFilteredPosts(posts)} >reset</button>
        </div> 

        <ul>
          {filteredPosts.map(post=>(
            <Post 
              setActive={setActive} 
              key={post.id} 
              post={post}
              isActive={post.id === activePost}
              />
            )
          )}
        </ul>
      </div>
  
    );
}

export default App;