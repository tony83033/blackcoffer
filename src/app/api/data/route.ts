import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/dbConfig/dbConfig";
import Datapoints from "@/models/dataModel";
dbConnect();
export async function GET(req: NextRequest) {
    try {
        const data = await Datapoints.find({});
        return NextResponse.json(data);
    } catch (error) {
        console.log("Something goes wrong! with data api");
        console.log(error);
        return NextResponse.json(error);

    }
}
