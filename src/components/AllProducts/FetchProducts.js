import AllProducts from "./AllProducts";
import productList from '../../productJSON/products.json'
import { useEffect, useState } from "react";
import Image from "next/image";

const FetchProducts = () =>{   


    const [records, setRecords] = useState([])

    useEffect( ()=>{
        async function fetchData() {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setRecords(data.products);
        }
        fetchData();
    }, [] )

    return (
        <div className="gridControl grid  grid-cols-1 mt-8">
          {records.map((product, index) => (
            <div key={index} className="productCard flex flex-col ">
                {/* <Image src={product.thumbnail} width="325" height="100" /> */}
                <div className="thumbnailContainer">
                    <img src={product.thumbnail} className="object-fill"/>
                </div>
                <div className="mx-4">
                    <h1 className="text-xl lg:text-2xl lg:min-h-[2.5rem] font-semibold lg:mt-2">{product.title}</h1>
                    <p className="">{product.description}</p>
                    <p className="blue font-semibold text-xl">${product.price}</p>
                    <p className="">Rating: {product.rating} out of 5</p>
                </div>
            </div>
          ))}
        </div>
      );

    // return(
    //     <div>
    //         {
    //             records.products.map((item, index)=>{
    //                 return(
    //                     <li key={index}>{item.products[index].title}</li>
    //                 )
    //             })
    //         }
    //     </div>
    // )



    // fetch('https://dummyjson.com/products')
    // .then(res => res.json())
    // .then( list => {
    //     console.log(list);

            
        
    //       const boxes = [];

    //       for (const key in myObj) {
    //         if (myObj.hasOwnProperty(key)) {
    //           const values = myObj[key];
    //           const boxContent = values.map((value, index) => (
    //             <p key={index}>{value}</p>
    //           ));
    //           boxes.push(<div key={key}>{boxContent}</div>);
    //         }
    //       }
          
    //       return <div>{boxes}</div>;





        // return(
        //     <div className="gridControl grid grid-cols-2 lg:grid-cols-3 mt-8">
        //         {
        //             list.map(elem =>{
        //                 return(
        //                     <div className="productCard flex flex-col">
        //                         <h1 className="text-2xl lg:text-3xl font-semibold tracking-wide lg:mt-2">Hello</h1>
        //                         <p className="text-lg">HI</p>
        //                         <p className="blue font-semibold text-2xl">heloooo</p>
        //                     </div> 
        //                 )
        //             })
        //         }
        //     </div>  
            
        // )    
    // })

    // return(
    //     <div>
    //         <AllProducts />
    //     </div>
    // )
            
}

export default FetchProducts;