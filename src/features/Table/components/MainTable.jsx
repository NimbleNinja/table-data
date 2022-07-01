import { TableContainer, TableHead } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getRegions, getYears, getRegionData } from '../data-table';
import PopupWindow from './PopupWindow';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const MainTable = () => {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(null);

  const showPopup = () => {
    setContainer(document.createElement('div'));
  };

  const closePopup = () => {
    setContainer(null);
  };

  useEffect(() => {
    if (container) {
      newWindow.current = window.open(
        '',
        '',
        'width=600,height=400,left=200,top=200'
      );

      newWindow.current.document.body.appendChild(container);
      const curWindow = newWindow.current;

      return () => curWindow.close();
    }
  }, [container]);

  return (
    <>
      {container &&
        createPortal(<PopupWindow closePopup={closePopup} />, container)}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell rowSpan={2}>regions</TableCell>
              {getYears().map(year => {
                return (
                  <TableCell
                    key={year}
                    colSpan={3}
                    align="center"
                    sx={{ borderLeft: '1px solid #eeeeee' }}
                  >
                    {year}
                  </TableCell>
                );
              })}
            </TableRow>
            <TableRow>
              {['xx', 'yy', 'zz', 'xx', 'yy', 'zz', 'xx', 'yy', 'zz'].map(
                (value, index) => {
                  return (
                    <TableCell
                      key={index}
                      sx={{ borderLeft: '1px solid #eeeeee' }}
                      align="center"
                    >
                      {value}
                    </TableCell>
                  );
                }
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {getRegions().map(region => {
              const regionData = getRegionData(region);
              return (
                <TableRow key={region}>
                  <TableCell>{region}</TableCell>
                  {getYears()
                    .reduce((acc, year) => {
                      const yearData = regionData[year];
                      if (!yearData) {
                        return [...acc, '', '', ''];
                      }
                      const { XX, YY, ZZ } = regionData[year];
                      return [...acc, XX.value, YY.value, ZZ.value];
                    }, [])
                    .map((value, index) => {
                      return (
                        <TableCell
                          onClick={showPopup}
                          key={index}
                          align="center"
                          sx={{
                            borderLeft: '1px solid #eeeeee',
                            cursor: 'pointer',
                          }}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MainTable;
