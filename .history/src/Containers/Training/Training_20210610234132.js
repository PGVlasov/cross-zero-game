import { React } from "react";
import classes from "./Training.module.css";

const Training = () => {
  return (
    <div className={classes.Training}>
      <div>
        <div>
          Video1
          <div className="overlay">
            <div className="video">
              <div id="frame"></div>
              <div className="close">&times;</div>
            </div>
          </div>
        </div>
        <div>
          Video1
          <div className="overlay">
            <div className="video">
              <div id="frame"></div>
              <div className="close">&times</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
