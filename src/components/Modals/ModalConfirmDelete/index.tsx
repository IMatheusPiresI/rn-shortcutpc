import React from 'react';

import * as S from './styles';
import { Typograph } from 'components/Typograph';
import { Button } from 'components/Button';

type IProps = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};
export const ModalConfirmDelete: React.FC<IProps> = ({
  onClose,
  onConfirm,
  visible,
}) => {
  return (
    <S.RNModal
      isVisible={visible}
      useNativeDriver
      animationIn={'fadeIn'}
      animationOut="fadeOut"
    >
      <S.Container>
        <Typograph
          fontSize={16}
          font="Roboto-Bold"
          alignment="center"
          color="critical"
        >
          Você tem certeza que deseja excluir esses aplicativos?
        </Typograph>
        <S.Content>
          <Typograph
            fontSize={14}
            font="Roboto-Medium"
            alignment="justify"
            color="text"
          >
            Após excluir os aplicativos você terá que configurar e adicioná-los
            novamente.
          </Typograph>
        </S.Content>
        <S.Footer>
          <S.BoxFlex>
            <Button title="Cancelar" variant="outline" onPress={onClose} />
          </S.BoxFlex>
          <S.BoxFlex>
            <Button title="Confirmar" variant="critical" onPress={onConfirm} />
          </S.BoxFlex>
        </S.Footer>
      </S.Container>
    </S.RNModal>
  );
};
