import { Text, View } from "react-native"
import React from 'react'

const style = {
  headerContainer: {
    backgroundColor:'#f2f3f5',
    marginTop:50,
    padding:15,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
  },
  
  headerTitle: {
   color:'#000',
   fontSize: 50,
   fontWeight:'600',
  },
  
}

const Header = (props) => (
  <View style={style.headerContainer}>
    <Text style={style.headerTitle}>
       {props.title}
    </Text>
  </View>
)

export default Header
