import { React } from "react";
import classes from "./Training.module.css";

const Training = () => {
  return (
    <div className={classes.Training}>
      <div>
        Video1
        <div className={classes.overlay}>
          <div className="video">
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
      <div>
        Video3
        <div className="overlay">
          <div className="video">
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
    </div>
  );
};

export default Training;
