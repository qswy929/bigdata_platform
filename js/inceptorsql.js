var editor = ace.edit("editor");
      editor.setTheme("ace/theme/terminal");
      editor.getSession().setMode("ace/mode/sql");
      editor.setOption("wrap", "free");
      editor.setFontSize(16);
      editor.setShowPrintMargin(false);

      var queries = 0;
      var cur_step = 0;
      var table;
      var len;  //SQL语句条数

      function execSQL_Next(dbName)
      {
        if(cur_step > 1 && cur_step <= len)
        {
          if(cur_step + 1 > len)
          {
            $("#btn_next").css('display','none');
          }
          table.destroy();
          table.destroy();  //一定要执行两次
          var tb="<table id='list' class='display' cellspacing='0' width='100%'></table>";  //这个bug排了24小时然而用一行代码就解决了
          $("#container_table").html(tb);
          loadTable(dbName,queries[cur_step-1]);
          
        }
      }

      function execSQL(dbName){ 
        queries = editor.getValue().split(";");
        len = queries.length;
        if(queries[len-1]=="")  //最后一项为空
        {
          len = len - 1;
        }
        cur_step = 1;
        //alert(queries[0]);
        try {
          table.destroy();
          table.destroy();  //一定要执行两次
          var tb="<table id='list' class='display' cellspacing='0' width='100%'></table>";
          $("#container_table").html(tb);
        }
        catch(err) {

        }
        finally{
          loadTable(dbName,queries[0]);
          if(len > 1)
          {
            $("#btn_next").css('display','inline-block');
          }
        }
        
      }
      
      function loadTable(dbName, query){
          $("button").attr({"disabled":"disabled"});
          var addr = 'http://cloudware.tongji.edu.cn/api/v1/inceptorsql';

          re = new RegExp("from","g"); //定义正则表达式
          //第一个参数是要替换掉的内容，第二个参数"g"表示替换全部（global）。
          query = query.replace(re, "form"); //第一个参数是正则表达式。

          var para = 'dbname='+dbName+'&query='+query;
          //var json;
          //console.log(para);
          $.ajax({
            type: "POST",
            url: addr,
            data: para,
            dataType: "text",
            success: function(json){
              try {
                //console.log(json.columns);

                json = JSON.parse(json);
                //alert(json.columns);
                table = $("#list").DataTable( {
                "data": json.data,
                "columns": json.columns,
                dom: 'Bfrtip',
                "destroy": true,
                "processing": true,
                buttons: [
                  {
                      extend: 'csvHtml5',
                      text: '导出成CSV',
                      title: 'sql_result'
                  }
                ],
                "scrollY": "250px",
                "scrollX": true,
                "scrollCollapse": true,
                "paging": true,
                "language": {  
                            info: "当前显示：第 _START_ - _END_ 条",
                            paginate: {
                                      first: "首页",
                                      previous: "上一页",
                                      next: "下一页",
                                      last: "尾页"
                            },
                            search: "搜索：",
                            infoEmpty:  "无搜索结果",
                            infoFiltered: "(从 _MAX_ 条记录中筛选)",
                            zeroRecords: "没有找到记录",
                            lengthMenu: "每页 _MENU_ 条记录"
                    }
                });
              }
             catch(err) {
                alert(json);
                //table.draw();
                //talbe.reload();
              }
              finally {
                $("button").removeAttr("disabled");//将按钮可用
                //alert(cur_step);
                cur_step = cur_step + 1;  //下一条指令是第2条
              }
            }
        });
    }