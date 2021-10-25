/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  NativeEventEmitter,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CIDScan from "react-native-cidscan";
import RNCIDScanView from "react-native-cidscan/src/cidscanview";

const captureIDHandlerEmitter = new NativeEventEmitter(CIDScan);

const mKey = 'HetpZ4Bk0ivwF6dhHIHmbQH5ALUMOb/cQB5+I3fdD2LV5Yrm1sxkbrVL1X8vL4S55O7hmCQhGPCemfH/mUTz5yy3ip3TQDJU2pCeU3Zjbb3kyVdPYGdn59dPGFdv+aXdrIIRQHizRtbsC8NamuxWaRAGTfTGCM/IhEKvxkQO0ONSneBYSrY8OHpcEK7EVKCDSl3JQNJwHVWbpJDcIoR/WRVMSlJ/e9/qFOM3mPhwVJ1FCDF+e94mKpHQzOlRffJ/Zm2Mv1+UKJwriC/VpWK7+N1KJ9EZChf8U0MSdrMxSTGCxVZzZbTbt+pflWv2jUD9yFxHGbuyHVvpqnk0PUpFxF5VLIZy9kIesTg3ZSiho6kGTOY1bdGfqW3NppYmh1H0eCxQquhn5RitL74LwuLmKw==';
const mCust = 'P4I082220190001';

async function init() {
  const result = await CIDScan.initCaptureID(callback);
  this.subscription = captureIDHandlerEmitter.addListener(
      'decoderEvent',
      (data) => {
          console.log(data);
          CIDScan.stopCameraPreview();
      }
  );
}

async function activate() {
  const result = await CIDScan.activateEDKLicense(mKey, mCust, license);
}

function callback(error, result) {
  if (error) {
      // Funktion eurer Wahl 
  } else {
      activate();
  }
}

function license(error, result) {
  if (error) {
      // Funktion eurer Wahl 
  } else {
      // Funktion eurer Wahl 
  }
}

function preview(error, result) {
  if (error) {
      // Funktion eurer Wahl 
  } else {
      // Funktion eurer Wahl 
  }
}

function start(){
  CIDScan.startCameraPreview(preview);
  CIDScan.startDecoder();
}

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(100, 100, 100, 0)' }}>
                <RNCIDScanView style={{ height: '100%', width: '100%' }}>
                </RNCIDScanView>
        </View>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
