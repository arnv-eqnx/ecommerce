const ProductCard = props =>{
    return(
        <div className="productCard flex flex-col">
            <h1 className="text-2xl lg:text-3xl font-semibold tracking-wide lg:mt-2">{elem.title}</h1>
            <p className="text-lg">{elem.description}</p>
            <p className="blue font-semibold text-2xl">{elem.price}</p>
        </div>
    )
}

export default ProductCard;