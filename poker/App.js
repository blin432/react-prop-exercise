// Render the cards using React!
const App = (props) => {
    let { cards } = props;
    return (
        <span>{cards.map((card,i)=>{
            return <Card key={i} value={card.value} suit ={card.suit}/>
        }) 
        }  
        </span>
    )
}

// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
const Card = (props) => {
    let {value,suit} = props;
    return <img style={{witdh:'80px',height:'150px'}} src= {`cards/${value}${suit}.png`}/>
}
