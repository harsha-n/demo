/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ToastAndroid,
  Dimensions,
  ListView,
  Text,
  View
} from 'react-native';
var { height, width } = Dimensions.get('window');
import Stt from 'react-native-stt';
import SpeechAndroid from 'react-native-android-voice';
import Tts from 'react-native-tts';
import { STTandroid, STTios } from 'react-native-speech-to-text';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [" Hi! How can i Help you", "Whateverway you want" , "thank you!", "Pro Kranthi", "No Ashfaq is pro", "Let's see"],
      err: '',
      };
  }

  componentWillMount() {
    // Tts.speak('Hi Ashfaq, is this fine?');
    Tts.setDefaultLanguage('ar-SA');
    Tts.speak('الوثيقة المطلوبة');
    Tts.voices().then(voices => {
      console.log(voices.length)
      b =[]
      voices.map(x => b.push(x['language']))
      console.log(b)
       let c = b.indexOf('ar-DZ')
       let d = b.indexOf('ar-AE')
       let e = b.indexOf('th-TH')
       console.log('e,d,c', e,'0', d,'0', c)
    });
    // var spokenText = await SpeechAndroid.startSpeech("Speak yo", SpeechAndroid.HINDI);
    //     ToastAndroid.show(spokenText , ToastAndroid.LONG);
    // Tts.speak('spokenText');
   // if (Platform.OS === 'android') {
   // STTandroid.showGoogleInputDialog()
   //     .then((result) => {
   //         console.log(result)
   //         this.setState({text: result})
   //     })
   //     .catch((error) => {
   //         console.log(error)
   //         this.setState({err: error})
   //     })
 
   //  } rowData, sectionID, rowID, highlightRow
  }

  renderCompanyList() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <ListView
        ref={(resultList) => { this.resultList = resultList; }}
        keyboardShouldPersistTaps={'always'}
        dataSource={ds.cloneWithRows(this.state.text.reverse())}
        renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, rowID)}
        style={{marginBottom: 10, flex:1, backgroundColor: 'yellow',  transform: [{ scaleY: -1 }]}}
      />
    );
  }

  renderRow(rowData, rowID) {
    return(
      <View style={{backgroundColor: 'blue', flex: 1, justifyContent: 'flex-end'}}>
        {(rowID % 2) ? this.renderSiri(rowData) : this.renderCustomer(rowData)}
      </View>
    );
    
  }

  renderSiri(rowData) {
    return (
      <View style={{backgroundColor: 'green', marginLeft: 10,marginVertical: 5, marginRight: width/8 , transform: [{ scaleY: 0,}, { scaleX: -1,}]}}>
        <Text style={{textAlign: 'left'}}>{rowData}</Text>
      </View>
    );
    
  }

  renderCustomer(rowData) {
    return(
      <View style={{backgroundColor: 'red', marginRight: 10,marginVertical: 5,  marginLeft: width/8, transform: [{ scaleY: 0,}, { scaleX: -1,}]}}>
        <Text style={{textAlign: 'right'}}>{rowData}</Text>
      </View>
    );
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <View style={{flex: 1, justifyContent: 'flex-end', backgroundColor: 'violet'}}>
        {this.renderCompanyList()}
        </View>
        <Text style={styles.instructions}>
        {this.state.err}
        </Text>
        <Text style={styles.instructions2}>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
  instructions: {
    textAlign: 'center',
    color: 'green',
    marginBottom: 5,
  },
});
