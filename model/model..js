const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    branchId:{
        type:String,
        required:true
    },
    branchName:{
        type:String,
        required:true
    },
    branchLocation:{
        type:String,
        required:true
    },
    itemCode:{
        type:String,
        required:true
    },
    idate:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    //    default: function capitalizeFirstLetter() 
    //     {
    //     this.description.charAt(0).toUpperCase() + this.description.slice(1).toLowerCase();
    //     console.log(capitalizeFirstLetter("sdsvd"))
    //     }
    },
    // categ:{
    //     type:String,
    //     default:function(){
    //         console.log(this.firstUpperCase(this.category))
    //     }
    // },
    subCategory:{
        type:String,
        required:true
    },
    hsnCode:{
        type:String,
        required:true
    },
    vom:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    unitRate:{
        type:Number,
        required:true
    },
    total:{
        type:String,
        default:function(){
            return(this.quantity * this.unitRate)
        } 
    },
    CGST:{
        type:Number,
        required:true
    },
	CGSTAmount:{
        type:String,
        default:function() {
            return(this.total/100*this.CGST)
        }
    },
    SGST:{
        type:Number,
        required:true
    },
	SGSTAmount:{
        type:String,
        default:function() {
            return(this.total/100*this.SGST)
        }
    },
    cgstsgst:{
        type:String,
        default:function() {
            return ((Number.parseFloat(this.CGST)+ Number.parseFloat(this.SGST))).toFixed(1)
        }
    },
    percent:{
        type:String,
        default:function() {
            return (this.total/100*this.cgstsgst)
        }

    },
    invoiceTotal:{
        type:String,
        default:function() {
            return(Number.parseFloat(this.total)  + Number.parseFloat(this.percent) )
        },
    },
},{timeStamp:true});

 module.exports = mongoose.model('product',productSchema)