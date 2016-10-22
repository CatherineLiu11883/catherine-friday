var elementContainer = $("#generated-element-container")

$("#make-blue-element").click(function() {  
  var newElement = $("<div>I guess green is better!</div>")
  newElement.css({background: "blue"})
  
  elementContainer.append(newElement)
})