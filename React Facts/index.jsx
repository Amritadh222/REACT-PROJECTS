import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <main>
    <div className="header">
      <img src="react.svg" alt="React Logo" />
      <h1>React Facts</h1>
    </div>
    <h1>Fun facts about React</h1>
    <ul>
      <li>It was developed by Facebook and released in 2013.</li>
      <li>React allows developers to create large web applications that can change data without reloading the page.</li>
      <li>It uses a component-based architecture, making it easy to reuse code.</li>
      <li>React uses a virtual DOM to optimize rendering performance.</li>
      <li>It supports server-side rendering and can be used with various back-end technologies.</li>
    </ul>
  </main>
);