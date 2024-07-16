import mongoose,{Schema,Document} from "mongoose";

// types of employee
interface EmployeeSchemaType extends Document {
    firstName:string;
    
}