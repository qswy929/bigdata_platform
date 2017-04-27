new Vue ({
        el: '#user',
        data : {
          ope_info: '登录',
          url: '#'
        },
        methods: {
          urlRoute: function(){
            var prefix="";
            var len= window.location.pathname.split("/").length;
            for (var i = 2;i<len;i++)
            {
              prefix = prefix + "../";
            }
            if(typeof($.cookie('JSESSIONID'))!="undefined" && $.cookie('JSESSIONID') != null)
            {
              this.ope_info = '退出';
              this.url=prefix+"member/signout.html";
            }
            else
            {
              this.ope_info = '登录';
              this.url=prefix+"member/signin.html";
            }
          }
        },
        mounted: function() {
          //alert($.cookie('username'))
          this.urlRoute();
        }
      });
