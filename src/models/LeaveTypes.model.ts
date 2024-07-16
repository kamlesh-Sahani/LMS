import mongoose,{Schema,Document} from "mongoose";

export interface LeavesType extends Document{
    name:string;
    daysPerYear:number;
    createdAt:Date,
    updatedAt:Date
}

const leavesTypesSchema = new Schema<LeavesType>({
    name:{
        type:String,
        required:[true,"please enter the leave name"]
    },
    daysPerYear:{
        type:Number,
        required:[true,"please enter the number of days leaves in a year"]
    }
},{timestamps:true});


const LeavesTypesModel = (mongoose.models.Leavestypes as mongoose.Model<LeavesType>)|| mongoose.model("LeavesTypes",leavesTypesSchema);

export default LeavesTypesModel;