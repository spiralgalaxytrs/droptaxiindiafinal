var sedano;
var sedanr;
var suvo; 
var suvr;

function book() {
	
    var strText = document.getElementById("name").value;
    var strText1 = document.getElementById("p").value;
    var strText2 = document.getElementById("location-1").value;
    var strText3 = document.getElementById("location-2").value;
    var strText4 = document.getElementById("pickupdate").value;
    var strText6 = document.getElementById("pickuptime").value;
    var strText7 = document.getElementById("cars").value;
    var strText8 = document.getElementById("ser").value;
   
	var Clink="https://droptaxiindia.com";
	var CPh="99409 80956";
	var Cname="Drop Taxi India";
	//calcRoute()
    if((strText7=="Sedan") && (strText8=="One-Way"))
    {rate=sedano;}
    else if((strText7=="Sedan") && (strText8="Round"))
    {rate=sedanr;}
    else if((strText7=="SUV") && (strText8=="One-Way"))
    {rate=suvo;}
    else if((strText7=="SUV") && (strText8=="Round"))
    {rate=suvr;}
    else if((strText7=="PSedan") && (strText8=="One-Way"))
    {rate=psedano;}
    else if((strText7=="PSedan") && (strText8="Round"))
    {rate=psedanr;}
    else if((strText7=="PSUV") && (strText8=="One-Way"))
    {rate=psuvo;}
    else if((strText7=="PSUV") && (strText8=="Round"))
    {rate=psuvr;}
    else if(strText7=="Traveller")
    {rate=traveller;}
console.log("read successful");
    var result = 'Customer Name:  ' + strText + '%0APhone Number: ' + strText1 +'%0APickup Location: ' + strText2+  '%0ADrop Location: ' + strText3 + '%0APickup Date: ' + strText4 + '%0APickup Time: ' + strText6 +'%0AService: ' + strText8 + '%0ACars: ' + strText7+"%0APrice:"+rate;

var finalMsg = encodeURI(result);
         document.getElementById("bookingForm").addEventListener("submit", (e) => {
e.preventDefault();
if(strText==""||strText1==""||strText2==""||strText3==""||strText4==""||strText6=="")
        {
        console.log('error');
        }else
        {
            const request = new XMLHttpRequest();
		const url = 'https://api.telegram.org/bot1721938726:AAEqc3VUsUo88GIeAcrWvhRhFVvpmU1aJSE/sendMessage?chat_id=-518646833&text=' + result;
     request.open("post", url);
    request.send();
		console.log("Sent Telegram successfully");
        fetch("https://www.fast2sms.com/dev/bulk?authorization=tXGFnAr4LNYZM8Q9jwPVHxWdvs6eahl2qk5of7SzpRbOUEumITTnoiOFHqdCLhzJPgaxer2mpZ8UNEyf&sender_id=FSTSMS&message="+Clink+"/%0AContact No: "+CPh+"%0AHello "+strText+",%0AThank you for Booking with "+Cname+".Your "+strText2+" Booking has been Confirmed on "+strText4+" ₹" +rate+".&language=english&route=p&numbers="+strText1)
			.then(response=>{
			if(response.status==200)
			{
				console.log("Sent Message successfully");
				
				localStorage.setItem("result", strText);
				localStorage.setItem("result1", strText2);
				localStorage.setItem("result2", strText3);
				localStorage.setItem("result3", strText7);
				localStorage.setItem("result4", strText8);
				window.location.href = "bookingSuccess.html";
			}
		})    			
        }

});
}   
