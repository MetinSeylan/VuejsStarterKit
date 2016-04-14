<template>
    <router-view></router-view>
</template>

<script>
    import Socket from 'socket.io-client';
    import Config from './config';

    export default{
        data(){
            return {
                socket: null,
                user: null
            }
        },
        ready(){
            var socket = Socket.connect(Config.socket);
            var me = this;
            socket.on('emit', function (data) {
                me.$broadcast(data.emit, data.data);
            });
            this.$set('socket', socket);
        }
    }
</script>
