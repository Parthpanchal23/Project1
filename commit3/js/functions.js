function calculateTotal(quantity,price) {
 var  result = quantity * price;
  return result;
}
function outputCartRow(item,total) {
    for (var key in item) {
        var title = cart[key].product.title;
        var filename = cart[key].product.filename;
        var price = cart[key].product.price;
        var qunatity = cart[key].quantity;
        
        // document.getElementById("tabledata").innerHTML +=
        document.write("<tr>"
        + "<td><img src='images/" + filename+ "'/></td>" 
        + "<td>"+title+"</td>"
        + "<td>"+qunatity.toFixed()+"</td>"
        + "<td>$"+price.toFixed()+"</td>"
        +"<td>$"+ calculateTotal(qunatity,price)+ ".00</td></tr>");     
    }
}

