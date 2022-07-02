import React, { useState } from 'react';
import { popupData } from '../data-table';

const PopupWindow = ({ closePopup }) => {
  const [rowData, setRowData] = useState({
    value: 1,
    date: new Date(),
    user: 'default user',
    comment: 'new comment',
  });
  const [tableData, setTableData] = useState(popupData);

  const inputsHandler = e => {
    const { value, name } = e.target;

    setRowData({
      ...rowData,
      [name]: name === 'date' ? new Date(value) : value,
    });
  };

  const { value, date, user, comment } = rowData;

  return (
    <div className="popup">
      <table>
        <thead>
          <tr>
            <th>Value</th>
            <th>Date</th>
            <th>User</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ value, date, user, comment }, index) => {
            return (
              <tr key={index}>
                <td>{value}</td>
                <td>{date.toLocaleDateString()}</td>
                <td>{user}</td>
                <td>{comment}</td>
              </tr>
            );
          })}
          <tr>
            <td>
              <input
                value={value}
                name="value"
                onChange={inputsHandler}
                type="number"
              />
            </td>
            <td>
              <input
                value={date}
                onChange={inputsHandler}
                name="date"
                type="date"
              />
            </td>
            <td>
              <select
                value={user}
                onChange={inputsHandler}
                name="user"
                id="user"
              >
                <option value="default user">default user</option>
                <option value="max">max</option>
                <option value="rom">rom</option>
                <option value="alex">alex</option>
                <option value="sam">sam</option>
              </select>
            </td>
            <td>
              <input
                type="text"
                value={comment}
                name="comment"
                onChange={inputsHandler}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="btn-group">
        <button
          className="btn"
          onClick={() => setTableData([...tableData, rowData])}
        >
          add
        </button>
        <button className="btn" onClick={e => closePopup(e, value)}>
          close
        </button>
      </div>
    </div>
  );
};

export default PopupWindow;
