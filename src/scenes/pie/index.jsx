import { Box } from '@mui/material';
import Header from '../../components/Header';
import PieChart from '../../components/PieChart';

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart></PieChart>
      </Box>
    </Box>
  );
};

export default Pie;
