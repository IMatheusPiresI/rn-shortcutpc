import React from 'react';

import * as S from './styles';
import { InfoPresentation } from './_components/InfoPresentation';
import { presentation } from '../../mock/presentation';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import theme from 'resources/theme';
import { useSharedValue } from 'react-native-reanimated';
import { Paginator } from './_components/Paginator';

export const CarouselPresentation: React.FC = ({}) => {
  const currentIndex = useSharedValue<number>(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    let index = event.nativeEvent.contentOffset.x / theme.metrics.screenWidth;

    currentIndex.value = index;
  };

  return (
    <S.Content>
      <S.Container
        data={presentation}
        bounces={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <InfoPresentation
            index={index}
            currentIndex={currentIndex}
            description={item.description}
            title={item.title}
          />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
      <S.FooterCarousel>
        <Paginator currentIndex={currentIndex} />
      </S.FooterCarousel>
    </S.Content>
  );
};
