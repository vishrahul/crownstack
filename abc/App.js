import * as React from 'react';
import { StyleSheet, View, Text,FlatList,Image,ActivityIndicator} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DetailsScreen from './src/home'


class HomeScreen extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = { 
    dataSource:[],
    isLoading: true,
    
  };

  }


  componentDidMount(){

    
       return fetch("https://itunes.apple.com/search?term=Michael+jackson")
         .then((response) => response.json())
         .then((responseJson) => {

          console.log("sfsfssd ",responseJson)

           this.setState({
             dataSource: responseJson.results ,
             isLoading:false
           });

         })
         .catch((error) => {
           console.error(error);
         });

  }





  getListViewItem = (item) => {  
   this.props.navigation.navigate('Main_screen',{item})


}  









  render() {


    if (this.state.isLoading) {
      
      return (
        <View style={styles.forprogress}>
        
          <ActivityIndicator size="large"/>
        </View>
      );
    }
 

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
{/*         
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Main_screen')}
        /> */}


      <FlatList
          style={styles.forflatlist}
          data={ this.state.dataSource }
          extraData={this.state}
          directionalLockEnabled={true}
          
          renderItem={({ item, index }) => {
            return (

              <View >
                <View>

                     <View style={{flexDirection:'row',backgroundColor:'#42A5F5',margin:'1%',borderRadius:20}}
                     
                    
                     >


                    <View>
                    <Image
                     onPress={this.getListViewItem.bind(this, item)}
                     style={styles.img_style}
                     source={{
                     uri: item.artworkUrl100,
                     }}
                     />

                    </View>



                     <View>

                     <Text  style={{ color: "white",marginLeft:'6%' }}
                    
                     >{item.artistName}</Text>

                     <Text  
                     style={{ color: "white",marginLeft:'6%' }}>{item.trackName}</Text>


                    <Text  
                     onPress={this.getListViewItem.bind(this, item)}
                     style={{ color: "black",marginLeft:'71%' ,marginTop:'10%' ,fontSize:11}}>Details</Text>
  
                    </View>


                    

                  

                </View> 

               </View>

              </View>
                   
                   );
          }}
             
         keyExtractor={(item, index) => index.toString()}

         ListEmptyComponent={this.ListEmpty}

          />



      </View>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Main_screen: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}




const styles = StyleSheet.create({
 

  forprogress: {
    flex: 1,
  
    justifyContent: 'center',
    alignItems: 'center'
  },

  forflatlist: {
    flex: 1,
    margin:'2%',
    width:'100%',
  
    
  },



img_style: {
  width: 90,
  height: 90,
},


});