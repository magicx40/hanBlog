<template>
  <div id="app">
    <router-view />
    <remoteJS :remoteDataArr="remoteDataArr" @firebaseLoad="firebaseLoadEvent" @analyticsLoad="analyticsLoadEvent"/>
  </div>
</template>

<script>
import remoteJS from './components/remotejs';
export default {
  name: 'app',
  data() {
    let remoteDataArr;
    if(process.env.NODE_ENV === 'development') {
        remoteDataArr = [
            {
                attrs: { //firebase核心
                    src: "https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js",
                    defer: true
                }
            },
            {
                attrs: { //firebase云消息传递组件
                    src: "https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js",
                    defer: true
                },
                isLoad: true,
                loadEventName: 'firebaseLoad'
            },
            {
                attrs: {
                    src: "https://www.gstatic.com/firebasejs/7.9.1/firebase-analytics.js",
                    defer: true
                },
                isLoad: true,
                loadEventName: 'analyticsLoad'
            }
        ];
    } else if(process.env.NODE_ENV === 'production') {
        remoteDataArr = [
            {
                attrs: { //firebase核心
                    src: "https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js",
                    defer: true
                }
            },
            {
                attrs: { //firebase云消息传递组件
                    src: "https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js",
                    defer: true
                },
                isLoad: true,
                loadEventName: 'firebaseLoad'
            },
            {
                attrs: {
                    src: "https://www.gstatic.com/firebasejs/7.9.1/firebase-analytics.js",
                    defer: true
                },
                isLoad: true,
                loadEventName: 'analyticsLoad'
            }
        ];
    }
    return {
      firebaseConfig: {
        apiKey: "AIzaSyB1IzMJmxHw6jDQ6-a2vGCYMgdpJAJE-AA",
        authDomain: "hanblog-95973.firebaseapp.com",
        databaseURL: "https://hanblog-95973.firebaseio.com",
        projectId: "hanblog-95973",
        storageBucket: "hanblog-95973.appspot.com",
        messagingSenderId: "172703745098",
        appId: "1:172703745098:web:f950c82170ca3d8c0e12b3",
        measurementId: "G-EXFMWS4790"
      },
      remoteDataArr,
      token:'',
    }
  },
  methods:{
    firebaseLoadEvent() {
      if(typeof firebase != 'undefined') {
        firebase.initializeApp(this.firebaseConfig);
      }

    },
    analyticsLoadEvent() {
      if(typeof firebase != 'undefined') {
        firebase.analytics();
      }
    }
  },
  components: {
    remoteJS
  },
  created() {

  },
  mounted() {
    
  }
}
</script>

<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font:16px/38px PingFangSC-Regular,HelveticaNeue-Light,'Helvetica Neue Light','Microsoft YaHei',sans-serif;

}
</style>
