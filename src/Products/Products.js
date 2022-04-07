import { Link } from "react-router-dom";
import products from "./products.json"

function Products() {
    return (
        <div>
            <h1>Books</h1>
            
            <div className="row">
            {products.map((product) => (
               <div key={product.id} className="col-md-4 col-sm-6 col-xs-12">
               <Link className="card" to={`/products/${product.id}`} >
                   <img 
                   src={product.images[0]}
                   className="card-img-top" 
                   width="200px"
                   alt="product"
                   style={{
                  
                    objectFit: "cover",
                    objectPosition: "top",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                   }} />
                   <div className="card-body">
                       <h5 className="card-title">{product.title}</h5>
                       <p className="card-text">{product.description}</p>
                       <p className="card-text">{product.price} Lei</p>
                   </div>
               </Link>
           </div>
            ))}

</div>

        </div>

    );
}

export default Products;




