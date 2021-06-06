import { createApp } from 'vue'
import App from './App.vue'

//ここから
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {
  applyPolyfills,
  defineCustomElements, 
} from '@aws-amplify/ui-components/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
});
Amplify.configure(awsconfig);
const botconfig = {
  bots: {
      "BookTrip_jaJP": {
        "alias": "$LATEST",
        "region": "ap-northeast-1",
      }
  }
}
Amplify.configure(botconfig)
//ここまで

createApp(App).mount('#app')
