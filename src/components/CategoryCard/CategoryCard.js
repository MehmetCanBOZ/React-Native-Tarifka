import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './CategoryCard.styles'

const CategoryCard = ({navigation,name,image}) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Meals',{category:name})}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:image}}/>
        <Text style={styles.title}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CategoryCard

