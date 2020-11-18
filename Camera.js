import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Alert,
  } from 'react-native';
  import {PureComponent} from 'react';
import {RNCamera} from 'react-native-camera';

//import Icon from 'react-native-vector-icons/dist/FontAwesome';

import RNFS from 'react-native-fs';
import { ScrollView } from 'react-native-gesture-handler';


export default class Camera extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
          takingPic: false,
          value: ""
        }
    }

    takePicture = async () => {
      if (this.camera && !this.state.takingPic) {
         
        let options = {
          quality: 0.85,
          base64: true,
          fixOrientation: true,
          forceUpOrientation: true,
        };

        this.setState({takingPic: true});

        try {
          const data = await this.camera.takePictureAsync(options);
          RNFS.readFile(data.uri, 'base64')
            .then(res =>{
              console.log(res);
              this.setState({value: res})
              this.props.navigation.push("OCR", {value: this.state.value});
            });
            //console.log(data.uri);
        
        } catch (err) {
          Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
          return;
        } finally {
          this.setState({takingPic: false});
        }

      }
    };

    render(){
        const {navigation} = this.props;
        return (
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            captureAudio={false}
            style={{flex: 1}}
            type={RNCamera.Constants.Type.back}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.btnAlignment}
                    >
                    <Button title="camera" onPress={this.takePicture} size={100} color="#fff" />
                </TouchableOpacity>
            </RNCamera>
        );
    }
}

const styles = StyleSheet.create({
  btnAlignment: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 20,
  },
});

