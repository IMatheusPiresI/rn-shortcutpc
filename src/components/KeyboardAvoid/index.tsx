import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

type IProps = {
  children: ReactNode;
};

export const KeyboardAvoid: React.FC<IProps> = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
      }}
      testID="keyboardAvoid"
    >
      {children}
    </KeyboardAvoidingView>
  );
};
