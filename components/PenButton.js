import React, { useState } from 'react';
import { Image, Animated, StyleSheet } from 'react-native';

const PenButton = ({ alt, onClick, src }) => {
    const [pushed, setPushed] = useState(false);
  
    return (<Image 
             source={src}
             alt={alt}
             style={styles.penSelectButton}
             onClick={() => {
                onClick();
                setPushed(true);
             }}
             onAnimationEnd={() => setPushed(false)}
             />)
  }

  const styles = StyleSheet.create({

    penSelectButton: {
        width: 32,
    }

  });

  export default PenButton;