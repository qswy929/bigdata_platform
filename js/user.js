new Vue ({
        el: '#app',
        data : {
          ope_info: '登录',
          url: '#'
        },
        methods: {
          urlRoute: function(){
            if(typeof($.cookie('username'))!="undefined" && $.cookie('username') != null)
            {
              this.ope_info = '退出';
              this.url="member/logout.html";
            }
            else
            {
              this.ope_info = '登录';
              this.url="member/login.html";
            }
          }
        },
        mounted: function() {
          //alert($.cookie('username'))
          this.urlRoute();
        }
      });