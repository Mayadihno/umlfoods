import React, { useContext } from "react";
import "../Pages/Product.css";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserPersonal";
const Products = ({ product, addTocart }) => {
  const { person } = useContext(UserContext);

  const func = () => {
    const variable = product.price.formatted_with_symbol;
    const yake = variable.slice(2);
    const final = "Kr" + yake * 10 + ".00";

    return final;
  };
  const func2 = () => {
    const variable = product.price.formatted_with_symbol;

    return variable;
  };
  return (
    <React.Fragment>
      <div className="product">
        <div className="card shadow-lg">
          <Link to={"/description/" + product.id}>
            <div className="card-img-top">
              <img src={product.image.url} alt="" className="img-fluid" />
            </div>
            <div className="card-body">
              <p className="text-title">{product.name}</p>
              <p
                className="text-body fw-bold text-black"
                dangerouslySetInnerHTML={{
                  __html:
                    product.description.substring(0, 100) +
                    `   .... click to Read More`,
                }}
              ></p>
            </div>
          </Link>
          <div className="cards-footer">
            <span className="text-title">{person ? func() : func2()}</span>
            <div
              className="cards-button"
              onClick={() => addTocart(product.id, 1)}
            >
              <ShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
