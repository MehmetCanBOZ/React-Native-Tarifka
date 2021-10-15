import { StyleSheet, Dimensions } from "react-native";
const DeviceSize = Dimensions.get('window');
export default StyleSheet.create({
  image:{
    width:DeviceSize.width,
    height:DeviceSize.height / 3,
    resizeMode:'cover',
  },
  info_container : {
    paddingHorizontal:10,
  },
  title:{
    fontSize:25,
    color:'#A52A2A',
    fontWeight:'bold',
    paddingLeft:10,
    marginTop:5,
  },
  indicator:{
    backgroundColor:'gray',
    height: 1,
    width: '100%',
  },
  area:{
    fontSize:20,
    color:'#A52A2A',
    fontWeight:'bold',
    marginVertical:5,
    paddingLeft:10,
  },
  instruction:{
    marginVertical:10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    borderRadius:5,
    marginBottom:10,
  },
  link:{
    textAlign:'center',
    color: 'white',
    fontSize:20,
    fontWeight:"bold",  
  }
})