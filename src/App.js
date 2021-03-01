import React from "react";
import Buttons from "./Components/Buttons";
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVolume: 100,
      currentInstrument: "guitar",
      currentDisplay: "",
      onOff: true,
    };
    this.handleChangeVolume = this.handleChangeVolume.bind(this);
    this.handler = this.handler.bind(this);
    this.removeStateFromDisplay = this.removeStateFromDisplay.bind(this);
    this.handleInstrumentChangeGuitar = this.handleInstrumentChangeGuitar.bind(
      this
    );
    this.handleInstrumentChangePiano = this.handleInstrumentChangePiano.bind(
      this
    );
    this.handleInstrumentChangeDrums = this.handleInstrumentChangeDrums.bind(
      this
    );
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }
  handleChangeVolume(e) {
    if (this.state.onOff) {
      this.setState({
        currentVolume: e.target.value,
        currentDisplay: "Volume: " + e.target.value,
      });
    }
  }
  turnInstrumentsOnOff = () => {
    this.setState((prevState) => ({
      onOff: !prevState.onOff,
    }));

    if (!this.state.onOff) {
      $(".instChanger").css("filter", "");
      document.getElementById("tooltiptext").disabled = false;
      $(".drum-pad").hover(function (e) {
        $(this).css(
          "background-color",
          e.type === "mouseenter" ? "yellow" : "gray"
        );
      });
      $(".instrumentChanger").css("box-shadow", "1px 3px 10px white");
      $(".displayingMessage").css("box-shadow", "1px 3px 10px white");
      $("." + this.state.currentInstrument).addClass("selectedInstrument");
      $("." + this.state.currentInstrument).css(
        "box-shadow",
        "1px 3px 10px white"
      );
      $("#tooltiptext").removeClass("withoutShadows");
    } else {
      this.setState({
        currentDisplay: "",
      });
      document.getElementById("tooltiptext").disabled = true;
      $(".instChanger").css("filter", "grayscale(100%)");
      $(".guitar").removeClass("selectedInstrument");
      $(".piano").removeClass("selectedInstrument");
      $(".drums").removeClass("selectedInstrument");
      $(".guitar").css("box-shadow", "none");
      $(".drums").css("box-shadow", "none");
      $(".piano").css("box-shadow", "none");
      $(".instrumentChanger").css("box-shadow", "none");
      $(".displayingMessage").css("box-shadow", "none");
      $("#tooltiptext").addClass("withoutShadows");
    }
  };

  handleMouseOver() {
    if (this.state.onOff) {
      $(".drum-pad").hover(function (e) {
        $(this).css(
          "background-color",
          e.type === "mouseenter" ? "yellow" : "black"
        );
        $(this).css("color", e.type === "mouseenter" ? "black" : "white");
      });
    } else {
      $(".drum-pad").hover(function () {
        $(this).css("background-color", "black");
        $(this).css("color", "white");
      });
    }
  }
  handleInstrumentChangeGuitar() {
    if (this.state.onOff) {
      this.setState({
        currentInstrument: "guitar",
      });

      $("body").css(
        "background-image",
        "url(https://wallpaperaccess.com/full/1470296.jpg)"
      );
      $(".guitar").addClass("selectedInstrument");
      $(".piano").removeClass("selectedInstrument");
      $(".drums").removeClass("selectedInstrument");

      $(".guitar").css("box-shadow", "1px 3px 10px white");
      $(".drums").css("box-shadow", "none");
      $(".piano").css("box-shadow", "none");
    }
  }
  handleInstrumentChangePiano() {
    if (this.state.onOff) {
      this.setState({
        currentInstrument: "piano",
      });
      $("body").css(
        "background-image",
        "url(https://cdn.merriammusic.com/2017/09/The-Fascinating-History-of-the-Modern-Grand-Piano.jpg)"
      );

      $(".piano").addClass("selectedInstrument");
      $(".guitar").removeClass("selectedInstrument");
      $(".drums").removeClass("selectedInstrument");

      $(".piano").css("box-shadow", "1px 3px 10px white");
      $(".guitar").css("box-shadow", "none");
      $(".drums").css("box-shadow", "none");
    }
  }
  handleInstrumentChangeDrums() {
    if (this.state.onOff) {
      this.setState({
        currentInstrument: "drums",
      });
      $("body").css(
        "background-image",
        "url(https://wallpapercave.com/wp/n9aRS8D.jpg)"
      );

      $(".drums").addClass("selectedInstrument");
      $(".guitar").removeClass("selectedInstrument");
      $(".piano").removeClass("selectedInstrument");
      $(".drums").css("box-shadow", "1px 3px 10px white");
      $(".guitar").css("box-shadow", "none");
      $(".piano").css("box-shadow", "none");
    }
  }

  handler(someVar) {
    this.setState({
      currentDisplay: someVar,
    });
  }
  removeStateFromDisplay() {
    setTimeout(() => {
      this.setState({
        currentDisplay: "",
      });
    }, 200);
  }

  render() {
    return (
      <div className="everything">
        <h1 className="designBy">
          Designed by{" "}
          <a
            href="https://www.linkedin.com/in/davor-jovanovi%C4%87/"
            rel="noreferrer"
            target="_blank"
          >
            DavorJ
          </a>
        </h1>
        <div
          idName="drum-machine"
          className="containsAllElements"
          onMouseOver={this.handleMouseOver}
        >
          <Buttons currentState={this.state} handler={this.handler} />
          <div className="right-side">
            <label class="switch">
              <input
                type="checkbox"
                checked={this.state.onOff ? true : false}
                onClick={this.turnInstrumentsOnOff}
              />
              <span class="slider round"></span>
            </label>

            <div idName="display" className="displayingMessage">
              {this.state.currentDisplay}
            </div>
            <input
              id="tooltiptext"
              name="volumeChanger"
              min="0"
              max="100"
              class="btn btn-primary volumeChange"
              type="range"
              defaultValue="100"
              onChange={this.handleChangeVolume}
              onMouseLeave={this.removeStateFromDisplay}
            />
            <div className="instrumentChanger">
              <div className="title">Instrument picker</div>
              <div className="changingInstrumentBox">
                <div
                  className="guitar instChanger selectedInstrument"
                  id="guitar"
                  title="Guitar"
                  onClick={this.handleInstrumentChangeGuitar}
                ></div>
                <div
                  className="piano instChanger"
                  id="piano"
                  onClick={this.handleInstrumentChangePiano}
                  title="Piano"
                ></div>
                <div
                  className="drums instChanger"
                  id="drums"
                  onClick={this.handleInstrumentChangeDrums}
                  title="Drums"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
