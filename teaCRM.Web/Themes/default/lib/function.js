﻿//*平台公用函数
//*作者：唐有炜
//*时间：2014年08月23日

////测试
//$(function() {
//    showMsg("aaa");
//});

//兼容ie8支持trim 2014-08-25 By 唐有炜
//================================================================
String.prototype.trim = function() { return Trim(this); };

function LTrim(str) {
    var i;
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) != " " && str.charAt(i) != " ")break;
    }
    str = str.substring(i, str.length);
    return str;
}

function RTrim(str) {
    var i;
    for (i = str.length - 1; i >= 0; i--) {
        if (str.charAt(i) != " " && str.charAt(i) != " ")break;
    }
    str = str.substring(0, i + 1);
    return str;
}

function Trim(str) {
    return LTrim(RTrim(str));
}

//=========================================================================================

//弹出框封装结束开始
//需要引用
//<script src="/Themes/default/js/artDialog/lib/jquery-1.10.2.js"></script>
//<link rel="stylesheet" href="/Themes/default/js/artDialog/css/ui-dialog.css">
//<script src="/Themes/default/js/artDialog/dist/dialog-plus-min.js"></script>
//修正margin:10px 10px -10px 10px
function showMsg(Msg, okCallback) {
    var d;
    var id = "dlgShowMsg";
    if (arguments.length == 1) {
        d = dialog({
            title: '温馨提示',
            content: Msg,
            time: 2,
            cancel: false
        });
    } else if (arguments.length == 2) {
        d = dialog({
            title: '温馨提示',
            content: Msg,
            okValue: '确 定',
            ok: okCallback,
            cancelValue: '取消',
            time: 2,
            cancel: false
//            ,
//            cancel: function() {
//                d.close().remove();
//            }
        });
    }
    d.show();
}

function showModal(Msg, okCallback) {
    var d;
    if (arguments.length == 1) {
        d = dialog({
            title: '温馨提示',
            content: Msg
        });
    } else if (arguments.length == 2) {
        d = dialog({
            title: '温馨提示',
            content: Msg,
            okValue: '确 定',
            ok: okCallback,
            cancelValue: '取消',
            cancel: function() {
                d.close().remove();
            }
        });
    }
    d.showModal();
}

//iframe里面弹出对话框并自动关闭
function showTopMsg(id, Msg) {
    //在iframe里面打开弹出框并自动关闭
    top.dialog({
        id: "save_add",
        title: '温馨提示',
        content: Msg,
        onshow: function() {
            setTimeout(function() {
                top.dialog.list[id].close().remove();
            }, 2000);
        },
        cancel: false
    }).show();
}

//===========================================================
//弹出框封装结束


//============================================
//formtip===================================
(function($) {
    $.fn.formtip = function(message, second, option) {
//        if (second == undefined)
//            {second = 1;}
        $(".tip-yellow").remove();
        $(this).css("border", "1px solid red");
        $(this).poshytip({
            className: 'tip-yellow',
            content: message,
            //timeOnScreen: second * 1000, 
            showOn: 'none',
            alignTo: 'target',
            alignX: 'inner-left',
            offsetX: 0,
            offsetY: 5
        }).poshytip("show");
        //$(this).focus();//注意，要结合jquery.validate必须取消
    }
})(jQuery);
//====================================