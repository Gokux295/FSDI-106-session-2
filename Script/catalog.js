var Items=[
    {
        ItemCode: "4ksonyp",
        ItemTittle: "Sony 4k projector",
        ItemPrice: "2500",
        ItemDescription: "Sony 4k Projector",
        ItemCategory: "projector",
        ItemImage: "image/sony 4k.jpg",
    },
    {
        ItemCode: "lg654k",
        ItemTittle: "LG 65 4k TV",
        ItemPrice: "2499",
        ItemDescription: "LG 65 4k TV",
        ItemCategory: "TV",
        ItemImage: "Image/LG 65.jpg",
    },
    {
        ItemCode: "sony651080p",
        ItemTittle: "sony 65 1080p",
        ItemPrice: "3500",
        ItemDescription: "Sony 65 1080p",
        ItemCategory: "TV",
        ItemImage: "Image/Sony 65.jpg",
    },
    {
        ItemCode: "TCL654k",
        ItemTittle: "TCL 65 4k",
        ItemPrice: "3499",
        ItemDescription: "TCL 65",
        ItemCategory: "TV",
        ItemImage: "Image/TCL 65.jpg",
    }
];

function displayCatalog(){

    for(var x=0; x<Items.length; x++){
        var Product = Items[x];

        var Layout=`<div class="Item" id="${Product.ItemCode}">
            <img src="${Product.ItemImage}">
            <h4>${Product.ItemTittle}</h4>
            <h6>${Product.ItemPrice}</h6>
            <p>${Product.ItemDescription}</p>
            <div class="button-div">
                <button class="btn btn-primary mb-2">
                    Add to Cart
                </button>
            </div>
        </div> `;

        console.log(x,Layout);

        $("#catalog").append(Layout);
    }
}

function init(){
    console.log("Catalog Page");
    displayCatalog();
}


function Register(){
    console.log("Current Items" + Items.length );

    var ItemCode = $("#ItemCode").val();
    var ItemTittle = $("#ItemTittle").val();
    var ItemPrice = $("#ItemPrice").val();
    var ItemDescription = $("#ItemDescription").val();
    var ItemCategory = $("#ItemCategory").val();
    var ItemImage = $("#ItemImage").val();

    Items.push(
        {
            ItemCode: ItemCode,
            ItemTittle: ItemTittle,
            ItemPrice: ItemPrice,
            ItemDescription: ItemDescription,
            ItemCategory: ItemCategory,
            ItemImage: ItemImage,
        }
    );


    console.log("New Item:" + Items.length) ;

}

$("#btnRegister").on("click",function(){
    Register();
});

$("#btnSearch").on("click",function(){
    
    var txtSearchLocal = $("#txtSearch").val();

    for(var x=0; x<Items.length;x++){

        if( txtSearchLocal.toUpperCase() != Items[x].ItemTittle.toUpperCase()){
            $("#" + Items[x].ItemCode).hide();
            
        }
        else{
            $("#" + Items[x].ItemCode).show();

        }

    }

});

window.onload = init; 