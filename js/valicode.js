/*-----------------------------------------------------------------------------
* @Description: 验证码生成
* @author: 	Ethan 
* @date		2016.07.20
* ---------------------------------------------------------------------------*/
function showCheck(a){/* 显示验证码图片 */
	var c = document.getElementById("myCanvas");
  if(c != undefined)
  {
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,1000,1000);
   ctx.font = "80px Arial";
    ctx.fillText(a,60,95);
  }
}

var code ; //在全局 定义验证码      
function createCode(){       
    code = "";      
    var codeLength = 4;//验证码的长度
    var selectChar = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');      
          
    for(var i=0;i<codeLength;i++) {
       var charIndex = Math.floor(Math.random()*60);      
      code +=selectChar[charIndex];
    }      
    if(code.length != codeLength){      
      createCode();      
    }
    showCheck(code);
}
          

function validate() {
    var inputCode = document.getElementById("form-valicode").value.toUpperCase();
    var codeToUp=code.toUpperCase();
    //未输入
    if(inputCode.length <=0) {
      document.getElementById("form-valicode").setAttribute("placeholder","请输入验证码");
      createCode();
      return false;
    }
    //输入错误
    else if(inputCode != codeToUp ){
      document.getElementById("form-valicode").value="";
      document.getElementById("form-valicode").setAttribute("placeholder","输入错误");
      createCode();
      return false;
    }
    else {
      //window.open(document.getElementById("J_down").getAttribute("data-link"));
      //document.getElementById("J_codetext").value="";
      alert("输入正确！");
      createCode();
      return true;
    }

}

// $(document).ready(createCode);