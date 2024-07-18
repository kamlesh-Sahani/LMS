import dbConnect from "@/app/lib/dbConnect";
import EmployeeModel from "@/models/Employee.model";
import { NextResponse,NextRequest } from "next/server";
import bcryptjs from 'bcryptjs';  
dbConnect();

async function passwordGenerateAndHashing(fullName:string,contactNumner:string){
  //  example contactNumber = "9667760692" , name - "kamlesh s"
  const password = fullName.slice(0,4)+contactNumner.slice(-4);
  const hashPassword = await bcryptjs.hash(password,10); 
  return hashPassword;
}
export async function POST(req:NextRequest){
    try {
        const reqBody  = await req.json();
        const {personalInfo,professionalInfo,experienceInfo,educationInfo,role,isActive} = reqBody;
        const {fullName,dob,gender,contactNumber,email,address} = personalInfo;

        const {departmentId,designation,dateOfJoining,employmentType} = professionalInfo;

        const {company,jobTitle,duration,responsibilities} = experienceInfo;
        
        const {highestQualification,university,yearOfPassing,specialization} = educationInfo;

        if(!fullName || !dob || !gender || !contactNumber || !email || !address || departmentId || !designation || !dateOfJoining || !employmentType || !company || !jobTitle || !duration || !responsibilities || !highestQualification || !university || !yearOfPassing || !specialization){

          return NextResponse.json({
            success:false,
            message:"please fill the all fields"
          },{status:400});
        }
        // password generate and hasing
        const hashPassword = passwordGenerateAndHashing(fullName,contactNumber);

    

    } catch (error:any) {
        return NextResponse.json(
          {
            success: false,
            message: `failed to login Employee :${error.message}`,
          },
          { status: 500 }
        );
      }
}