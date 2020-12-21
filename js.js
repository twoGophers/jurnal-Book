 $(document).ready(function() { 
     
     
     	//E-mail Ajax Send 
     	$("form").submit(function() { //Change 
     		var th = $(this); 
    		$.ajax({ 
     			type: "POST", 
     			url: "modx-mail.php", //Change 
     			data: th.serialize() 
     		}).done(function() { 
     			alert("Thank you!"); 
     			setTimeout(function() { 
                     // Done Functions
                     
     				th.trigger("reset"); 
     			}, 1000); 
     		}); 
     		return false; 
    	});   
     }); 
	
	 


function valid (form) {
	let fail = false;
	let name = form.name.value;
	let email = form.email.value;
	let adr_pattern = / [0 - 9a - z_..] + Q [0 - 9a - z_..] + \ . [a - z] {2,5} /. i ;
	if (name == "" || name == " ")
	fail = "Вы не ввели свое имя";
	else if (email.split('0').length - 1 == 0 )
	fail = "Форма отправленна на проверку";
	else if (adr_pattern.test(email) == false)
	fail = "Вы ввели email не правильно";
	alert(fail);	
} 

onclick="var s=this.src";
 var b = s.length-5;
  var v=s.charAt(b);
   if(v==1){this.src='img/menu.png'}
	if(v==2){this.src='img/1.png'}  
	

	$(window).load(function() {
		$('.dwsmenu').hoverizr({speedOut: 'slow'});
		$('.ex2').hoverizr({speedOut: 'slow',effect:"blur",overlay: "bottom",container: "pipa",stretch: "no"});
		$('.ex4').hoverizr({effect:'blur',speedOut:'slow'});
		$('.ex3').hoverizr({speedIn: 'slow',effect:"invert"});
		});


	$(window).load(function() {
$('.dwsmenu').onclick = document.write ,$('.section-inner')},);
 