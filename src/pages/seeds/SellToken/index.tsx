import { useState } from 'react';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import { toast } from 'react-toastify';

import { CONTRACT_MARKETPLACE } from '../../../constants';
import { toastOptions, shortAddress, formatNumber } from 'utils/utils';

import { useMarketplace } from 'hooks/useMarketplace';
import { useMarketContext } from 'context/MarketContext';

import ItemRow from 'components/Marketplace/ItemRow';
import ActionButton from 'components/Marketplace/ActionButton';
import MarketDialog from 'components/Marketplace/MarketDialog';
import InputNumber from 'components/Marketplace/InputNumber';

const SellToken = ({ order, onClose }: any) => {
  const { account, seedBalance, refresh } = useMarketContext();
  const { sellTokenByOrderId } = useMarketplace();
  const [quantity, setQuantity] = useState(0);

  const onChangeQuantity = (e: any) => {
    setQuantity(Number(e.target.value));
  };

  const onSubmit = async () => {
    if (!account) {
      toast.warn('Please connect your wallet!');
      return;
    }
    if (quantity <= 0) {
      toast.warn('Please input quantity!');
      return;
    }
    if (quantity > Number(order.quantity)) {
      toast.warn('Too much quantity!');
      return;
    }

    const toastId = toast.loading('Sell token ...');

    try {
      const result = await sellTokenByOrderId(order.id, quantity);
      if (!result) {
        toast.update(toastId, toastOptions('Failed to sell token!'));
      } else {
        refresh();
        toast.update(
          toastId,
          toastOptions(
            'You have been sold token order successfully!',
            'success'
          )
        );
      }
    } catch (err: any) {
      console.error(err);
      toast.update(toastId, {
        render: err?.data?.message || 'Something went wrong!',
        type: 'error',
        isLoading: false,
      });
    }
  };

  const gainAmount = formatNumber(quantity * Number(order.price));

  return (
    <MarketDialog
      title="Take Offer - Sell $SEEDS"
      actions={
        <>
          <ActionButton onClick={onSubmit}>Take offer</ActionButton>
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
          <ItemRow heading="ID">{shortAddress(order.id)}</ItemRow>
          <ItemRow heading="Price per unit">{order.price} SAMA</ItemRow>
          <ItemRow heading="Total requested">{order.quantity} $SEEDS</ItemRow>
        </Grid>

        <Divider light />

        <Grid container spacing={4} alignItems="center">
          <ItemRow heading="Your balance">{formatNumber(seedBalance)} $SEEDS</ItemRow>
          <ItemRow heading="You sell">
            <InputNumber
              value={quantity}
              onChange={onChangeQuantity}
              onButtonClick={() => setQuantity(seedBalance)}
            />
          </ItemRow>
          <ItemRow heading="Protocol fee">{'0.0000'}</ItemRow>
          <ItemRow heading="Royalty fee">{'0.0000'}</ItemRow>
          <ItemRow heading="You get">{gainAmount} SAMA</ItemRow>
        </Grid>
      </>
    </MarketDialog>
  );
};

export default SellToken;
