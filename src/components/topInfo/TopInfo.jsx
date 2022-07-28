import "./topInfo.scss";

const TopInfo = () => {
  return (
    <div className="topInfo">
      <div className="info-container1">
        <div className="info-bg"></div>

        <h3 className="text-center">
          <span>Wear Glasses</span> <br />
          <span className="span2">Save Eyes</span>
        </h3>
      </div>

      <div className="info-container2">
        <div className="info-bg2"></div>
        <img src="./image/12.jpg" alt="" />
      </div>
    </div>
  );
};

export default TopInfo;
