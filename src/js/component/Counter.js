import React, {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)
		setInterval(() => {
			const newCounter = counter +1
			setCounter(newCounter)
            clearInterval();
		}, 1000);
    return(
        <div className="container-fluid text-center">
            <h2>React Counter</h2>
            <div className="bg-dark d-flex justify-content-center">
                <i className="fa-solid fa-clock text-white m-3"></i>
                <h3 className="text-white mt-2">0</h3>
                <h3 className="text-white mt-2">{counter}</h3>
            </div>
        </div>
    );

}

export default Counter;