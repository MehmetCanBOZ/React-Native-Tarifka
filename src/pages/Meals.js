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
   FlatList,
   TouchableWithoutFeedback,
   Text
 } from 'react-native';
 import MealCard from '../components/MealCard/MealCard';
 import useFetch from '../hooks/fetchData';
 
 const Meals = ({navigation,route}) => {
   const {category} = route.params;

   const {error,loading,data} = useFetch(`filter.php?c=${category}`);

   if(error){
     return <Text>Error</Text>
   }
   if(loading){
    return <Text>loading...</Text>
  }
   const renderItem = ({item}) => {
     return <MealCard title={item?.strMeal} image={item?.strMealThumb} navigation={navigation} id={item?.idMeal}
     />
   }
   return (
        <SafeAreaView style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data?.meals}
            renderItem={renderItem}
            keyExtractor={item => item?.idMeal}
          />
        </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor:"#FFA500",
    padding: 5,
   },
 
 });
 
 export default Meals;
 