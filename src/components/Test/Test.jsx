import React, {useMemo} from 'react'
import { Button } from '@consta/uikit/Button';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Text } from '@consta/uikit/Text';

import Tags from '../Tags';
import './App.scss';

const Test = () => {
  const tags = useMemo(() => {
    return [
      {active: true, title: 'Маркетинг'},
      {active: true, title: 'Финансы'},
      {active: false, title: 'Языки'},
      {active: false, title: 'Личный рост'},
      {active: false, title: 'Инстаграм'},
      {active: false, title: 'Программирование'},
      {active: false, title: 'Инвестиции'},
      {active: false, title: 'Общеобразовательные'},
    ]
  }, [])

  return (
    <div className="test">
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
            <div className="test__head">
              <Text weight="semibold" transform="uppercase">рекомендованное</Text>
              <Text as="h1" weight="semibold" size="5xl" lineHeight="xs">Блокчейн и криптовалюты</Text>
            </div>
            <div className="test__content">
              <Text as="p" view="secondary">Ваш универсальный путеводитель в мире криптовалют. Независимо от того, являетесь ли вы новичком, пытающимся разобраться в майнинге, или опытным пользователем, желающим разработать торговую стратегию, мы сможем вам помочь. </Text> 
              <Button size="l" label="Открыть модуль" />
            </div>
          </GridItem>
          <GridItem>
            <div className="test__panel panel">
              <div className="panel__image"></div>
              <div className="panel__content">
                <Text size="xl" weight="semibold">Что такое биткоин?</Text>
              </div>
              <div className="panel__tags">
                <Text size="m" as="span" view="ghost">3 модуля</Text>
                <Text size="m" as="span" view="ghost">24 задания</Text>
              </div>
              <Button size="m" label="15 опыта" disabled/>
            </div>
          </GridItem>
        </Grid>

        <div className="test__more">
          <Text weight="semibold" size="3xl">Все курсы</Text>
          <Tags tags={tags} className="test__more-tags" />
        </div>
      </div>
    </div>
  );
}

export default Test