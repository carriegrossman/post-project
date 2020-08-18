import React, {useState, useEffect} from 'react';
//import posts from "./posts";
import Post from "./Post";
//import UserButton from "./UserButton";
import SelectUserDropdown from "./SelectUserDropdown";

const App = () => {

  const [filteredPosts, setFilteredPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState(null);
  const [isLoading, setStatus] = useState(null);

  useEffect(()=>{
    if (isLoading) {
      console.log("is loading")
      fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(resp=>resp.json())
      .then(data=>{
        setStatus(false)
        setPosts(data)
        setFilteredPosts(data)
     })
    }
  }, [isLoading]) //only runs when isLoading is changed


  const whenUserIdSelected=(user)=>{
    let selectedUser = user;
    let filteredPosts = posts.filter(post=>post.userId === selectedUser)
    setFilteredPosts(filteredPosts)
  }

  const setActive=(postId)=>{
    setActivePost(postId)
  }

    return (
      <div className="main-content">
        <div>
          {
          /*userIds.map(uid=><UserButton whenClicked={this.whenUserIdSelected.bind(this)} key={uid} user={uid}/>)*/
          }
          <SelectUserDropdown userIds={[...new Set(posts.map(post=>post.userId))]} whenSelected={whenUserIdSelected} />
          <button onClick={()=>setFilteredPosts(posts)} >reset</button>
        </div> 

        <ul>
          {isLoading ? "loading..." :
          filteredPosts.map(post=>(
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