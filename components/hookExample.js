"use client";

import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>Hello CodeSandbox</h1>
			<h2>You clicked {count} times!</h2>

			<button onClick={() => setCount(count - 1)}>Decrement</button>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
}

export default function Final() {
	return <App />;
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
