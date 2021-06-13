import { React } from "react";
import classes from "./Training.module.css";

const Training = () => {
  return (
    <div className={classes.Training}>
      <div>
        <div>
          Video1
          <div class="overlay">
            <div class="video">
              <div id="frame"></div>
              <div class="close">&times;</div>
            </div>
          </div>
        </div>
        <div>Video1</div>
      </div>
    </div>
  );
};

export default Training;
