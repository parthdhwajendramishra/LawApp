// import React, { useEffect } from 'react';
// import { ActivityIndicator } from 'react-native-paper';
// import { Platform, Text, View } from 'react-native';
// import { useState } from 'react';
// import { theme } from '../core/theme';
// import Modal from 'react-native-modal';

// export const FullScreenLoader = (props: any) => {
//     const [loading, setLoading] = useState(props.visible);
//     useEffect(() => {
//         setLoading(props.visible)
//     }, [props.visible])
//     return (
//         <Modal isVisible={loading} animationIn="zoomIn" animationOut="zoomOut" backdropColor="black">
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <ActivityIndicator size="large" color="theme.color.primary" />
//             </View>
//         </Modal>
//     )
// }

import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { Platform, Text, View } from 'react-native';
import { useState } from 'react';
import { theme } from '../core/theme';
import Modal from 'react-native-modal';
import Spinner from 'react-native-loading-spinner-overlay'; // Import the library

export const FullScreenLoader = (props: any) => {
    const [loading, setLoading] = useState(props.visible);
    useEffect(() => {
        setLoading(props.visible);
    }, [props.visible]);

    return (
        <Spinner
            visible={loading} // Control visibility based on state
            overlayColor="rgba(0, 0, 0, 0.25)"
        >
        </Spinner>
    );
}

