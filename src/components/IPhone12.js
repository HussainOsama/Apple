import { ProductWrapper } from "../styles";

const iPhone12ImgSrc = `url("https://www.apple.com/v/home/x/images/heroes/iphone-12/iphone_12_us__fo0stbby242m_large_2x.jpg")`;

const IPhone12 = () => {
  return (
    <ProductWrapper photo={iPhone12ImgSrc} textcolor="black">
      <a href="https://www.apple.com/iphone-12/">
        <div className="Product-image-container">
          <div className="Product-text">
            <h1> iPhone 12</h1>
            <h2>Blast fast past.</h2>
            <div className="Product-description">
              <p>
                From $29.12/mo. or $699 before trade-in.
                <sup>
                  <a href="https://www.apple.com/#footnote-1">1</a>
                </sup>
              </p>
              <p>Buy directly from Apple with special carrier offers.</p>
            </div>
            <p className="Product-link">
              <a href="https://www.apple.com/iphone-12/">Learn more</a> {">"}{" "}
              &nbsp; &nbsp;{" "}
              <a href="https://www.apple.com/shop/buy-iphone/iphone-12">Buy</a>{" "}
              {">"}
            </p>
          </div>
        </div>
      </a>
    </ProductWrapper>
  );
};

export default IPhone12;
