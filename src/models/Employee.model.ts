import mongoose,{Schema,Document, mongo} from "mongoose";

// types of employee
interface EducationType{
    highestQualification:string //ug,pg,phd others
    university:string;
    yearOfPassing:string;
    specialization?:string;

}
interface PersonalType{
    fullName:string;
    dob:Date;
    gender:'male'|'female';
    contactNumber:string;
    email:string;
    address:string;
    password:string;
}
interface ProfessionalType{
    departmentId:mongoose.Schema.Types.ObjectId;
    designation:string;
    dateOfJoining:Date;
    employmentType:"full-time"|"part-time"|"internship"|"contract"|"other";
}
interface ExperienceType{
    company:string;
    jobTitle:string;
    duration:{
        startDate:Date,
        endDate:Date
    },
    responsibilities:string;
}
export interface EmployeeSchemaType extends Document {
    personalInfo:PersonalType;
    professionalInfo:ProfessionalType;
    educationInof:EducationType;
    experienceInfo:ExperienceType;
    isActive:boolean; // is working currently or leave the organisation
    role:"regular"|"hod"|"vice-principle"|"director";
    accessToke:string;
    refreshToken:string;
    createdAt:Date,
    updatedAt:Date
  
}


const employeeSchema:Schema<EmployeeSchemaType> = new Schema({
    personalInfo:{
        fullName:{
            type:String,
            required:[true,"please enter the full name"]
        },
        dob:{
            type:String,
            required:[true,"please enter the dob of the employee"]
        },
        gender:{
            type:String,
            required:[true,"please enter the gender"],
            enum:["male","female"]
        },
        contactNumber:{
            type:String,
            required:[true,"enter the contact number"]
        },
        email:{
            type:String,
            unique:true,
            required:[true,"please enter the email"],
            match: [ /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address" ]
        },
        address:{
            type:String,
            required:[true,"please enter the address of employee"]
        },
        password:{
            type:String,
            min:[6,"password must be atleast 6 characters"]
        }

    },
    professionalInfo:{
        departmentId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Department"
        },
        designation:{
            type:String,
            required:[true,"please enter the designation"]
        },
        dateOfJoining:{
            type:Date,
            required:[true,"please enter the date of joining"]
        },
        employmentType:{
            type:String,
            enum:['full-time',"part-time","internship","contract","other"]

        }

    },
    experienceInfo:{
        company:String,
        jobTitle:String,
        duration:{
            startDate:Date,
            endDate:Date
        },
        responsibilities:String
    },
    isActive:{
        type:Boolean,
        required:[true,"please enter the is active"]
    },
    role:{
        type:String,
        enum:["regular","hod","vice-principle","director"],
        default:"regular"
    },
    refreshToken:{
        type:String
    },
    accessToke:{
        type:String,
        required:true
    }
},{timestamps:true})


const EmployeeModel = (mongoose.models.Employee as mongoose.Model<EmployeeSchemaType>) || mongoose.model("Employee",employeeSchema);

export default EmployeeModel;