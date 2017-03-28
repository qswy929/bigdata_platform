new Vue ({
        el: '#app',
        data : {
          ope_info: '登录',
          url: '#'
        },
        methods: {
          urlRoute: function(){
            if(typeof($.cookie('JSESSIONID'))!="undefined" && $.cookie('JSESSIONID') != null)
            {
              this.ope_info = '退出';
              this.url="http://cloudware.tongji.edu.cn/member/signout.html";
            }
            else
            {
              this.ope_info = '登录';
              this.url="http://cloudware.tongji.edu.cn/member/signin.html";
            }
          }
        },
        mounted: function() {
          //alert($.cookie('username'))
          this.urlRoute();
        }
      });
