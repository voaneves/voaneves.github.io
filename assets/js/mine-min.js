var grid=document.getElementById("mine-grid"),game_active=!0;const refresh=document.querySelector(".refresh");function generateGrid(){grid.innerHTML="";for(var e=0;e<10;e++){row=grid.insertRow(e);for(var r=0;r<10;r++){cell=row.insertCell(r),cell.onclick=function(){clickCell(this)};var t=document.createAttribute("data-mine");t.value="false",cell.setAttributeNode(t)}}addMines(),game_active=!0}function addMines(){for(var e=0;e<20;e++){var r=Math.floor(10*Math.random()),t=Math.floor(10*Math.random());grid.rows[r].cells[t].setAttribute("data-mine","true")}}function revealMines(){for(var e=0;e<10;e++)for(var r=0;r<10;r++){var t=grid.rows[e].cells[r];"true"==t.getAttribute("data-mine")&&(t.className="mine")}game_active=!1}function checkLevelCompletion(){for(var e=!0,r=0;r<10;r++)for(var t=0;t<10;t++)"false"==grid.rows[r].cells[t].getAttribute("data-mine")&&""==grid.rows[r].cells[t].innerHTML&&(e=!1);e&&revealMines()}function clickCell(e){if("true"==e.getAttribute("data-mine"))revealMines();else if(0!=game_active){e.className="clicked";for(var r=0,t=e.parentNode.rowIndex,a=e.cellIndex,i=Math.max(t-1,0);i<=Math.min(t+1,9);i++)for(var n=Math.max(a-1,0);n<=Math.min(a+1,9);n++)"true"==grid.rows[i].cells[n].getAttribute("data-mine")&&r++;if("0"!=r)e.innerHTML=r;else for(i=Math.max(t-1,0);i<=Math.min(t+1,9);i++)for(n=Math.max(a-1,0);n<=Math.min(a+1,9);n++)""==grid.rows[i].cells[n].innerHTML&&clickCell(grid.rows[i].cells[n]);checkLevelCompletion()}}function main(){generateGrid(),refresh.addEventListener("click",generateGrid)}main();