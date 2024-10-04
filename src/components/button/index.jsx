// Basic Import
import React from 'react'
import styles from './styles'
import {Text, TouchableOpacity  } from 'react-native'
import { SvgXml } from 'react-native-svg'

const  Button =({
    onPress,
    text,
    icon,
    disable,
    customStyle,
    customTextStyles
}) =>{
    return (
       <TouchableOpacity 
       onPress={()=>onPress()}
       style={[styles.btn,
        disable && styles.btn__disable,
        customStyle,
        ]}
       disabled={disable}>
           {icon ? (<SvgXml xml={icon} />):null}
           {text ? (<Text style={[styles.btn__text,customTextStyles]}>{text}</Text>):null}
       </TouchableOpacity>
    )
}

export default Button
