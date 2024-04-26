
function List(){

    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "banana", calories: 105},
                    {id: 3, name: "coconut", calories: 159},
                    {id: 4, name: "pineapple", calories: 37},
                    {id: 5, name: "orange", calories: 45}];

   // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    //  const highCalFruits = fruits.filter(fruit => fruit.calories >= 95);

    const ListItems = fruits.map(fruit =>  <li key={fruit.id}>
                                                {fruit.name} &nbsp; 
                                             <b>{fruit.calories}</b></li>);

    return(<ol>{ListItems}</ol>);
}

export default List;