import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from '@emotion/styled';

const StyledTable = styled(Table)`
  background: transparent;
  color: white;
  
  td, th {
    color: white;
    text-align: left;
  }
  tr {
    border: none;
  }
`;

const FillButton = styled.button`
  width: 66px;
  height: 44px;
  color: white;
  background: rgba(0, 206, 76, 0.6);
  border-radius: 20px;
  border: none;
  cursor: pointe;
`;

const OfferTable = ({ offers }: any) => {
  return (
    <TableContainer style={{ marginTop: '30px' }}>
      <StyledTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Expiration</TableCell>
            <TableCell align="right">Seller</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {offers.map((row: any) => (
            <TableRow
              key={row.ID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.expiration}</TableCell>
              <TableCell align="right">{row.owner}</TableCell>
              <TableCell align="right">
                <FillButton>FILL</FillButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default OfferTable;