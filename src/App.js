import './App.css';

function App() {
  //1 Задание
  const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555]

  const positive = array.filter(item => {
    if(item > 0){
      return <div>{item}</div>
    }
  }
  )

  //2 Задание

  const messages = [
    {message: 'hello', error: true},  
    {message: 'javascript', error: false},  
    {message: 'expovisiov', error: true},  
    {message: 'react', error: true},  
    {message: 'angular', error: false}, 
    {message: 'es6', error: false}, 
  ];

  const messagesFilter = messages.filter(item =>{
    if(item.error == false){
      console.log(item)
    }
  }
  )

  //3 Задание

  const words= ['экспо', 'js', 'react', 'css', 'angular', 'vue', 'html'];

  const wordsMap = words.map(item =>{ 
    if(item.length < 5){
      return '*'
    }
    else{ 
      return item
    }
  }
  )
    
  //4 Задание

  const sendMessage = (message => {});

  const half = (number) => number / 2;

  const showConsole =  () => console.log('Экспо');

  const concatWords = (first,second) => first + second;

  //5 Задание 

  function justText(){
    return 'expo'
  };

  function logging(text){
    console.log(text)
  };

  function add (x, y){
    let z = 3;

    return z * x * y 
  };

  function onlyPositive(number){
    if(number < 0){
      return false
    }
    else{
      return true
    }
  };
    

  
  return (
    <div className='container'>
      {wordsMap}
    </div>
  );
};

export default App;