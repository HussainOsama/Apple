import { ProductWrapper } from "../styles";

const iPadAirImgSrc = `url("https://www.apple.com/v/home/x/images/heroes/ipad-air/hero__dvsxv8smkkgi_large_2x.jpg")`;

const IPadAir = () => {
  return (
    <ProductWrapper photo={iPadAirImgSrc} textcolor="black">
      <a href="https://www.apple.com/ipad-air/">
        <div className="Product-image-container">
          <div className="Product-text">
            <h1> iPad Air</h1>
            <h2>Powerful. Colorful. Wonderful.</h2>
            <p className="Product-link">
              <a href="https://www.apple.com/ipad-air/">Learn more</a> {">"}{" "}
              &nbsp; &nbsp;{" "}
              <a href="https://www.apple.com/us/shop/goto/buy_ipad/ipad_air">
                Buy
              </a>{" "}
              {">"}
            </p>
          </div>
        </div>
      </a>
    </ProductWrapper>
  );
};

export default IPadAir;
