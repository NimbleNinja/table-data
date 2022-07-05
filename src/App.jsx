import { Box, Container } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainTable from './features/Table/components/MainTable';
import PopupWindow from './features/Table/components/PopupWindow';
import { initialData } from './features/Table/data-table';

function App() {
  const [tableData, setTableData] = useState(initialData);
  const [searchParams, setSearchParams] = useState(null);
  const location = window.location.href;

  const showPopup = (e, params) => {
    setSearchParams(params);

    window.open(
      `${location}modal`,
      '_blank',
      'width=800,height=400,left=200,top=200'
    );
  };

  const closePopup = e => {
    if (e.data.type !== 'myCustomType') {
      return;
    }

    const { region, year, key } = searchParams;

    setTableData({
      ...tableData,
      [region]: {
        G: {
          ...tableData[region].G,
          [year]: {
            ...tableData[region].G[year],
            [key]: { value: e.data.message },
          },
        },
      },
    });
  };

  useEffect(() => {
    window.addEventListener('message', closePopup);

    return () => window.removeEventListener('message', closePopup);
  });

  return (
    <Box sx={{ height: '100vh', background: grey[200] }}>
      <Container maxWidth="md">
        <Routes>
          <Route
            path="/"
            element={<MainTable showPopup={showPopup} tableData={tableData} />}
          />
          <Route path="modal" element={<PopupWindow />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
