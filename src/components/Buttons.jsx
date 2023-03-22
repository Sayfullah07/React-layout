import button from '../images/return.png'

function Buttons({counter, setCounter}) {
    function plus(){

        setCounter(counter + 3)
    }
    function minus(){
        if(counter <= 1){
         alert('Error') 
         return 0  
        }
        setCounter(counter - 2)
    }
    function reset(){
        
        setCounter(0)
        }

        return (
        <div className="buttons">
            <button className="button button-plus" onClick={plus}>+</button>
            <button className="button button-return" onClick={reset}><img src={button} alt="" /></button>
            <button className="button button-minus" onClick={minus}>-</button>
        </div>
    );
}
    
  export default Buttons;