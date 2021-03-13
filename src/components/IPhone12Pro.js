import { ProductWrapper } from "../styles";

const iPhone12ProImgSrc = `url("https://www.apple.com/v/home/x/images/heroes/iphone-12-pro/iphone_12_pro_us__e5oyysg4k0ya_large_2x.jpg")`;

const IPhone12Pro = () => {
  return (
    <ProductWrapper photo={iPhone12ProImgSrc} textcolor="white">
      <a href="https://www.apple.com/iphone-12-pro/">
        <div className="Product-image-container">
          <div className="Product-text">
            <h1> iPhone 12 Pro</h1>
            <h2>It's a leap year.</h2>
            <div className="Product-description">
              <p>
                From $41.62/mo. or $999 before trade-in.{" "}
                <sup>
                  <a href="https://www.apple.com/#footnote-2">2</a>
                </sup>
              </p>
              <p>Buy directly from Apple with special carrier offers.</p>
            </div>
            <p className="Product-link">
              <a href="https://www.apple.com/iphone-12-pro/">Learn more</a>{" "}
              {">"} &nbsp; &nbsp;{" "}
              <a href="https://www.apple.com/us/shop/goto/buy_iphone/iphone_12_pro">
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

export default IPhone12Pro;
