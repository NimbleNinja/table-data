import { Box, Container, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import MainTable from './features/Table/components/MainTable';

function App() {
  return (
    <Box sx={{ height: '100vh', background: grey[200] }}>
      <Container maxWidth="md">
        <Box>
          <Typography variant="h1" component="h1" align="center" gutterBottom>
            Data table
          </Typography>
          <MainTable />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
