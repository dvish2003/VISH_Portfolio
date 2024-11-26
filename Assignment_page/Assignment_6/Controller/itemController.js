// Import item model
import ItemModel from "../model/itemModel.js";

let item_arr = [];
let selectItemIndex = null;

const cleanItemFrom = () => {
    $('#itemName').val("");
    $('#itemPrice1').val("");
    $('#itemQty').val("");
};

const loadItemTable = () => {
    $('#itemTableBody').empty();
    item_arr.forEach((item,index)=>{
        const data = `<tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.qty}</td>
        </tr>`
        $('#itemTableBody').append(data);
    });
        $('#itemTableBody').on('click','tr',function () {
            selectItemIndex = $(this).index();
            console.log("Item Index:-",selectItemIndex);

            //get Item Obj from array
            const item = item_arr[selectItemIndex];
            console.log(item);

            $('#itemName').val(item.name);
            $('#itemPrice1').val(item.price);
            $('#itemQty').val(item.qty);

    });
};


//add button click event
$('#item_add').on('click',function () {
    let item_name = $("#itemName").val();
    let item_price = $("#itemPrice1").val();
    let item_qty = $("#itemQty").val();

    console.log(item_name,item_price,item_qty);

    if (item_name.length === 0){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill name!",
        });
    }else if (item_price.length === 0){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "fill price!",
        });
    }else if (item_qty.length === 0){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "fill qty!",
        });
    }else{
        const Item = new ItemModel(
            item_arr.length + 1,
            item_name,
            item_price,
            item_qty
        );

        item_arr.push(Item);
        console.log(item_arr);
        loadItemTable();

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        cleanItemFrom();
    }
});

// Update item button
$('#item_update').on('click',function () {
    let item_name = $("#itemName").val();
    let item_price = $("#itemPrice1").val();
    let item_qty = $("#itemQty").val();


    if (item_name.length === 0){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Fill name!",
        });
    }else if (item_price.length === 0){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "fill price!",
        });
    }else if (item_qty.length === 0){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "fill qty!",
        });
    }else{
        const Item2 = new ItemModel(
            item_arr[selectItemIndex].id,
            item_name,
            item_price,
            item_qty
        );

        item_arr[selectItemIndex] = Item2;
        loadItemTable();

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        cleanItemFrom();
    }
});


//delete customer button
$('#item_delete').on('click',function () {
    item_arr.splice(selectItemIndex,1);
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
    cleanItemFrom();

    loadItemTable();
});






