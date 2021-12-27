import React, { useEffect, useCallback, useState} from 'react';
import Pressure from 'pressure';
import { useSvgDrawing } from 'react-hooks-svgdrawing';
import { StyleSheet, Text, View } from 'react-native';

const Main = () => {

    const [
        divRef,
        {
          changePenColor,
          changePenWidth,
          getSvgXML,
          download,
          undo,
          clear
        }
      ] = useSvgDrawing({
        penWidth: 2,
        penColor: '#000'
      });

      const [xml, setXml] = useState('')
  const [penThinnerWidth, setPenThinnerWidth] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const handleChangeXML = useCallback(() => {
    setXml(getSvgXML())
  }, [getSvgXML]);

  const handleClickDownload = useCallback(
    (ext = 'svg' | 'png' | 'jpg') => () => {
      download(ext)
    },
    [download]
  );

  const pressureChange = useCallback(
    (force, event) => {
      setPenThinnerWidth(30 - Math.floor(force * 40))
    },
    [setPenThinnerWidth]
  );

  // Pressure -> https://github.com/stuyam/pressure
  useEffect(() => {
    window.scrollTo(0, 1);
    if (!divRef.current) return
    Pressure.set(divRef.current, {
      change: pressureChange
    })
  }, [divRef, pressureChange]);

  return (
      <View style={styles.mainContainer}>
          {/* Share Modal will go here. */}

          {/* Draw Pad */}
          <View>
              
          </View>

      </View>
  );


}
// End Main code

//Styling on Main
const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
  });

export default Main;