
const Colors = (changeColor) =>{
    return <div>
        <h2 style={{color:'red'}} onClick={() => changeColor('red')}>Red</h2>
        <h2 style={{color:'blue'}} onClick={() => changeColor('blue')}>Blue</h2>
        <h2 style={{color:'green'}} onClick={() => changeColor('green')}>Green</h2>
        <h2 style={{color:'purple'}} onClick={() => changeColor('purple')}>Purple</h2>
        <h2 style={{color:'pink'}} onClick={() => changeColor('pink')}>Pink</h2>
       
        </div>

    }

export {Colors}