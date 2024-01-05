import React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { Platform, Text } from 'react-native';
import { useState } from 'react';
import { theme } from '../theme/theme';

export const Loader = () => {
  return (
    <ActivityIndicator
      animating={true}
      color={theme.colors.primary}
      size='large'
    />
  );
};
