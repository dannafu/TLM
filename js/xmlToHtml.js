function xml2html() {
	if (window.XMLHttpRequest)
	  {// codigo para IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp = new XMLHttpRequest();
	  }
	else
	  {// codigo para IE6, IE5
	  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.open("GET","../xml/facturacion.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 
	document.write("<h1 style='color:#2d6a4f; text-align:center'>Facturación de clientes</h1>");
	document.write("<table border=1 style='color:#375444; text-align:center'><tr><th>Emisor</th><th>Fecha</th><th>Valor</th><th>Concepto</th><th>Descripción</th></tr>");
	var x = xmlDoc.getElementsByTagName("factura");
	for (i=0;i<x.length;i++)
	  { 
	  document.write("<tr><td>");
	  document.write(x[i].getElementsByTagName("emisor")[0].childNodes[0].nodeValue);
	  document.write("</td><td>");
	  document.write(x[i].getElementsByTagName("fecha")[0].childNodes[0].nodeValue);
	  document.write("</td><td>");
	  document.write(x[i].getElementsByTagName("valor")[0].childNodes[0].nodeValue);
	  document.write("</td><td>");
	  document.write(x[i].getElementsByTagName("concepto")[0].childNodes[0].nodeValue);
	  document.write("</td><td>");
	  document.write(x[i].getElementsByTagName("descripcion")[0].childNodes[0].nodeValue);
	  document.write("</td><tr>");
	  }
	const tablaa = document.write("</table>");
    tablaa.style.textAlign = 'center';
}