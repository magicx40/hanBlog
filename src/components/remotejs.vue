<script>
export default {
    name: 'remoteJS',
    props:{
        remoteDataArr:{
            type: Array,
            required: true
        },
    },
    render(createElement) {
        var that = this;
        if(that.remoteDataArr.length) {
            return createElement('div',{
                'class': 'remoteJs_p',
                style: {
                    display: 'none'
                }
            },that.remoteDataArr.map(function (item) {
                // attrs html attribute 集合
                item.attrs.type = 'text/javascript';
                return createElement('script', {
                    attrs: item.attrs,
                    on: {
                        load: function() {
                            if(item.isLoad) that.$emit(item.loadEventName);
                        }
                    }
                })
            }));
        } else {
            return null;
        }
    }
}
</script>