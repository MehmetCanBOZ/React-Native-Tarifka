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
 import CategoryCard from '../components/CategoryCard/CategoryCard';
 import useFetch from '../hooks/fetchData';
 
 const Categories = ({navigation}) => {
 
   const {error,loading,data} = useFetch('categories.php');

   const renderItem = ({item}) => {
     return <CategoryCard name={item.strCategory} image={item.strCategoryThumb} navigation={navigation}/>
   }
   return (
        <SafeAreaView style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.categories}
            renderItem={renderItem}
            keyExtractor={item => item.idCategory}
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
 
 export default Categories;
 