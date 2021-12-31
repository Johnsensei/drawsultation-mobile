import React, { useEffect, useCallback, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

import Logo from '../img/drawsultation.png';

const Main = () => {

  

  return (
    <View style={styles.mainContainer}>
        {/* Share Modal will go here. */}

        {/* Draw Pad */}
        <View
        style={styles.drawPad}

        />
        
        {/* Buttons */}
        <View style={styles.sideButtonsContainer}>

            <View style={styles.sideLogoContainer}>
                <Image
                    source={Logo}
                    alt='Drawsultation logo'
                    style={styles.sideLogo}
                    // resizeMethod='resize'
                    // resizeMode='contain'
                />
            </View>

            {/* Pen width buttons */}
            {/* <View style={styles.penButtonContainer}>
                

            </View> */}

        </View>
        

        

    </View>
  );

  

}
// End Main code



//Styling on Main
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        // flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#000',
    },

    drawPad: {
        width: 300,
        height: 300,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        backgroundColor: '#fff',
    },

    sideButtonsContainer: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
    },

    sideLogoContainer: {
        width: 300,
        backgroundColor: '#26AAE1',
        // paddingTop: 100,
        // paddingBottom: 1.5,
        // padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 4,
    },

    sideLogo: {
        // width: 'auto',
        width: 290,
        // padding: 100,
        resizeMode: 'contain'
    },

    penButtonContainer: {
        width: 96,
        // background: 'linear-gradient(180deg, #26AAE1 50%, #26AAE100 50%)',
    },
  });

export default Main;