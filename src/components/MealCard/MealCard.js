import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './MeadCard.styles'

const MealCard = ({navigation,title,image,id}) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Details',{id})}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:image}}/>
        <View style={styles.info_container}>
          <Text numberOfLines={1}  style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default MealCard
