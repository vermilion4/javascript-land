import React from 'react';
import ReactDOM from 'react-dom';

// stateless functional component
// always return JSX

//Nesting components
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h1>Ada Ndupu</h1>;
const Message = () => {
  return <p>This is my Message</p>;
};

// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world');
// };

ReactDOM.render(<Greeting />, document.getElementById('root'));
