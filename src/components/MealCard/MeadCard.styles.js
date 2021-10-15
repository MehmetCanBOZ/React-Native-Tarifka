import { StyleSheet, Dimensions } from "react-native";
const DeviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container:{
    margin:8,
    justifyContent:'center',
    alignItems:'center',
  },
  image:{
    width:DeviceSize.width * 0.95,
    height:200,
    resizeMode:'cover',
    borderRadius:10,
  },
  info_container : {
    position: 'absolute',
    backgroundColor:'black',
    bottom: 0,
    width: '100%',
    opacity: 0.7,
    alignItems:'flex-end',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  title:{
    fontSize:30,
    color: 'white',
    fontWeight:'bold',
    paddingHorizontal:10,
    paddingVertical:5,
  }
})