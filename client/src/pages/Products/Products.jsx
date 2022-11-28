import React, { useEffect, useState } from "react";
import { getProducts } from "../../actions/ProductsAction";
import Product from "../Products/Products";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { postProducts } from '../../actions/ProductsAction';


const Products = () => {
    // const params = useParams()
    // const dispatch = useDispatch();
    // const user = useSelector((state) => state.AuthReducer.authData);
    // const products = useSelector((state) => state.ProductReducer);
    // let loading = useSelector((state) => state.ProductReducer);
    // useEffect(() => {
    //   dispatch(getProducts(user._id));
    // }, []);
    // if(params.id) products = products.filter((product)=> product.sellerId===params.id)
//Post
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.ProductReducer);



    const [data, setData] = useState({
        title: "",
        description: ""
    });

    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(postProducts(data))
    }

    const resetForm = () => {
        setData({
            title: "",
            description: ""
        })
    }



  return (
  <>
    <div>Products</div>
    {/* {loading
        ? "Fetching posts...."
        : products ? 
        products.map((product, id) => {
            return <Product data={product} key={id} />;
          })
          :
          <>No</>} */}
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Title"
        name="title"
        onChange={handleChange}
        value={data.title}/>

        <input 
        type="text" 
        placeholder="Description"
        name="description"
        onChange={handleChange}
        value={data.description}/>

      <button className='mt-3 p-1 block border-2 border-cyan-500 bg-cyan-500  w-2/4 rounded text-white hover:bg-white hover:text-cyan-500' type='submit'>
          Post
      </button>
      </form>
    </div>
  </>
  )
}

export default Products