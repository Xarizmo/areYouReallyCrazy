import React, { useState } from "react";

const App = () => {
	const [fruit, setFruit] = useState("🍇");
	const [index, setIndex] = useState(0);
	const [areYouReallyCrazy, setAreYouReallyCrazy] = useState(0);

	const fruits = ["🍇", "🍈", "🍉", "🍊", "🥥"];

	return (
		<>
			<p>You like {fruit}</p>
			<button
				onClick={() => {
					// по клику увеличиваем значение счетчика в state на единицу
					setAreYouReallyCrazy(areYouReallyCrazy + 1);
					// по клику устанавливаем в state новое значение index + проверяем, чтобы index не выходил за границы массива
					setIndex(index < fruits.length - 1 ? index + 1 : 0);
					// по клику устанавливаем в state новое значение fruit как новый элемент массива по индексу выше
					setFruit(fruits[index]);
				}}
			>
				Really?
			</button>
			<span>{areYouReallyCrazy}</span>
		</>
	);
};

export default App;
