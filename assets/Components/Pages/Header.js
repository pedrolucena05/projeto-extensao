import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const marginTopPercentage = height * 0.03;

const Header = ( ) => {

    return (
        <View style={styles.container_header}>
            <Text>Jaboatão dos Guararapes</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container_header: {
        backgroundColor: '#355F3A',
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingTop : '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '5%',
        marginTop: marginTopPercentage
    },
});
