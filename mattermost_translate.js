$( document ).ready(function(){
$(".translate-table").before("<div style='margin-left: 80%; 'margin-top: 100px;;width: 20%;'><button id=translation_help>Translate</button></div>")
document.getElementById('translation_help').addEventListener('click',translate);
});

/*window.addEventListener("click", function(event) {
	// We only accept messages from ourselves
	var str = $(".js-translation-text").first().text();
	//alert(str);
	var translated=doGet(str);
	console.log("dit wil ik vertalen "+str);
});*/


function translate(){
//alert('testing');    
	var str = $(".js-translation-text").first().text();
//	alert(str);
	var translated=doGet(str);
	console.log("dit wil ik vertalen "+str);
}


 
function doGet(sourceText) {
//alert(sourceText);
	var sourceLang = 'en';
	
	chrome.storage.sync.get("destlanguage", function (obj) {
		$.post( 'https://www.clblars.be/mattermost/translate.php', {'original': sourceText,"destlang":obj.destlanguage })
	  .done(function(data){
		$(".js-translation-area").first().text(data);
		$(".js-translation-area").first().focus();
	
   
		console.log(data)
	return data;  
	})
	  .fail(function(data){
		console.log(data);
	  });

	});	/* Option 1 */
  var a="error"
	
	/* Option 2 */
	

	
	/* translatedText = result[0][0][0];
  
	var json = {
	  'sourceText' : sourceText,
	  'translatedText' : translatedText
	 */
	

	};
  
	// set JSONP callback
	//return translatedText;
  

  
