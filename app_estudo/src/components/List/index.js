
const products = [
    {title: 'Repolho', isFruit: false, id: 1},
    {title: 'Alho', isFruit: false, id: 2},
    {title: 'Maçã', isFruit: true, id: 3}
];

const listItems = products.map( product =>
    <li key={product.id}
    style={{
        color: product.isFruit ? 'magenta': 'darkgreen'
    }}
    >
        {product.title}
    </li>
);


function List (){
    return(
        <ul>{listItems}</ul>
    );
}

export default List;