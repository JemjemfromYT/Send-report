let output = document.getElementById ("output")

function buttonClick(){
  
let parms = {
  
  name : document.getElementById("nameId").value,
  message : document.getElementById ("messageId").value
  
}
  emailjs.send("service_nlvctxc", "template_ktu8uj9", parms).then(alert("message sent successfully!"))
  
  
output.textContent = nameId.value

output.textContent += " Your report will be posted after 1-2 days 😃😀🫤😑🫥"
}