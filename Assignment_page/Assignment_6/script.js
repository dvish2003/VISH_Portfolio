/*==============================================Customer==================================================================*/
/*add customer*/
let customer_arr_se = [];
$("#Customer-add").on("click", function() {
    let Customer_Name =$("#customerName").val();
    let Customer_NIC =$("#customerNIC").val();
    let Customer_Contact =$("#customerContact").val();

    console.log(Customer_Name);
    console.log(Customer_NIC);
    console.log(Customer_Contact);

    let Customer = {
            id:"C"+( customer_arr_se.length + 1) ,
            CustomerName : Customer_Name,
            CustomerNIC : Customer_NIC,
            CustomerContact: Customer_Contact
    };
    let existCustomer = false;
    for (let i = 0; i <customer_arr_se.length; i++) {
        if (customer_arr_se[i].CustomerNIC === Customer_NIC) {
            existCustomer = true;
            console.log("All ready add Customer");
            break;
        }
    }
        if (!existCustomer) {
            customer_arr_se.push(Customer);
            console.log(customer_arr_se);
            loadCustomerTable();
        }

});

const loadCustomerTable = () =>{
    $("#customerTableBody").empty();
    customer_arr_se.map((item, index) =>{
        console.log(item);
        let data =`<tr><td>${item.id}</td><td>${item.CustomerName}</td><td>${item.CustomerNIC}</td><td>${item.CustomerContact}</td></tr>`
        $("#customerTableBody").append(data);
    });
}


/*delete customer*/
$("#customer-delete").on("click", function() {
    let Customer_NIC = $("#inputContactNIC").val();

    for (let i = 0; i < customer_arr_se.length; i++) {
        if (customer_arr_se[i].CustomerNIC === Customer_NIC) {
            customer_arr_se.splice(i, 1);
        }else{
            console.log("Customer not found");
        }
    }
    loadCustomerTable();
});


/*Search customer*/
$("#customer-search").on("click", function() {
    let Customer_NIC = $("#inputContactNIC").val();
    for (let i = 0; i < customer_arr_se.length; i++) {
        if (customer_arr_se[i].CustomerNIC === Customer_NIC) {
            $("#customerName").val(customer_arr_se[i].CustomerName);
            $("#customerNIC").val(customer_arr_se[i].CustomerNIC);
            $("#customerContact").val(customer_arr_se[i].CustomerContact);
        }
    }
});

/*update customer*/
$("#customer-update").on("click", function() {
    let Customer_Name =$("#customerName").val();
    let Customer_NIC =$("#customerNIC").val();
    let Customer_Contact =$("#customerContact").val();

    let existCustomer = false;

    for (let i = 0; i < customer_arr_se.length; i++) {
        if (customer_arr_se[i].CustomerNIC === Customer_NIC) {
            customer_arr_se[i].CustomerName = Customer_Name;
            customer_arr_se[i].CustomerContact = Customer_Contact;

            existCustomer = true;
            console.log("Customer update");
            loadCustomerTable();

        }
    }
        if(!existCustomer){
            console.log("Customer not found");
    }


    });

/*=====================================================================Item===============================Item=====================================================================================*/

let item_arr = [];

const loadItemTable = () => {
    $("#ItemTableBody").empty();
    item_arr.map((item) => {
        console.log(item);
        let data = `<tr><td>${item.id}</td><td>${item.ItemName}</td><td>${item.ItemPrice}</td><td>${item.ItemQty}</td></tr>`;
        $("#ItemTableBody").append(data);
    });
}
/*Item add*/
$("#item-add").on("click", function() {
    let item_Name = $("#itemName").val();
    let item_Price = $("#itemPrice").val();
    let item_Qty = $("#itemQty").val();

    console.log(item_Name);
    console.log(item_Price);
    console.log(item_Qty);

    let Item = {
        id: "I" + (item_arr.length + 1),  // Corrected ID generation
        ItemName: item_Name,
        ItemPrice: item_Price,
        ItemQty: item_Qty
    };


    let existItem = false;
    for (let i = 0; i < item_arr.length; i++) {
        if (item_arr[i].ItemName === Item.ItemName) {  // Checking by ItemName instead of ID
            existItem = true;
            console.log("Item already exists");
            break;
        }
    }

    if (!existItem) {
        item_arr.push(Item);
        console.log(item_arr);
        loadItemTable();
    }
});

/*Item Update*/
$("#item-update").on("click", function() {
    let item_Name = $("#itemName").val();
    let item_Price = $("#itemPrice").val();
    let item_Qty = $("#itemQty").val();

    let existItem = false;

    for (let i = 0; i < item_arr.length; i++) {
        if (item_arr[i].ItemName === item_Name) {
            item_arr[i].ItemPrice = item_Price;
            item_arr[i].ItemQty = item_Qty;

            existItem = true;
            console.log("Item updated:", item_arr[i]);
            loadItemTable();
        }
    }

    if (!existItem) {
        console.log("Item not found");
    }
});

/*Item Delete*/
$("#item-delete").on("click", function() {
    let Item_Name = $("#inputItemName").val();

    for (let i = 0; i < item_arr.length; i++) {
        if (item_arr[i].ItemName === Item_Name) {
            item_arr.splice(i, 1);
        }
    }
    loadItemTable();
});


/*Item Search*/
$("#item-search").on("click", function() {
    let Item_Name = $("#inputItemName").val();

    for (let i = 0; i < item_arr.length; i++) {
        if (item_arr[i].ItemName === Item_Name) {
            $("#itemName").val(item_arr[i].ItemName);
            $("#itemPrice").val(item_arr[i].ItemPrice);
            $("#itemQty").val(item_arr[i].ItemQty);

        }
    }
});


