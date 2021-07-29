import React from 'react'
import { Button } from '@consta/uikit/Button';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Text } from '@consta/uikit/Text';

import './App.scss';

const Test = () => {
  return (
    <div className="page">
      <div className="container">
        <Grid
          cols="1"
          gap="xl"
          breakpoints={{
            m: {
              cols: 2,
              gap: 'xl',
            },
          }}
        >
          <GridItem>
            <Text weight="semibold" transform="uppercase">рекомендованное</Text>
            <Text weight="semibold" size="5xl" transform="uppercase">Блокчейн и криптовалюты</Text>
            <Text view="secondary">Ваш универсальный путеводитель в мире криптовалют. Независимо от того, являетесь ли вы новичком, пытающимся разобраться в майнинге, или опытным пользователем, желающим разработать торговую стратегию, мы сможем вам помочь. </Text> 

            <Button label="Открыть модуль" />
          </GridItem>
          <GridItem>2</GridItem>
        </Grid>
      </div>
    </div>
  );
}

export default Test