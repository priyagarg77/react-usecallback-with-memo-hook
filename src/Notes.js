import React from 'react';

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { notes, addNotes } = this.props;
    console.log('notes Component');
    return (
      <div className="notes">
        <h4>Add notes</h4>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
        <button onClick={addNotes}>Add notes</button>
      </div>
    );
  }
}

export default React.memo(Notes);
