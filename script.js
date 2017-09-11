
function primer_1(){
	var name, x;
	alert("Добро пожаловать на наш сайт!");
	name = prompt("Введите имя","Имя");
	alert( name + ", мы рады приветствовать вас на нашем сайте!");
	x = confirm("Вам понравился наш сайт?");
	if(x == true)
		alert("Мы очень рады!");
	else
		alert("Мы исправим наши ошибки!");
}
function primer_2(){
	var sum;
	sum = 5 + 10;
	document.write(" Сумма чисел 5 + 10 : " + sum + "<br/>");
	sum = "5" + "10";
	document.write(" Сумма строк 5 + 10 : " + sum + "<br/>");
	sum = 5 + "10";
	document.write(" Сумма числа и строки 5 + 10 : " + sum + "<br/>");
	sum = "5" + 10;
	document.write(" Сумма строки и числа 5 + 10 : " + sum + "<br/>");
	document.write(" Вывод: результатом сложения строки и числа всегда будет строка");
}
function primer_3(){
	var primer1, primer2, x = 10, y = 6;
	primer1 = ((x+8)/3+(y-4)/2)*3;
	primer2 = (((y+x)/2)-10)*(2+x);
	document.write("Результат арифметических операций" + "<br/>" + primer1 + "<br/>" + primer2 + "<br/>");
	primer2 %= primer1;
	document.write("Деление с остатком: " + primer2);
}
function primer_4_5(){
	var num;
	num = prompt("Введите чило в промежутке [-10, -5) || (5, 10]", "10");
	num = parseInt( num, 10);//Преобразование строки в число по основанию 10
	if(num >= -10 && num < -5){
		alert("Вы ввели верное число в промежутке [-10, -5)");
	}
	else if(num > 5 && num <= 10){
		alert("Вы ввели верное число в промежутке (5, 10]");
	}
	else{
		alert("Вы ввели неверное число!");
	}
}
function primer_6(){
	var day;
	day = prompt("Введите день недель", "1");
	day = parseInt(day, 10);
	switch(day)
	{
		case 1:alert("Сегодня понедельник, пора на работу");break; 
		case 2:alert("Сегодня вторник");break;
		case 3:alert("Сегодня среда");break; 
		case 4:alert("Сегодня четверг");break; 
		case 5:alert("Сегодня пятница");break; 
		case 6:alert("Сегодня субота");break; 
		case 6:alert("Сегодня воскресенье, выходной!!! Уууииии!!!!");break; 
		default:alert("Вы ввели неправильный день");break;
	}
}
function primer_7()
{
	try{
		alert("Начало выполнения");
		//ошибка не обьявил переменную 
		x
		alert("Конец выполнения");
	}
	catch(err){
		alert("Произошла ошибка ");
		alert("Имя ошибки " + err.name);
		alert("Детали ошибки" + err.message);
	}
	finally{
		alert("Finished");
	}

}

////////////////////////////////////////////
////////Лабораторная работа 2///////////////
////////////////////////////////////////////
function primer2_2(){
	var result, a ,b;
	a = prompt("Введите значения a", 9);
	b = prompt("Введите значения b", 9);
	a = parseInt(a, 10);
	b = parseInt(b, 10);
	document.write("<table border='3'>");
	for(var i = 1; i <= a; i++)
	{
		document.write(" <tr> ");
		for(var j = 1; j <= b; j++)
		{
			result = j * i 
			if(i == 1 || j ==1){
			document.write("<th>"+result +"    "+"</th>");
			}
			else{
			document.write("<td>"+result +"    "+"</td>");
			}
		}
		document.write(" </tr> ");
	}
	document.write("</table>");
	document.write("<style>td{padding:10px;} table{border-collapse:collapse ;}th{padding:10px; background-color:#878DFC;color:white;}</style>");
}
function primer2_3()
{
	var a, b;//Переменные a - начальный радиус, b - конечный радиус
	var s, l;//s -площадь круга, l-длинна окружности
	a = prompt("Введите начальный радиус","5");
	b = prompt("Введите конечный радиус","10");
	a = parseInt(a, 10);
	b = parseInt(b, 10);
	document.write("<table border='3'>")
	document.write("<tr><th>Радиус</th><th>Площадь круга</th><th>Длина окружности</th></tr>")
	for(a; a <= b; a=a + 0.3)
	{
		document.write(" <tr> ");
		document.write(" <td> "+ a + "</td>");

		s = (Math.pow(a,2))*3.14;
		s = s.toFixed(2);
		document.write(" <td> "+ s + "</td>");

		l = 2 * a * 3.14;
		l = l.toFixed(2);
		document.write(" <td> "+ l + "</td>");
		document.write(" </tr> ");
	}
	document.write("</table>")
	document.write("<style>td{padding:10px;} table{border-collapse:collapse ;}th{padding:10px; background-color:#878DFC;color:white;}</style>");
}
function primer2_4()
{
	var number1 = 123.414;
	var number2 = 10;
	document.write("<table border='3'>")

	document.write("<tr><th>Число</th><th>Метод</th><th>Результат</th><th>Описание метода</th></tr>")

		document.write("<tr>")
		document.write("<td>"+ number1 +"</td>")
		document.write("<td>"+ "toExponential(2)"+"</td>")
		document.write("<td>"+ number1.toExponential(2)+"</td>")
		document.write("<td>"+"представляет число в экспоненциальной форме"+"</td>")
		document.write("</tr>")

		document.write("<tr>")
		document.write("<td>"+ number1 +"</td>")
		document.write("<td>"+ "toFixed(2)"+"</td>")
		document.write("<td>"+ number1.toFixed(2)+"</td>")
		document.write("<td>"+"представляет число в форме с фиксированным количеством цифр после точки"+"</td>")
		document.write("</tr>")

		document.write("<tr>")
		document.write("<td>"+ number1 +"</td>")
		document.write("<td>"+ "toPrecision(2)"+"</td>")
		document.write("<td>"+ number1.toPrecision(2)+"</td>")
		document.write("<td>"+"представляет число с заданным общим количеством значащих цифр"+"</td>")
		document.write("</tr>")

		document.write("<tr>")
		document.write("<td>"+ number1 +"</td>")
		document.write("<td>"+ "toString(8)"+"</td>")
		document.write("<td>"+ number1.toString(16)+"</td>")
		document.write("<td>"+"возвращает строковое представление числа в системе счисления с указанным основанием"+"</td>")
		document.write("</tr>")

			document.write("<tr>")
		document.write("<td>"+ number2 +"</td>")
		document.write("<td>"+ "toExponential(2)"+"</td>")
		document.write("<td>"+ number2.toExponential(2)+"</td>")
		document.write("<td>"+"представляет число в экспоненциальной форме"+"</td>")
		document.write("</tr>")

		document.write("<tr>")
		document.write("<td>"+ number2 +"</td>")
		document.write("<td>"+ "toFixed(2)"+"</td>")
		document.write("<td>"+ number2.toFixed(2)+"</td>")
		document.write("<td>"+"представляет число в форме с фиксированным количеством цифр после точки"+"</td>")
		document.write("</tr>")

		document.write("<tr>")
		document.write("<td>"+ number2 +"</td>")
		document.write("<td>"+ "toPrecision(2)"+"</td>")
		document.write("<td>"+ number2.toPrecision(2)+"</td>")
		document.write("<td>"+"представляет число с заданным общим количеством значащих цифр"+"</td>")
		document.write("</tr>")

		document.write("<tr>")
		document.write("<td>"+ number2 +"</td>")
		document.write("<td>"+ "toString(8)"+"</td>")
		document.write("<td>"+ number2.toString(16)+"</td>")
		document.write("<td>"+"возвращает строковое представление числа в системе счисления с указанным основанием"+"</td>")
		document.write("</tr>")


	document.write("</table>")
	document.write("<style>td{padding:10px;} table{border-collapse:collapse ;}th{padding:10px; background-color:#878DFC;color:white;}</style>");

}


	//////////////////////////////////////////////
	///////Лабораторная работа 3 JavaScript///////
	//////////////////////////////////////////////


function primer3_1()
{
	var mas = new Array();
	mas[0] = 6 * Math.pow(3.14,2) + 3 * Math.exp(8);
	mas[1] = 2 * Math.cos(4) + Math.cos(12) + 8 * Math.exp(3);
	mas[2] = 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
	mas[3] = 2 * Math.tan(5) + 6 * 3.14 +Math.sqrt(12);
	for(var i = 0; i < 4; i++)
	{
		document.write(mas[i]+"<br/>");
	}
	//Поиск максимального элемента массива
	var max = mas[0], j = 1;//j - номер элемента 
	for(var i = 1; i < 4; i++)
	{
		if(max < mas[i])
		{
			max = mas[i];
			j = i + 1;
		}
	}
	document.write("Максимальный элемент массива " + max + " и его номер " + j + "<br/>");
	//Поиск минимального элемента массива
	var min = mas[0];
	j = 1;
	for( var i = 1; i < 4; i++)
	{
		if(min > mas[i])
		{
			min = mas[i];
			j = i + 1;
		}
	}
	document.write("Минимальный элемент массива " + min + " и его номер " + j + "<br/>");
}

function primer3_2()
{
	var mas = new Array("pow","pop","push","shift","round","floor","sline","sort");
	var mas1 = new Array();
	var mas2 = new Array();
	for( var i = 0; i < 8; i++)
	{
		if(mas[i] in Math)
		{
			 mas2.push(mas[i]);
		}
		else
		{
			mas1.push(mas[i]);
		}
	}
	mas1.unshift("shift");
	mas2.unshift("tan");
	document.write("Методы обьекта Array: " + "<br/>")
	for(var i = 0; i < mas1.length; i++)
	{
		document.write(mas1[i]+"<br/>");
	}
	document.write("Методы обьекта Math: " + "<br/>")
	for(var i = 0; i < mas2.length; i++)
	{
		document.write(mas2[i]+"<br/>");
	}
	document.write("Размер первого и второго массива: <br/>");
	document.write(mas1.length  + "      " + mas2.length)
}
function primer3_3()
{
	var myname = new String("Романчик Алексей Валерьевич ");
	document.write(myname + "<br/>");
	var myname1 = myname.toUpperCase();
	var myname2 = myname.toLowerCase();
	document.write(myname1 + "<br/>");
	document.write(myname2 + "<br/>");
	document.write(myname1.concat(myname2) + "<br/>");
	document.write(myname.replace("Романчик Алексей Валерьевич","Р А В") + "<br/>");
}
function primer3_4()
{
	var now = new Date();
	document.write("<table border = '1px'>")

	document.write("<tr>");
		document.write("<th> Год </th> <td>" + now.getFullYear() + "</td>")
	document.write("</tr>");

	document.write("<tr>");
		document.write("<th> Месяц </th> <td>" + (now.getMonth()+1) + "</td>")
	document.write("</tr>");

	document.write("<tr>");
		document.write("<th> День </th> <td>" + now.getDate() + "</td>")
	document.write("</tr>");

	document.write("<tr>");
		document.write("<th> Час </th> <td>" + now.getHours() + "</td>")
	document.write("</tr>");

	document.write("<tr>");
		document.write("<th> Минуты </th> <td>" + now.getMinutes() + "</td>")
	document.write("</tr>");

	document.write("<tr>");
		document.write("<th> Секунды </th> <td>" + now.getSeconds() + "</td>")
	document.write("</tr>");

	document.write("<table/>")
	document.write("<style>td{padding:10px;} table{border-collapse:collapse ;}th{padding:10px; background-color:#878DFC;color:white;}</style>");
}

////////////////////////////////////////////////////
////////Лабораторная работа № 4 JavaScript//////////
////////////////////////////////////////////////////
function primer4_1()
{
	
	function gruppa(n, spec, kol)
	{
		this.n = n;
		this.spec = spec;
		this.kol = kol;
		this.add_stud = function add_stud(k)
		{
			this.kol += k;
			document.write("В группу " + this.n + "добавили" + k + "студентов <br/>");

		};
		this.sub_stud = function sub_stud(k)
		{
			this.kol -= k;
			document.write("Из группы " + this.n + "исключили" + k + "студентов <br/>");
		}
	}
	var grup1 = new gruppa(1,"ИСиТ",20);
	grup1.add_stud(5);
	grup1.sub_stud(10);
	var grup2 = new gruppa(2,"ИСиТ",30);
	grup2.add_stud(20);
	grup2.sub_stud(10);
	document.write(grup1.n + grup1.spec + grup1.kol + "<br/>");
	document.write(grup2.n + grup2.spec + grup2.kol + "<br/>");
	gruppa.prototype.kurs=this.kurs
	grup1.kurs=2;
	document.write(grup1.kurs);


}
function primer4_2()
{
	function student(name,surname,physicsball,mathball,infoball)
	{
		this.name = name;
		this.surname = surname;
		this.physicsball = physicsball;
		this.mathball = mathball;
		this.infoball = infoball;
		this.out_name = function out_name()//Вывести свою фамилию и имя
		{
			document.write(this.name + "<br/>" + this.surname + "</br>");
		}
		this.average_ball = function average_ball()//Средний балл студента
		{
			return (this.physicsball + this.mathball + this.infoball)/3;
			
			
		}
	}
	var stud1 = new student();
		stud1.name = prompt("Введите имя студента", "Иван");
		stud1.surname = prompt("Введите фамилию студента","Иванов");
		stud1.physicsball = prompt("Введите оценку по физике", 10);
		stud1.physicsball = parseInt(stud1.physicsball, 10);
		stud1.mathball = prompt("Введите оценку по математике", 10);
		stud1.mathball = parseInt(stud1.mathball, 10);
		stud1.infoball = prompt("Введите оценку по информатике", 10);
		stud1.infoball = parseInt(stud1.infoball, 10);
		stud1.out_name();
		document.write("Средний балл студента " + stud1.average_ball() + "</br>");
}
function primer4_3()
{
	var mas = new Array(1,2,3,4,5,6,7,8);
	mystring = new String ("Привет!") ;
	for(var i = 0; i < 8; i++)
	{
		document.write(mas[i] + "  ");
	}
	delete mas[1];
	document.write(mas);
	document.write("<br/>");
	if(1 in mas)
	{
		document.write("В массиве имеется второй элемент <br/>");
	}
	else
	{
		document.write("В массив нет второго элемента <br/>");
	}
	document.write("Является ли mas массивом ");
	document.write((mas instanceof Array) + "<br/>" );
	document.write("Является ли mas обьектом ");
	document.write((mas instanceof Object) + "<br/>")
	document.write("Является ли mystring строкой ");
	document.write((mystring instanceof String) + "<br/>")
	document.write("Является ли mystring обьектом ");
	document.write((mystring instanceof Object) + "<br/>")
	
	document.write(typeof mas ); 
	document.write(typeof primer4_1() );
}



