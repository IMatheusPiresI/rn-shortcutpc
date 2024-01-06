import React, { useEffect, useState } from 'react';
import { Logo } from 'components/Logo';
import { Typograph } from 'components/Typograph';
import * as S from './styles';

import { useHeaderAnimation } from './hooks/useHeaderAnimation';
import { TouchableWithoutFeedback } from 'react-native';

import AddSVG from '@assets/add.svg';
import DeleteSVG from '@assets/remove.svg';
import SettingsSVG from '@assets/settings.svg';
import { useNavigation } from '@react-navigation/native';
import ArrowBackSVG from '@assets/arrow-back.svg';

type IProps = {
  showMenu?: boolean;
  showArrow?: boolean;
  onSelectApps?: boolean;
  onCancel?: () => void;
  showDeleteOption?: boolean;
  onDeletePress?: () => void;
};

export const Header = ({
  onSelectApps,
  showArrow,
  showMenu,
  onCancel,
  onDeletePress,
  showDeleteOption,
}: IProps) => {
  const navigation = useNavigation();

  const {
    applyAnimationShowOption,
    rAnimatedHorizontalBarBottom,
    rAnimatedHorizontalBarHide,
    rAnimatedHorizontalBarTop,
    rAnimatedBoxOptionsAppear,
  } = useHeaderAnimation();
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleToogleShowOptions = () => {
    setShowOptions((prevState) => !prevState);
  };

  const handleGoToAddMoreAppsApps = () => {
    handleToogleShowOptions();
    navigation.navigate('AddMoreApps');
  };

  const handleGoToAppConfiguration = () => {
    handleToogleShowOptions();
    navigation.navigate('Settings');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    applyAnimationShowOption(showOptions);
  }, [showOptions]);

  return (
    <S.Header>
      {showArrow && (
        <S.ButtonArrow onPress={handleGoBack}>
          <ArrowBackSVG />
        </S.ButtonArrow>
      )}
      <Logo logoWidth={36} logoHeight={36} fontSize={24} />
      <S.BoxName>
        <Typograph font="Roboto-Bold" fontSize={18} color="primary">
          ShortcutPC
        </Typograph>
      </S.BoxName>
      {showMenu &&
        (onSelectApps ? (
          <S.CancelContainer>
            <S.CancelButton onPress={onCancel}>
              <Typograph font="Roboto-Bold" fontSize={14} color="white">
                Cancelar
              </Typograph>
            </S.CancelButton>
            {showDeleteOption && (
              <S.ButtonDelete onPress={onDeletePress}>
                <DeleteSVG width={24} height={24} />
              </S.ButtonDelete>
            )}
          </S.CancelContainer>
        ) : (
          <S.ButtonIconOption
            activeOpacity={0.7}
            onPress={handleToogleShowOptions}
          >
            <S.BoxHorizontalBar style={rAnimatedHorizontalBarTop} />
            <S.BoxHorizontalBar style={rAnimatedHorizontalBarHide} />
            <S.BoxHorizontalBar style={rAnimatedHorizontalBarBottom} />
          </S.ButtonIconOption>
        ))}

      <S.RNModal visible={showOptions} transparent>
        <TouchableWithoutFeedback onPress={handleToogleShowOptions}>
          <S.SafeArea>
            <S.MContainer>
              <S.BoxButton activeOpacity={1}>
                <S.BoxContentOptions
                  style={rAnimatedBoxOptionsAppear}
                  onTouchStart={() => {}}
                >
                  <S.ButtonOption border onPress={handleGoToAddMoreAppsApps}>
                    <AddSVG width={24} height={24} />
                    <Typograph font="Roboto-Bold" fontSize={14} color="primary">
                      Adicionar aplicativos
                    </Typograph>
                  </S.ButtonOption>

                  <S.ButtonOption onPress={handleGoToAppConfiguration}>
                    <SettingsSVG width={24} height={24} />
                    <Typograph font="Roboto-Bold" fontSize={14} color="primary">
                      Configurarações
                    </Typograph>
                  </S.ButtonOption>
                </S.BoxContentOptions>
              </S.BoxButton>
            </S.MContainer>
          </S.SafeArea>
        </TouchableWithoutFeedback>
      </S.RNModal>
    </S.Header>
  );
};
