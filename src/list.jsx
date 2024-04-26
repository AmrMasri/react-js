
function List(){

    const fruits = ["apple", "banana", "coconut", "pineapple", "orange"];

    const ListItems = fruits.map(fruit => <li>{fruit}</li>)

    return(<ol>{ListItems}</ol>);
}

export default List;