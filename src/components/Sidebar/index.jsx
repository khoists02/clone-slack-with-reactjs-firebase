import React from 'react';
import PropTypes from 'prop-types';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create';

import './Sidebar.scss';
Sidebar.propTypes = {
  user: PropTypes.object,
}

Sidebar.defaultProps = {
  user: null,
}

function Sidebar(props) {
  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Clever Programer</h2>
          <h3>
            <FiberManualRecordIcon />
            {/* Name user */}
            Khoi Le
          </h3>
        </div>

        <CreateIcon />
      </div>
    </div>
  );
};

export default Sidebar;

