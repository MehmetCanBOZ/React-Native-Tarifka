import { StyleSheet } from "react-native"
export default StyleSheet.create({
  container:{
    backgroundColor:'white',
    margin:8,
    flexDirection:'row',
    alignItems:'center',
    borderTopLeftRadius:50,
    borderBottomLeftRadius:50,
    borderTopRightRadius:5,
    borderBottomRightRadius:5,
  },
  image:{
    width:100,
    height:100,
    resizeMode:'contain',
    marginRight:15,
    marginLeft:7,
    borderRadius:50,
    backgroundColor:'white'
  },
  title:{
    fontSize:20,
  }
})
