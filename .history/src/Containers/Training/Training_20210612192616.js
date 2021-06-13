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
              <iframe
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
              <div className="close">&times;</div>
            </div>
          </div>
        </div>
        <div>
          Video1
          <div className="overlay">
            <div className="video">
              <iframe
                src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
              <div className="close">&times;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
