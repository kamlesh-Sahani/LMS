import dbConnect from "@/app/lib/dbConnect";
import LeaveBalanceModel from "@/models/LeaveBalance.model";
import { NextResponse,NextRequest } from "next/server";
dbConnect();

export async function POST(req:NextRequest){
    try {
        const reqBody = await req.json();
        const {} = reqBody;
        
        const leaveBalance = await LeaveBalanceModel.create({})
    } catch (error:any) {
       return NextResponse.json({
        success:false,
        message:`something went error : ${error.message}`
       }) 
    }
}