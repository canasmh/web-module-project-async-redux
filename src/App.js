import React from 'react';
import { connect } from 'react-redux';
import { getJoke } from './actions';
import { JokeCard } from './components/JokeCard';
import './App.css';

function App(props) {

  const fetchJoke = () => {
    props.getJoke();
  }
  return (
    <div className="app">
      {props.joke && <JokeCard joke={props.joke}/>}
      {props.joke && <div className="break"></div>}
      <button onClick={fetchJoke} className="app__button">Get New Joke</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    joke: state.joke,
    error: state.err,
    isFetching: state.isFetching
  }

}

export default connect(mapStateToProps, { getJoke })(App);