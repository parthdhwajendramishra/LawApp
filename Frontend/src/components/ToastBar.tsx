import React from 'react';
import { Snackbar, Portal } from 'react-native-paper';
import { Platform, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { theme } from '../theme/theme';

type Props = {
  status: string;
  message: string;
};

export const ToastBar = ({ status, message }: Props) => {
  const [SignInAlert, SetSignInAlert] = useState(true);
  const toastColor = status == 'success' ? '#d1e7dd' : '#f8d7da';

  const showSnackbar = () => {
    setTimeout(() => {
      SetSignInAlert(false);
    }, 3000); // Snackbar will be dismissed after 3 seconds (3000 milliseconds)
  };
  const onDismissSnackBar = () => SetSignInAlert(!SignInAlert);
  showSnackbar();
  return (
    <Portal>
      <Snackbar
        onDismiss={onDismissSnackBar}
        style={[
          Platform.OS === 'android' ? styles.snackbar_android : styles.snackbar,
          { backgroundColor: toastColor, borderColor: 'white' },
        ]}
        visible={SignInAlert}>
        <Text style={{ alignSelf: 'center', marginVertical: 15 }}>
          {message}
        </Text>
      </Snackbar>
    </Portal>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    alignSelf: 'center',
    marginTop: 0,
    marginBottom: '30%',
    color: 'white',
    width: 500,
    paddingHorizontal: 10,
    bottom: 100,
    height: 70,
    borderWidth: 1,
  },
  snackbar_android: {
    alignSelf: 'center',
    width: '60%',
    padding: 'auto',
    paddingLeft: '5%',
    paddingRight: '5%',
    color: 'white',
    borderColor: theme.colors.primary,
  },
});
