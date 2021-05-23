var tdata=document.getElementById('tdata');
async function getapi() {
    const response = await fetch('/data');
    const data = await response.json();
    console.log(data);
	data.forEach(function (row,index) {
		tdata.innerHTML+="<tr><td>"+(index+1)+"</td><td>"+row.name+"</td><td>"+row.last+"</td><td>"+row.buy+"</td><td>"+row.sell+"</td><td>"+row.volume+"</td><td>"+row.base_unit+"</td></tr>"
	});
}
getapi();
