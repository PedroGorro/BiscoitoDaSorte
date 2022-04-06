import React, {Component} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";


class App extends Component{

  constructor(props){
    super(props);
    this.state = {txtfrase:'',
                  img: require('./src/biscoito.png')
                }


    this.frases=['essa é uma frase muito sabia',
                'essa é outra',
                'pau no cu do flamengo',
                'nao se sabe mais fazer frases como antigamente']

    this.quebrabiscoito=this.quebrabiscoito.bind(this)

  }
   
  quebrabiscoito(){
    let numeroaleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      txtfrase:'"' + this.frases[numeroaleatorio] + '"',
      img: require('./src/biscoitoAberto.png')

    })

  }

  render(){
    return(
      <View style = {styles.container}>
        <Image 
        source={this.state.img}
        style={styles.img}/>
        
        <Text style={styles.textofrase} >{this.state.txtfrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebrabiscoito}>
          <View style={styles.areadobotao}>
            <Text style = {styles.btntxt}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
)
  }}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    paddingTop:20
  },
  img:{
    width:250,
    height:250,
    
  },
  textofrase:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    fontStyle:"italic",
    textAlign: "center"
  },
  botao:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor:'#dd7b22',
    borderRadius:25
  },
  areadobotao:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  },
  btntxt:{
    fontSize:18,
    fontWeight:'bold',
    color:'#dd7b22'
  }
}
)
export default App

