import { AddShoppingCart, Store } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useEffect } from "react";
import "../Pages/Description.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { commerce } from "../lib/Commerce";
import { UserContext } from "../../Context/UserPersonal";

const Description = ({ addTocart }) => {
  const { person } = useContext(UserContext);
  const [state, setState] = useState({});
  const params = useParams();

  // console.log(state.price);

  const handleFuction = async (id) => {
    const response = await commerce.products.retrieve(id);
    // console.log(response);
    const { name, price, image, description } = response;
    setState({
      id,
      name,
      description,
      price: price.formatted_with_symbol,
      src: image.url,
    });
  };
  useEffect(() => {
    const id = window.location.pathname.split("/");
    handleFuction(id[2]);
  }, [params.id]);

  const func = () => {
    const variable = state.price?.slice(2);
    const final = "Kr" + variable * 10 + ".00";

    return final;
  };
  const func2 = () => {
    const variable = state.price;
    return variable;
  };

  return (
    <React.Fragment>
      {/* <Topbar />
      <Navbars /> */}
      <div className="container mt-5 py-4">
        <div className="buttons">
          <Link to="/shop">
            <Button variant="contained" endIcon={<Store />}>
              Back To Store
            </Button>
          </Link>
          <Button
            variant="outlined"
            startIcon={<AddShoppingCart />}
            onClick={() => addTocart(state.id, 1)}
          >
            Add To Cart
          </Button>
        </div>

        <div className="row align-content-center mt-4 py-4 align-items-center">
          <div className="col-md-5">
            <img src={state.src} alt="" className="img-fluid pe-5" />
          </div>

          <div className="col-md-7">
            <div className="price">
              <h3>{state.name}</h3>
              <h3>{person ? func() : func2()}</h3>
            </div>
            <div className="desc">
              <h6
                dangerouslySetInnerHTML={{
                  __html: state.description,
                }}
              ></h6>
            </div>
          </div>
        </div>
        <div className="debottom"></div>
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Description;
