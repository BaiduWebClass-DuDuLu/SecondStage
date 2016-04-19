var putstr=[];
var timer;
var container=document.getElementsByClassName("contain");
var preButton=document.getElementById("preOrder");
var inButton=document.getElementById("inOrder");
var postButton=document.getElementById("postOrder");

function addHandler(node, event, func){
    if (node.addEventListener) {
        node.addEventListener(event, func);
    } else if (node.attachEvent) {
        node.attachEvent("on" + event, func);
    } else {
        node["on" + event] = func;
    }
}
function addClass(node, className) {
    node.className = className;
}
function removeClass(node) {
    node.className = "";
}
function animate(){
    var i = 0;
    addClass(putstr[i],"active");
    timer = setInterval(function(){
        i++;
        if(i < putstr.length){
            removeClass(putstr[i-1]);
            addClass(putstr[i],"active");
        }else{
        	clearInterval(timer);
        	removeClass(putstr[i-1]);
            }
        },500)
}
function reset(){
    var divs=document.getElementsByTagName("div");
    [].forEach.call(divs,function(v){
        removeClass(v);
    });
}        

addHandler(preButton,"click",function(){
	putstr=[];
	clearInterval(timer);
	reset();
	preOrder(container);
	animate();
	
});
addHandler(inButton,"click",function(){
	putstr=[];
	clearInterval(timer);
	reset();
	inOrder(container);
	animate();
});
addHandler(postButton,"click",function(){
	putstr=[];
	clearInterval(timer);
	reset();
	postOrder(container);
	animate();
});


function preOrder(node){
	if(node!=null) {
        putstr.push(node);
        if(node.firstElementChild){
			arguments.callee(node.firstElementChild);
		}
		if (node.lastElementChild){
        	arguments.callee(node.lastElementChild);
		}
    }       
}
	
function inOrder(node){
	if(node!=null) {
        
        if(node.firstElementChild){
			arguments.callee(node.firstElementChild);
		}
		putstr.push(node);
		if (node.lastElementChild){
        	arguments.callee(node.lastElementChild);
		} 
    } 
}
function postOrder(node){
	if(node!=null) {
        
        if(node.firstElementChild){
			arguments.callee(node.firstElementChild);
		}
		
		if (node.lastElementChild){
        	arguments.callee(node.lastElementChild);
		} 

		putstr.push(node);
    } 
}

