import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../theme/theme';

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => (
  <Text style={styles.header}>{children}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    marginVertical: 20,
    marginLeft: 20,
    color: theme.colors.primary,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 0,
  },
});

export default memo(Header);
