var elementContainer = $("#generated-element-container")

$("#make-blue-element").click(function() {  
  var newElement = $("<div>Hi!</div>")
  newElement.css({background: "blue"})
  
  elementContainer.append(newElement)
})