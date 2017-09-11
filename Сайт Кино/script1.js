function lab5_1()
{
	
	for(var i = 0; i < document.all.length; i++)
	{
		var element = document.all[i];
		
		    
		    alert("Имя элемента " + element.tagName + "Номер типа элемента " + element.nodeType); 
			
		
		//document.write(document.all[i] + " ");
		//document.write("Номер типа элемента" + document.all[i].nodeType);
	}
}
function lab5_2()
{
	for(var i=0; i<document.body.childNodes.length; i++)
	{
	    var child = document.body.childNodes[i]
	    alert(child.nodeName) 
	}	
}

function lab5_3()
{
	var infospan;
	
	var elements = document.all;
	for(var i = 0; i < elements.length; i++)
	{
		if(elements[i].tagName == "SPAN")
		{
			var elementsspan = elements[i];
			break;
		}
	}
	alert(elementsspan.innerHTML);
	//Вывод содержимого тега span при помощи id
	var infospan = document.getElementById("outputinfo");
	alert(infospan.innerHTML);
	//Вывод содержимого тега спан через getElementByTagName
	var spans = document.getElementsByTagName("span");
	alert(spans[0].innerHTML);
	
}

function lab5_4()
{
	var table = document.getElementById("films");
	var balls = table.getElementsByTagName("td");
	var everageball;//Средний балл фильма
	var sum = 0;//Сумма всех баллов фильма
	for(var i = 1; i <= balls.length; i = i + 4)
	{
		sum = parseFloat(balls[i].innerHTML,10) + parseFloat(balls[i+1].innerHTML,10);
		everageball = sum / 2;
		balls[i+2].innerHTML = everageball.toFixed(2);
	}
}

///////////////////////////////////////////////////////////
////////////Лабораторная работа № 6 JavaScript/////////////
///////////////////////////////////////////////////////////



  function window1() {
    okno1 = window.open("", "Window 1", "width=800,height=600");
    okno1.document.write("Имя окна - "+ okno1.name +"<br />");
   
  }

function button1close() {
	okno1.close();
}

function window2() {
    okno2 = window.open("", "Window 2", "width=800, height=600, status=yes, scrollbars=yes, resizable=yes");
    okno2.document.write("Имя окна - "+ okno2.name +"<br />");
  }

function button2close() {
	okno2.close();
}


function lab6_2()
{	
	document.write("<table border='3'>")
		document.write("<tr><th>свойство</th><th>значение</th></tr>")
		document.write("<tr>");
			document.write("<td>userAgent </td>");
			document.write("<td>"+navigator.userAgent+"</td>");
		document.write("</tr>");
		document.write("<tr>");
			document.write("<td>appVersion </td>");
			document.write("<td>"+navigator.appVersion +"</td>");
		document.write("</tr>");
		document.write("<tr>");
			document.write("<td>appName  </td>");
			document.write("<td>"+navigator.appName  +"</td>");
		document.write("</tr>");
		document.write("<tr>");
			document.write("<td>appCodeName  </td>");
			document.write("<td>"+navigator.appCodeName  +"</td>");
		document.write("</tr>");
		document.write("<tr>");
			document.write("<td>platform  </td>");
			document.write("<td>"+navigator.platform  +"</td>");
		document.write("</tr>");
		document.write("<tr>");
			document.write("<td>javaEnabled()   </td>");
			document.write("<td>"+navigator.javaEnabled()   +"</td>");
		document.write("</tr>");
		document.write("<tr>");
			document.write("<td>width   </td>");
			document.write("<td>"+screen.width  +"</td>");
		document.write("</tr>");
		document.write("<tr>");
			document.write("<td>height   </td>");
			document.write("<td>"+screen.height  +"</td>");
		document.write("</tr>");
			document.write("<tr>");
			document.write("<td>colorDepth    </td>");
			document.write("<td>"+screen.colorDepth   +"</td>");
		document.write("</tr>");
			document.write("<tr>");
			document.write("<td>length   </td>");
			document.write("<td>"+History.length   +"</td>");
		document.write("</tr>");
			document.write("<tr>");
			document.write("<td>href    </td>");
			document.write("<td>"+ location.href    +"</td>");
		document.write("</tr>");
		document.write("</tr>");
			document.write("<tr>");
			document.write("<td>pathnam     </td>");
			var x = location.pathname;
			document.write("<td>"+ x    +"</td>");
		document.write("</tr>");
		document.write("</tr>");
			document.write("<tr>");
			document.write("<td>host     </td>");
			document.write("<td>"+ location.host     +"</td>");
		document.write("</tr>");



	document.write("</table>")
	

}

/////////////////////////////////////////////
//////////Лабораторная работа № 7////////////
/////////////////////////////////////////////

function lab7_3()
{

	
		var forms = document.forms[0].space;
	
	
		document.write( "Я, " + document.forms["myform1"].firstname.value + "  "
		 + document.forms["myform1"].surname.value + "," + " год рождения: " + 
		 document.forms["myform1"].birthday.value + ", пол: " + document.forms["myform1"].s.value
		 + " люблю смотреть ");
		for(var i = 0; i < forms.length; i ++)
		{
			if(forms[i].checked)
			{
				document.write(forms[i].value  + " ");
			}
		}
}
function my_like_films()
{
	
	var form1 = document.forms[0];
	var form2 = document.forms[1];
	for(var i = 0; i < form1.space.length; i++)
	{

		if(form1.space[i].checked)
		{
			form2.my_films.innerHTML+= "<option>" + form1.space[i].value +"</option>";
		}

	}
}

/////////////////////////////////////////////////////
/////////Лабораторная работа JavaScript 8 ///////////
/////////////////////////////////////////////////////