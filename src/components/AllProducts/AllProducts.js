import ProductCard from "./productCard";

const AllProducts = (props) =>{

    const productList = [
        {
            id: "1",
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple.",
            price: "$549",
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        },
        {
            id: "2",
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple.",
            price: "$549",
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        },
        {
            id: "3",
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple.",
            price: "$549",
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        },
        {
            id: "4",
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple.",
            price: "$549",
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        },
        {
            id: "5",
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple.",
            price: "$549",
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        },
        {
            id: "6",
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple.",
            price: "$549",
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        },
        {
            id: "7",
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple.",
            price: "$549",
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        },
        {
            id: "8",
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple.",
            price: "$549",
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        }
    ]

    console.log(props.items)


    return(
        <div className="gridControl grid grid-cols-2 lg:grid-cols-3 mt-8">
        {
            productList.map(elem => {
                return(
                    <div className="productCard flex flex-col">
                        <h1 className="text-2xl lg:text-3xl font-semibold tracking-wide lg:mt-2">{elem.title}</h1>
                        <p className="text-lg">{elem.description}</p>
                        <p className="blue font-semibold text-2xl">{elem.price}</p>
                    </div>     
                )
            })
        }
        </div>
    )
}

export default AllProducts;
