import button from '../images/return.png'

function Buttons() {
    return (
        <div className="buttons">
            <button className="button button-plus">+</button>
            <button className="button button-return"><img src={button} alt="" /></button>
            <button className="button button-minus">-</button>
        </div>
    );
  };
  
  export default Buttons;