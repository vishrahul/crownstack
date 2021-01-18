import React, {Component} from 'react';  
import {Text, View,Image,StyleSheet} from 'react-native';  
  

export default class home extends Component {  



  render() {  
    return (  
    
    
        <View style={{flexDirection:'column',margin:'1%',borderRadius:20,alignItems: 'center', justifyContent: 'center',marginTop:12 }}>  

            <Image
                   
             style={styles.img_style}
             source={{
             uri: this.props.navigation.state.params.item.artworkUrl100,
             }}
             />


          <Text style={styles.title_order} >{this.props.navigation.state.params.item.artistName}</Text>  

          <Text style={styles.title_order2}>{this.props.navigation.state.params.item.trackName}</Text>  

      


      </View>  



    );  
  }  
}  




const styles = StyleSheet.create({


img_style: {
  width: 150,
  height: 150,
},


title_order: {
  fontSize: 18,
  fontWeight: 'bold',
  color:'#000000',
  marginTop:"4%"
},  

title_order2: {
  fontSize: 14,
  color:'#000000',
  marginTop:"4%"
},  


});