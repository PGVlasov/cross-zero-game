import { React } from "react";
import classes from "./Training.module.css";

const Training = () => {
  const showVideo = () => {
    console.log("videoCliced");
  };
  return (
    <div className={classes.Training}>
      <div className="video">
        Video1
        <div className={classes.overlay} onClick={this.showVideo}>
          <iframe
            src="https://www.youtube.com/embed/dnXMr9gQHL8"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
          <div className="close">&times;</div>
        </div>
      </div>
      <div className="video">
        Video1
        <div className={classes.overlay}>
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
      <div className="video">
        Video1
        <div className={classes.overlay}>
          <iframe
            src="https://www.youtube.com/embed/HM0BkVhzjsc"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
          <div className="close">&times;</div>
        </div>
      </div>
    </div>
  );
};

export default Training;
