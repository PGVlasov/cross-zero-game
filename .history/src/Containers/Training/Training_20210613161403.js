import { Component, React } from "react";
import classes from "./Training.module.css";

export default class Training extends Component {
  showVideo = () => {
    console.log("videoCliced");
  };
  render() {
    return (
      <div className={classes.Training}>
        <div className={classes.video} onClick={this.showVideo}>
          <h2> Video1</h2>
          <div className={classes.overlay}>
            <iframe
              src="https://www.youtube.com/embed/dnXMr9gQHL8"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              onClick={this.showVideo}
            />
          </div>
        </div>
        <div className="video">
          <h2> Video1</h2>
          <div className={classes.overlay}>
            <iframe
              src="https://www.youtube.com/embed/HM0BkVhzjsc"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          </div>
        </div>
        <div className="video">
          <h2> Video1</h2>
          <div className={classes.overlay}>
            <iframe
              src="https://www.youtube.com/embed/WUw0KhgpXYg"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          </div>
        </div>
      </div>
    );
  }
}
