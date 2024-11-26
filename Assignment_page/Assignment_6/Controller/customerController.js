// Import customer model
import CustomerModel from "../model/customerModel.js";

// POS Validation
const validateMobile = (mobile) => {
    const sriLankanMobileRegex = /^(?:\+94|0)?7[0-9]{8}$/;
    return sriLankanMobileRegex.test(mobile);
};

function validateNIC(nic) {
    const sriLankanNICRegex = /^(?:\d{9}[vV]|\d{12})$/;
    return sriLankanNICRegex.test(nic);
}

let customer_arr = [];
let selectCustomerIndex = null;

const cleanCustomerForm = () => {
    $('#customerName').val("");
    $('#customerNIC').val("");
    $('#customerContact').val("");
    $('#customerAddress').val("");
};

const loadCustomerTable = () => {
    $('#customerTableBody').empty();
    customer_arr.forEach((item, index) => {
        const data = `<tr><td>${item.name}</td><td>${item.nic}</td><td>${item.contact}</td><td>${item.address}</td></tr>`;
        $("#customerTableBody").append(data);
    });

    $('#customerTableBody').on('click', 'tr', function () {
        selectCustomerIndex = $(this).index();
        console.log("Customer index:", selectCustomerIndex);

        // Get customer object from array
        const customer = customer_arr[selectCustomerIndex];
        console.log(customer);

        // Populate form with customer details
        $('#customerName').val(customer.name);
        $('#customerNIC').val(customer.nic);
        $('#customerContact').val(customer.contact);
        $('#customerAddress').val(customer.address);
    });
};

// Add customer button click event
$("#Customer-add").on("click", function () {
    let Customer_Name = $("#customerName").val();
    let Customer_NIC = $("#customerNIC").val();
    let Customer_Contact = $("#customerContact").val();
    let Customer_Address = $("#customerAddress").val();

    console.log(Customer_Name, Customer_NIC, Customer_Contact, Customer_Address);

    if (Customer_Name.length === 0){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill name!",
        });
    }else if (!validateNIC(Customer_NIC)){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "incorrect NIC!",
        });
    }else if (!validateMobile(Customer_Contact)){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "incorrect mobile!",
        });
    }else if (Customer_Address.length === 0){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill address!",
        });
    }else {

        const Customer = new CustomerModel(
            customer_arr.length + 1,
            Customer_Name,
            Customer_NIC,
            Customer_Contact,
            Customer_Address
        );

        const existCustomer = customer_arr.some(customer => customer.nic === Customer_NIC);

        if (!existCustomer) {
            customer_arr.push(Customer);
            console.log(customer_arr);
            loadCustomerTable();
        } else {
            console.log("Customer already exists.");
        }

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        cleanCustomerForm();
    }

});

// Update customer button
$('#customer-update').on('click',function () {
    let Customer_Name = $("#customerName").val();
    let Customer_NIC = $("#customerNIC").val();
    let Customer_Contact = $("#customerContact").val();
    let Customer_Address = $("#customerAddress").val();

    if (Customer_Name.length === 0){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill name!",
        });
    }else if (!validateNIC(Customer_NIC)){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "incorrect NIC!",
        });
    }else if (!validateMobile(Customer_Contact)){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "incorrect mobile!",
        });
    }else if (Customer_Address.length === 0){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill address!",
        });
    }else {

        let Customer2 = new CustomerModel(
            customer_arr[selectCustomerIndex].id,
            Customer_Name,
            Customer_NIC,
            Customer_Contact,
            Customer_Address
        );

        customer_arr[selectCustomerIndex] = Customer2;
        loadCustomerTable();

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        cleanCustomerForm();
    }
});


//delete customer button
$('#customer-delete').on('click',function () {
    customer_arr.splice(selectCustomerIndex,1);
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
            });
        }
    });
        cleanCustomerForm();

        loadCustomerTable();
});
