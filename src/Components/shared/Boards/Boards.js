import React from 'react';

import './Boards.scss';
import boardShape from '../../../helpers/propz/boardShape';

class Board extends React.Component {
    static propTypes = {
      board: boardShape.boardShape,
    }

    render() {
      const { board } = this.props;
      return (
    <div className="Board col-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{board.name}</h5>
                <p class="card-text">{board.description}</p>
            </div>
        </div>
    </div>
      );
    }
}

export default Board;
