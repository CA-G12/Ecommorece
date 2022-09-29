import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CategoryFilter from '../Filters/CategoryFilter'
import PriceFilter from '../Filters/PriceFilter';
import Card from '../card/Card';

function ProductsPage({ auth, name }) {
    const location = useLocation();

    const offset = +(location.pathname.slice(1));
    const [CategoryState, setCategoryState] = useState('all');
    const [PriceState, setPriceState] = useState({ max: 100, min: 0 });
    const [cards, setCards] = useState([]);

    const [pages, setPages] = useState([]);



    useEffect(() => {

        fetch(`/products/?name=${name}&minPrice=${PriceState.min}&maxPrice=${PriceState.max}&category=${CategoryState}&offset=${((offset - 1) * 15)}`

        )
            .then((res) => res.json())
            .then((data) => {
                if(data.msg === "No data Found!"){
                   throw new  Error(data.msg) 
                }
                const arr = new Array(Math.ceil(+data.count / 15));
                arr.fill(0)
                setPages(arr)
                setCards(data.data)
            })
            .catch(err => console.log(err))

    }, [name, PriceState, CategoryState, offset]);

    return (
        <>

            <div className="filterSection">
                <CategoryFilter CategoryState={CategoryState} setCategoryState={setCategoryState} />
                <PriceFilter PriceState={PriceState} setPriceState={setPriceState} />

            </div>
            <div
                style={
                    {
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',

                    }
                }
            >
                <div style={{
                    width: '80%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 70,
                    marginLeft: 265,
                }}
                >


                    {

                        cards.length ?
                            cards
                                .map((card) => <Card name={auth} card={card} key={card.id} />) : (<h1>No match found!</h1>)
                    }


                </div>
                <div className="pagination">
                    <NavLink to={offset > 1 ? `/${offset - 1}` : ''} >&laquo;</NavLink>
                    {

                        pages.length ?
                            // eslint-disable-next-line react/no-array-index-key
                            pages.map((ele, i) => <NavLink key={i} to={`/${i + 1}`}>{i + 1}</NavLink>) : (<h2>sami</h2>)
                    }


                    <NavLink to={offset <= pages.length ? `/${offset + 1}` : ''}>&raquo;</NavLink>
                </div>

            </div>



        </>

    )
}
export default ProductsPage;