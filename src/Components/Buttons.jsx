import React from 'react';
import $ from 'jquery';

const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
const guitar_urls = [  
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/C5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/D5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/E5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/G5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/A5.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/C6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/D6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/E6.mp3',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/G6.mp3']
  
  const guitar_note_names = ['C5', 'D5', 'E5', 'G5', 'A5', 'C6', 'D6', 'E6', 'G6']
  
  const piano_urls = ['http://www.freesound.org/data/previews/39/39175_35187-lq.mp3',
  'http://www.freesound.org/data/previews/39/39177_35187-lq.mp3',
  'http://www.freesound.org/data/previews/39/39178_35187-lq.mp3',
  'http://www.freesound.org/data/previews/39/39179_35187-lq.mp3',
  'http://www.freesound.org/data/previews/39/39182_35187-lq.mp3',
  'http://www.freesound.org/data/previews/39/39184_35187-lq.mp3',
  'http://www.freesound.org/data/previews/39/39186_35187-lq.mp3',
  'http://www.freesound.org/data/previews/39/39187_35187-lq.mp3',
  'http://www.freesound.org/data/previews/39/39189_35187-lq.mp3']
  
  const piano_note_names = ['C3', 'D3', 'D#3', 'E3', 'G3', 'A3', 'B3', 'C4', 'D4']
  
  const drum_urls = ['https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3']
  
  const drums_note_names = ['Heater 1', 'Heater 3', 'Dsc Oh', 'Kick n Hat', 'Cev H2', 'Give us a light', 'Bld H1', 'Side stick 1', 'Brk Snr']


class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDisplay: "",
    }
    this.playSound = this.playSound.bind(this);
    this.keydownHandler = this.keydownHandler.bind(this);
   
  }
  
  



  playSound(keyElement) {
    if (this.props.currentState.onOff){
    var index = keys.findIndex(x => x === keyElement);
    if (this.props.currentState.currentInstrument === "guitar"){
      document.getElementById(keyElement).setAttribute("src", guitar_urls[index])  
      this.props.handler(guitar_note_names[index])
      ;} else if (this.props.currentState.currentInstrument === "piano"){
        document.getElementById(keyElement).setAttribute("src", piano_urls[index])  
        this.props.handler(piano_note_names[index])
      } else if (this.props.currentState.currentInstrument === "drums"){
        document.getElementById(keyElement).setAttribute("src", drum_urls[index]) 
        this.props.handler(drums_note_names[index]) 
      }
      var a = document.getElementById(keyElement);
      a.volume = this.props.currentState.currentVolume/100
      a.play();
    }
  }
  keydownHandler(e) {
    if (keys.indexOf(e.key.toUpperCase()) !== -1) {
      $("#"+e.key.toUpperCase()).parent().addClass("active-button");
      if (this.props.currentState.onOff){
      $("#"+e.key.toUpperCase()).parent().css("background-color", "yellow");
      $("#"+e.key.toUpperCase()).parent().css("color", "black");
      }
      
    document.getElementById(e.key.toUpperCase()).click();
      setTimeout(function(){
        $("#"+e.key.toUpperCase()).parent().removeClass('active-button');
        $("#"+e.key.toUpperCase()).parent().css("background-color", "black"); 
        $("#"+e.key.toUpperCase()).parent().css("color", "white");   
    },100);
    
  }
    
    }
  
  componentDidMount() {
    document.addEventListener("keydown", this.keydownHandler);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownHandler);
  }


  render() { 
    return (  
    <div className="allButtons">
      <button
          id="clip-1"
          className = "drum-pad"
          onClick = {() => this.playSound('Q')}
        >
          
          <audio src={guitar_urls[0]} className="clip" id="Q"></audio>
          Q
        </button>
        <button
          id="clip-2"
          className = "drum-pad"
          onClick = {() => this.playSound('W')}
        >
          
          <audio src={guitar_urls[1]} className="clip" id="W"></audio>
          W
        </button>
        <button
          id="clip-3"
          className = "drum-pad"
          onClick = {() => this.playSound('E')}
        >
          
          <audio src={guitar_urls[2]} className="clip" id="E"></audio>
          E
        </button>
        <button
          id="clip-4"
          className = "drum-pad"
          onClick = {() => this.playSound('A')}
        >
          
          <audio src={guitar_urls[3]} className="clip" id="A"></audio>
          A
        </button>
        <button
          id="clip-5"
          className = "drum-pad"
          onClick = {() => this.playSound('S')}
        >
          
          <audio src={guitar_urls[4]} className="clip" id="S"></audio>
          S
        </button>
        <button
          id="clip-6"
          className = "drum-pad"
          onClick = {() => this.playSound('D')}
        >
          
          <audio src={guitar_urls[5]} className="clip" id="D"></audio>
          D
        </button>
        <button
          id="clip-7"
          className = "drum-pad"
          onClick = {() => this.playSound('Z')}
        >
          
          <audio src={guitar_urls[6]} className="clip" id="Z"></audio>
          Z
        </button><button
          id="clip-8"
          className = "drum-pad"
          onClick = {() => this.playSound('X')}
        >
          
          <audio src={guitar_urls[7]} className="clip" id="X"></audio>
          X
        </button>
        <button
          id="clip-9"
          className = "drum-pad"
          onClick = {() => this.playSound('C')}
        >
          
          <audio src={guitar_urls[8]} className="clip" id="C"></audio>
          C
        </button>
    </div>);
  }
}
 
export default Buttons;


