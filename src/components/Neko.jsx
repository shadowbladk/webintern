import { useWindowDimensions } from "react-native";
import neko_img from "../assets/Neko_img.svg";
import "../styles/global.css";
import "../styles/Product.css";

// import useWindowDimensions from './Hooks/Windowdimensions'; //not in used rn *supposed to import custom hook from Hooks folder

function Nekoinfo() {
  const { height, width } = useWindowDimensions();

  if (width > 1440) {
    return (
      <div className="neko container product" id="product">
        <div className="product-container">
          <div className="neko-img">
            <img src={neko_img} alt="neko img"></img>
          </div>
          <div className="neko-info">
            <h1>NEKO</h1>
            <h3>Welcome to the meowniverse</h3>
            <p>
              At Neko, we focus on developing start-up business ideas in the
              blockchain industry by providing funding and access to investors.
              Our criteria for choosing the business to incubate are simple, we
              select businesses with great potential that will disrupt the
              traditional technology using blockchain technology while also
              maintaining high returning rate of success in this industry, for
              example, Metaverse, Gamefi, Defi, NFT, etc. We promised on
              delivering the best to benefit both startups and investors.
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="neko container product" id="product">
      <div className="product-title">
        <h1>NEKO</h1>
        <h3>Welcome to the meowniverse</h3>
      </div>
      <div className="product-container">
        <div className="neko-img">
          <img src={neko_img} alt="neko img"></img>
        </div>
        <div className="neko-info">
          <p>
            At Neko, we focus on developing start-up business ideas in the
            blockchain industry by providing funding and access to investors.
            Our criteria for choosing the business to incubate are simple, we
            select businesses with great potential that will disrupt the
            traditional technology using blockchain technology while also
            maintaining high returning rate of success in this industry, for
            example, Metaverse, Gamefi, Defi, NFT, etc. We promised on
            delivering the best to benefit both startups and investors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nekoinfo;
