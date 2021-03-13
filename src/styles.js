import styled from "styled-components";

export const ProductWrapper = styled.div`
  .Product-image-container {
    background-image: ${(props) => props.photo};
    height: 700px;
    background-position: center;
    background-size: cover;
    position: relative;
    color: ${(props) => props.textcolor};
  }

  .Product-text {
    text-align: center;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h1 {
    font-size: 48px;
    line-height: 1.08349;
    font-weight: 600;
    letter-spacing: -0.002em;
  }

  h2 {
    font-size: 24px;
    line-height: 1.16667;
    font-weight: 400;
    letter-spacing: 0.009em;
  }

  .Product-description {
    font-size: 19px;
    line-height: 1.47059;
    font-weight: 400;
    letter-spacing: -0.022em;
    color: #8d8d91;
    font-style: normal;
  }

  .Product-link {
    color: #06c;
    font-size: 19px;
    line-height: 1.47059;
    font-weight: 400;
    letter-spacing: -0.022em;
    font-style: normal;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .Product-link a:visited {
    text-decoration: none;
    color: #06c;
  }

  sup a {
    font-size: smaller;
    color: #8d8d91;
  }

  sup a:visited {
    text-decoration: none;
    color: #8d8d91;
  }
`;
