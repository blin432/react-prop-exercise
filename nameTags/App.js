// Render the name tags using React!
const App = (props) => {
    let { nameTags } = props;
    return (
        <span>{
            nameTags.map((nameTag,tagKey) =>{
                return<NameTag key={tagKey} name ={nameTag}/>
            })
        }
        </span>
    )
}

// CHALLENGE: Write a separate NameTag component for use in the App component
// TIP: Use props to pass the name to each NameTag component


const NameTag = (props) => {
    let {name} = props;
    return <div style={{width:'500px',border:'1px solid black',margin:'10px'}}>
        <h4>Hello, my name is:</h4>
        <div>{name}</div>
    </div>
}