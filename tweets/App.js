// Render the tweets using React!
const App = (props) => {
    let { tweets } = props;
    return (
        <span>
            {
                tweets.map((tweet,i)=>{
                    return <div key={i} style={{width:'500px',height:'200px' ,border:'1px solid black',margin:'10px'}}>
                                <User image={tweet.user.profilePic} username = {tweet.user.username} handle= {tweet.user.handle} />
                                <Tweet tweet={tweet.text}/>
                                <Metrics likes = {tweet.likes} retweets = {tweet.retweets} replies = {tweet.replies} />   
                           </div>
                })
            }
        </span>
    )
}

 // CHALLENGE: Write a separate Tweet component for use in the App component
const Tweet = (props) =>{
    let {tweet} = props;
    return <div>{tweet}</div>
}; 

  // CHALLENGE: Write a separate User component for use in the Tweet component
const User = (props) =>{
    let {image,username,handle} = props;
    return  <div>
                <img style={{width:'75px',height:'75px'}} src={`${image}`}/>
                <div style={{display:'inline-block'}}>
                    <div>{username}</div> 
                    <div>{handle}</div>
                </div>
                <img style={{display: "inline-block"}} src="twitterIcons/check-circle.svg"/>
            </div>
};


// CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)
const Metrics = (props) => {
    let {likes,retweets,replies} = props;
    return <div>
        <span><img src="twitterIcons/heart.svg"/>{likes}</span>
        <span> <img src="twitterIcons/repeat.svg"/>{retweets}</span>
        <span> <img src="twitterIcons/message-circle.svg"/>{replies}</span>
    </div>
};  
// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly