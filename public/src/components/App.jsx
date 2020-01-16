class IssueFilter extends React.Component {
  render() {
    return (
      <h3>This is a placeholder for the issue filter.</h3>
    );
  }
}

class IssueTable extends React.Component {
  render() {
    return (
      <h3>This is a placeholder for a table of issues.</h3>
    );
  }
}


class IssueAdd extends React.Component {
  render() {
    return (
      <h3>This is a placeholder for a form to add an issue.</h3>
    );
  }
}

class IssueList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />
            </React.Fragment>
        );
    }
}

const element = <IssueList />;
ReactDOM.render(element, document.getElementById('content'));
