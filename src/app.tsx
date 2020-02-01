import * as React from 'react';
import ReactDom from 'react-dom';

const App = () => <p>hola</p>;

ReactDom.render(<App />, document.getElementById('root') as HTMLElement);
