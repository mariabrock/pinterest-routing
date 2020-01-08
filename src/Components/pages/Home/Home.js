import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

import boardData from '../../../helpers/data/boardData';
import authData from '../../../helpers/data/authData';
import Board from '../../shared/Boards/Boards';

class Home extends React.Component {
  state = {
    boards: [],
  }

  componentDidMount() {
    boardData.getBoardsByUid(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error('error from get boards', err));
  }

  render() {
    const boardId = '12345';

    return (
            <div className="Home">
                <h1>Home Page</h1>
                <div className="boards d-flex flex-wrap">
                  {this.state.boards.map((board) => (<Board key={board.id} board={board} />))}
                </div>
            </div>
    );
  }
}

export default Home;
