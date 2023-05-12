import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import styled from '@emotion/styled';

import { CONTRACT_MARKETPLACE } from '../../../constants';
import { shortAddress } from 'utils/utils';
import ItemRow from 'components/Marketplace/ItemRow';
import InputNumber from 'components/Marketplace/InputNumber';
import ActionButton from 'components/Marketplace/ActionButton';
import MarketDialog from 'components/Marketplace/MarketDialog';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px 0px;
`;

const AddBuyOffer = ({ onClose }: any) => {
  const offer: any = {};
  const balance = 4050; //TODO
  const gain = 0.123124;
  const protocalFee = 0;
  const royaltyFee = 0;

  return (
    <MarketDialog
      title="BUY $SEEDS"
      actions={
        <>
          <ActionButton onClick={onClose}>Place offer</ActionButton>
          <ActionButton onClick={onClose}>Close</ActionButton>
        </>
      }
      onClose={onClose}
    >
      <>
        <Grid container spacing={4} alignItems="center">
          <ItemRow heading="Address">
            {shortAddress(CONTRACT_MARKETPLACE)}
          </ItemRow>
        </Grid>

        <Divider light />

        <Grid container spacing={4} alignItems="center">
          <ItemRow heading="Quantity to buy">
            <InputNumber type="number" sx={{ color: 'white' }} />
          </ItemRow>
          <ItemRow heading="Price per unit">
            <InputNumber type="number" />
          </ItemRow>
        </Grid>

        <Divider light />

        <Grid container spacing={4} alignItems="center">
          <ItemRow heading="You have">{balance}</ItemRow>
          <ItemRow heading="You get">{balance}</ItemRow>
          <ItemRow heading="You give brutto">{balance}</ItemRow>
          <ItemRow heading="Protocal fee">{balance}</ItemRow>
          <ItemRow heading="Royalty fee">{balance}</ItemRow>
          <ItemRow heading="You give netto">{balance}</ItemRow>
        </Grid>
      </>
    </MarketDialog>
  );
};

export default AddBuyOffer;