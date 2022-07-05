import { TableContainer, TableHead, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  getRegions,
  getRegionYears,
  getRegionData,
  getYearKeys,
} from '../data-table';

const MainTable = ({ tableData, showPopup }) => {
  // use first region to get all years and keys(XX,YY,ZZ) for table
  const allRegions = getRegions(tableData);
  const firstRegion = allRegions[0];
  const firstRegionYears = getRegionYears(tableData, firstRegion);
  const firstRegionKeys = getYearKeys(
    getRegionData(tableData, firstRegion),
    firstRegionYears[0]
  );

  return (
    <>
      <Typography variant="h1" component="h1" align="center" gutterBottom>
        Data table
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell rowSpan={2}>regions</TableCell>
              {firstRegionYears.map(year => {
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
              {firstRegionYears
                .map(year => {
                  return getYearKeys(
                    getRegionData(tableData, firstRegion),
                    year
                  ).map(key => {
                    return (
                      <TableCell
                        key={Math.random()}
                        sx={{ borderLeft: '1px solid #eeeeee' }}
                        align="center"
                      >
                        {key}
                      </TableCell>
                    );
                  });
                })
                .flat()}
            </TableRow>
          </TableHead>
          <TableBody>
            {allRegions.map(region => {
              const regionData = getRegionData(tableData, region);

              return (
                <TableRow key={region}>
                  <TableCell>{region}</TableCell>
                  {firstRegionYears
                    .map(year => {
                      return firstRegionKeys.map(key => {
                        const checkRule =
                          !regionData[year] ||
                          !Object.keys(regionData[year]).includes(key);

                        return (
                          <TableCell
                            onClick={e => showPopup(e, { region, year, key })}
                            key={Math.random()}
                            align="center"
                            sx={{
                              borderLeft: '1px solid #eeeeee',
                              cursor: 'pointer',
                            }}
                          >
                            {checkRule ? '' : regionData[year][key].value}
                          </TableCell>
                        );
                      });
                    })
                    .flat()}
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
