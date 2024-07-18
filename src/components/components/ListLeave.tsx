import { columns } from '@/app/user/leaveshistory/columns'
import { DataTable } from '@/app/user/leaveshistory/data-table'
import { getData } from '@/app/user/leaveshistory/page'
import { cn } from '@/lib/utils'
import React from 'react'

const ListLeave = async({className}:{className:string}) => {
  const data = await getData()
  return (
    <div className={cn("py-5", className)}>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}

export default ListLeave