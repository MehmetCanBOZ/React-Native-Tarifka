/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   TouchableWithoutFeedback,
   Text
 } from 'react-native';
 import MealDetails from '../components/MealDetails/MealDetails';
 import useFetch from '../hooks/fetchData';
 
 const Details = ({route}) => {
   const {id} = route.params;
   
   const {error,loading,data} = useFetch(`lookup.php?i=${id}`);
   
   if(error){
     return <Text>Error</Text>
   }
   if(loading){
    return <Text>loading...</Text>
  }
  console.log("title",data?.meals[0]?.strMeal);
   return (
        <SafeAreaView style={styles.container}>
          <MealDetails title={data?.meals[0]?.strMeal} image={data?.meals[0]?.strMealThumb} area={data?.meals[0]?.strArea} instruction={data?.meals[0]?.strInstructions} youtubeLink={data?.meals[0]?.strYoutube} />
        </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor:"#F2F2F2",
    padding: 5,
   },
 
 });
 
 export default Details;
