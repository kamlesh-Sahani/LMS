import { Separator } from "@/components/ui/separator";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getData } from "@/constants/leavesdata";



export default async function DemoPage() {
  const data = await getData();
  const approve = data.filter((d) => d.status === "approved");
  return (
    <div className="container mx-auto py-10 ">
      <h1 className="text-4xl font-bold">Leave History</h1>
      <Separator className="mb-5 mt-2" />
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>

          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="cancel">Cancel</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <DataTable columns={columns} data={data} />
        </TabsContent>
        <TabsContent value="approved">
          <DataTable
            columns={columns}
            data={data.filter((d) => d.status === "approved")}
          />
        </TabsContent>
        <TabsContent value="pending">
          <DataTable
            columns={columns}
            data={data.filter((d) => d.status === "pending")}
          />
        </TabsContent>
        <TabsContent value="cancel">
          <DataTable
            columns={columns}
            data={data.filter((d) => d.status === "cancel")}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
