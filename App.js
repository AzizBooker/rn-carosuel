import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { Dimensions } from 'react-native'; //Import Dimensions

const colors=[   
  '#000','#111','#222','#333','#444','#555','#666','#777','#888','#999','#aaa',
  '#bbb','#ccc','#ddd','#eee'
]

const height=Dimensions.get('window').height

const renderItem=({item})=>{
console.log(item)
  return(
      <View style={{...styles.itemContainer,height:height,backgroundColor:item}}> //!Styles
        <Text style={styles.text}>{item}</Text> 
      </View>
       
  )
}

//! Step 3 Rendering Footer
const renderFooter=()=>{
  return(
  <View style={{...styles.itemContainer,height:height,backgroundColor:'#228'}}>
    <Text style={styles.text}>End of the Line!</Text>
  </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar hidden/>
     <FlatList
     ListFooterComponent={renderFooter} //! Step 3
     decelerationRate={'normal'} showsVerticalScrollIndicator={false} snapToInterval={height} snapToAlignment={'start'} //!Step 2
     data={colors} renderItem={renderItem} keyExtractor={item=>item} /> //! Step 1 renderItem
    </View>
  );
}
// 
// <ImageBackground style={styles.images} source={{uri:"https://images.unsplash.com/photo-1500817487388-039e623edc21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"}}/>
const styles = StyleSheet.create({
  container: {
      flex:1,

  },

  itemContainer:{
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    fontSize:48,
  fontWeight:'bold',
   color: '#fff'
  }
  
});
