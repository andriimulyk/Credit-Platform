import { timeStamp } from "console";
import mongoose from "mongoose";
const  PostSchema = new mongoose.Schema({
   firstLoan : {
      type:Number,
      required:true,
      default:0,
   },
   annualRate : {
   type:Number,
   required:true,
   default:0,
},
forTheTerm : {
   type:Number,
   required:true,
   default:0,
},
realRateMin : {
    type:Number,
    required:true,
    default:0,
 },
 realRateMax : {
   type:Number,
   required:true,
   default:0,
},
 category : {
   type:String,
   required:true,
},
site: {
   type:String,
   required:true,
},
  imgmain:String,
//   imagesSlider: [String], 
//   imgsecond:String,
//   imgthird:String
// ids : {
//    type:Number,
//    required:true,
// },
//  user : {
//    type : mongoose.Schema.Types.ObjectId,
//    ref: "User",
//    required:true,
//  },
},
{
timestamps:true,
}
)
export default mongoose.model("Post", PostSchema)