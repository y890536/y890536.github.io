    // 这里使用最原始的js语法实现，可对应换成jquery语法进行逻辑控制
    var visible = document.getElementById('psw_visible'); //text block
    var invisible = document.getElementById('psw_invisible'); //password block
    var inputVisible = document.getElementById('input_visible');
    var inputInVisible = document.getElementById('input_invisible');
    //隐藏text block，显示password block
    function showPsw() {
        var val = inputInVisible.value; //将password的值传给text
        inputVisible.value = val;
        invisible.style.display = "none";
        visible.style.display = "";
    }
    //隐藏password，显示text  
    function hidePsw() {
        var val = inputVisible.value; //将text的值传给password  
        inputInVisible.value = val;
        invisible.style.display = "";
        visible.style.display = "none";
    }