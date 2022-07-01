import React, { useState } from 'react';
import { popupData } from '../data-table';

const styles = {
  border: '1px solid #000',
};

const btnStyles = {
  background: 'none',
  padding: '5px',
  textTransform: 'uppercase',
  borderRadius: '5px',
};

const PopupWindow = ({ closePopup }) => {
  const [rowData, setRowData] = useState({
    value: 1,
    date: new Date(),
    user: 'default user',
    comment: 'new comment',
  });

  const [data, setData] = useState(popupData);

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
      <table style={{ ...styles, borderCollapse: 'collapse' }}>
        <thead>
          <tr style={styles}>
            <th style={styles}>Value</th>
            <th style={styles}>Date</th>
            <th style={styles}>User</th>
            <th style={styles}>Comment</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ value, date, user, comment }, index) => {
            return (
              <tr key={index} style={styles}>
                <td style={styles}>{value}</td>
                <td style={styles}>{date.toLocaleDateString()}</td>
                <td style={styles}>{user}</td>
                <td style={styles}>{comment}</td>
              </tr>
            );
          })}
          <tr style={styles}>
            <td style={styles}>
              <input
                value={value}
                name="value"
                onChange={inputsHandler}
                type="number"
              />
            </td>
            <td style={styles}>
              <input
                value={date}
                onChange={inputsHandler}
                name="date"
                type="date"
              />
            </td>
            <td style={styles}>
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
            <td style={styles}>
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
      <div
        style={{
          display: 'flex',
          padding: '10px',
          justifyContent: 'end',
          gap: '10px',
        }}
      >
        <button style={btnStyles} onClick={() => setData([...data, rowData])}>
          add
        </button>
        <button style={btnStyles} onClick={closePopup}>
          close
        </button>
      </div>
    </div>
  );
};

export default PopupWindow;
