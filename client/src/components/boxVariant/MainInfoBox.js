import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";
import styles from './mainCard.module.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  '@media all': {
    maxHeight: 26,
    fontSize: '0.7rem',
    background: '#f8d3d3',
  },
}));

const ItemVariant = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  '@media all': {
    maxHeight: 26,
    fontSize: '0.7rem',
    lineHeight: 1,
    background: '#91ffff',
    borderRadius: '30%'
  },
}));


export function MainInfoBox({ financeData }) {

  const { dataHistory } = useSelector(({ currency }) => currency);
  const privies = dataHistory[dataHistory.length - 1];


  return (
    <Box>
      <Grid container spacing={ 1 }>
        <Grid item xs={ 1.5 }>
          <Item>Ticker</Item>
        </Grid>
        <Grid item xs={ 1.5 }>
          <Item>Price</Item>
        </Grid>
        <Grid item xs={ 1.5 }>
          <Item>Change</Item>
        </Grid>
        <Grid item xs={ 1.5 }>
          <Item>Percent</Item>
        </Grid>
        <Grid item xs={ 1.5 }>
          <Item>Dividend</Item>
        </Grid>
        <Grid item xs={ 1.5 }>
          <Item>Yield</Item>
        </Grid>
        <Grid item xs={ 2 }>
          <Item>Time</Item>
        </Grid>
      </Grid>
      <hr/>

      { financeData.map((el, i) =>
        (
          <div key={ el.ticker }>
            <Grid container spacing={ 1 }>
              <Grid item xs={ 1.5 }>
                <Item>
                  { el.ticker }
                </Item>
              </Grid>
              <Grid item xs={ 1.5 }>
                <div className={ `${ (el?.price > privies[i]?.price) ? styles.up : styles.dawn }` }>
                  <ItemVariant>{ el.price }</ItemVariant>
                </div>
              </Grid>
              <Grid item xs={ 1.5 }>
                <div className={ `${ (el?.change > privies[i]?.change) ? styles.up : styles.dawn }` }>
                  <ItemVariant>
                    { el.change }
                  </ItemVariant>
                </div>
              </Grid>
              <Grid item xs={ 1.5 }>
                <div className={ `${ (el?.change_percent > privies[i]?.change_percent) ? styles.up : styles.dawn }` }>
                  <ItemVariant>
                    { el.change_percent }
                  </ItemVariant>
                </div>
              </Grid>
              <Grid item xs={ 1.5 }>
                <div className={ `${ (el?.dividend > privies[i]?.dividend) ? styles.up : styles.dawn }` }>
                  <ItemVariant>
                    { el.dividend }
                  </ItemVariant>
                </div>
              </Grid>
              <Grid item xs={ 1.5 }>
                <div className={ `${ (el?.yield > privies[i]?.yield) ? styles.up : styles.dawn }` }>
                  <ItemVariant>
                    { el.yield }
                  </ItemVariant>
                </div>
              </Grid>
              <Grid item xs={ 2 }>
                <Item>
                  { new Date().toLocaleTimeString() }
                </Item>
              </Grid>
            </Grid>
            <hr/>
          </div>)) }
    </Box>
  );
}



