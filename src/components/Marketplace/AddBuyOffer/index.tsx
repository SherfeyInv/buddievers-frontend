import { Button, DialogActions, DialogContent, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import styled from '@emotion/styled';

import { CONTRACT_MARKETPLACE } from '../../../constants';
import { Dialog } from 'ui';
import { shortAddress } from 'utils/utils';
import ItemRow from '../ItemRow';
import ActionButton from '../ActionButton';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const AddBuyOffer = ({ onClose }: any) => {
  const offer: any = {};
  const balance = 4050; //TODO
  const gain = 0.123124;
  const protocalFee = 0;
  const royaltyFee = 0;

  return (
    <Dialog open={true} onClose={() => onClose()} title="Sell $SEEDS">
      <DialogContent>
        <Content>
          <Grid container spacing={4}>
            <ItemRow heading="Address">
              {shortAddress(CONTRACT_MARKETPLACE)}
            </ItemRow>
          </Grid>

          <Divider light />

          <Grid container spacing={4}>
            <ItemRow heading="Quantity to buy">
              <Paper
                component="form"
                sx={{
                  p: '0px 4px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <InputBase type="number" sx={{ color: 'white' }} />
                <Button sx={{ p: '10px' }} aria-label="search">
                  MAX
                </Button>
              </Paper>
            </ItemRow>
            <ItemRow heading="Price per unit">
              <Paper
                component="form"
                sx={{
                  p: '0px 4px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <InputBase type="number" sx={{ color: 'white' }} />
                <Button sx={{ p: '10px' }} aria-label="search">
                  MAX
                </Button>
              </Paper>
            </ItemRow>
          </Grid>

          <Divider light />

          <Grid container spacing={4}>
            <ItemRow heading="You have">{balance}</ItemRow>
            <ItemRow heading="You get">{balance}</ItemRow>
            <ItemRow heading="You give brutto">{balance}</ItemRow>
            <ItemRow heading="Protocal fee">{balance}</ItemRow>
            <ItemRow heading="Royalty fee">{balance}</ItemRow>
            <ItemRow heading="You give netto">{balance}</ItemRow>
          </Grid>
        </Content>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <ActionButton onClick={onClose}>Place offer</ActionButton>
        <ActionButton onClick={onClose}>Close</ActionButton>
      </DialogActions>
    </Dialog>
  );
};

export default AddBuyOffer;
