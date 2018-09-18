var pageNavObj = null;
        jQuery(document).ready(function($) {
            pageNavObj = new PageNavCreate("PageNavId",{
                pageCount:10,//总页数
                currentPage:1,//当前页
            });
            pageNavObj.afterClick(pageNavCallBack);
        });
        //翻页按钮点击后触发的回调函数
        function pageNavCallBack(clickPage){
            pageNavObj = new PageNavCreate("PageNavId",{
                pageCount:getPageSet().pageCount,//总页数
                currentPage:clickPage,//当前页 
            });
            pageNavObj.afterClick(pageNavCallBack);
        }
        //本示例页的一些js
        function getPageSet(){
            var obj = {
                pageCount:10,//总页数
                currentPage:5,//当前页
                perPageNum:10,//每页按钮数
            }
            if($("#testPageCount").val() && !isNaN(parseInt($("#testPageCount").val()))){
                obj.pageCount = parseInt($("#testPageCount").val());
            }else{
                obj.pageCount = parseInt($(".page-input-box > input").attr("placeholder"));
            }

            if($("#testCurrentPage").val() && !isNaN(parseInt($("#testCurrentPage").val()))){
                obj.currentPage = parseInt($("#testCurrentPage").val());
                obj.currentPage = (obj.currentPage<=obj.pageCount ? obj.currentPage : obj.pageCount);
            }else{
                obj.currentPage = 1;
            }
            if($("#testPerPageNum").val() && !isNaN(parseInt($("#testPerPageNum").val()))){
                obj.perPageNum = parseInt($("#testPerPageNum").val());
            }else{
                obj.perPageNum = null;
            }
            return obj;
        }