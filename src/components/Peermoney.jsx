import { useWindowDimensions } from "react-native";
import peer_money_img from "../assets/Peer-money-img.svg";
import "../styles/Product.css";
import "../styles/global.css";

function Peermoneyinfo() {
  const { height, width } = useWindowDimensions();

  if (width > 1440) {
    return (
      <div className="peer-money container product">
        <div className="product-container">
          <div className="peer-money-info">
            <h1>Peer.Money</h1>
            <h3>Digital money for tomorrow</h3>
            <p>
              PEER is a Non-Bank Platform that is using blockchain technology
              and cryptocurrency as the main tool in operating credit business.
            </p>
            <p>
              Peer is the first company that allow the digital asset holders
              have the access to the credit and cash loan.
            </p>
          </div>
          <div className="peer-money-img">
            <img src={peer_money_img} alt="peer money img"></img>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="peer-money container product">
      <div className="product-title">
        <h1>Peer.Money</h1>
        <h3>Digital money for tomorrow</h3>
      </div>
      <div className="product-container">
        <div className="peer-money-info">
          <p>
            PEER is a Non-Bank Platform that is using blockchain technology and
            cryptocurrency as the main tool in operating credit business.
          </p>
          <p>
            Peer is the first company that allow the digital asset holders have
            the access to the credit and cash loan.
          </p>
        </div>
        <div className="peer-money-img">
          <img src={peer_money_img} alt="peer money img"></img>
        </div>
      </div>
    </div>
  );
}

export default Peermoneyinfo;
