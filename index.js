import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import parseCSV from 'csv-parse/lib/sync';
import moment from 'moment';
import _ from 'lodash';

import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { departures: [] };
  }

  async fetchData() {
    const response = await fetch('/departures');
    const text = await response.text();
    this.setState({ departures: parseCSV(text, { columns: true }) });
    setTimeout(() => this.fetchData(), 5000);
  }

  componentWillMount() {
    this.fetchData();
  }

  render() {
    const { departures } = this.state;
    return (
      <div>
        <h1 className="schedule-title">Departures</h1>
        <div className="schedule-table">
          <div className="schedule-row header">
            <div className="schedule-cell time">Time</div>
            <div className="schedule-cell destination">Destination</div>
            <div className="schedule-cell train">Train</div>
            <div className="schedule-cell track">Track</div>
            <div className="schedule-cell status">Status</div>
          </div>
          {_.sortBy(departures, row => row.ScheduledTime * 1).map((row, i) =>
            <div className="schedule-row" key={i}>
              <div className="schedule-cell time">{moment.unix(row.ScheduledTime * 1).format('h:mm a')}</div>
              <div className="schedule-cell destination">{row.Destination}</div>
              <div className="schedule-cell train">{row.Trip}</div>
              <div className="schedule-cell track">{row.Track || 'TBD'}</div>
              <div className="schedule-cell status">{row.Status}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.body.appendChild(document.createElement('div')),
);
