// Render the circles using React!
const App = (props) => {
    let { circles } = props;
    return (
        <span>
        {
            circles.map((circle,i) =>{
            return <Circle key={i} color = {circle.color} radius = {circle.radius}/>
        })
        }
        </span>
    )
}

 // CHALLENGE: Write a separate Circle component for use in the App component
const Circle =(props) =>{
    let {color,radius} =  props;
   return  <div style={{width:radius,backgroundColor:color, height:radius, borderRadius:radius}}></div>
};

