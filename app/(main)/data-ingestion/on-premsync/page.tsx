'use client'
import React from 'react'
import { Label, Table, TableCell, TableColumn, TableRow, Panel, ComboBox, ComboBoxItem } from '@ui5/webcomponents-react';
import { Trash2 } from "lucide-react";


const page = () => {
  return (
    <div className='flex justify-center'>
    <div className='p-3 rounded-lg w-[70vw]'>
      <div><h1 className='border border-slate-400 text-xl font-bold p-3 bg-white rounded-t-lg'>On-Prem Sync</h1></div>
        
        <Table className='border border-slate-400'
    columns={<><TableColumn style={{width: '1rem'}}><Label>Serial Number</Label></TableColumn><TableColumn minWidth={800} popinText="Supplier"><Label>Database Type</Label></TableColumn><TableColumn demandPopin minWidth={600} popinText="Dimensions"><Label>Connection Name</Label></TableColumn><TableColumn demandPopin minWidth={600} popinText="Weight"><Label>User ID</Label></TableColumn><TableColumn demandPopin minWidth={600} popinText="Weight"><Label>Password</Label></TableColumn><TableColumn><Label>Port</Label></TableColumn><TableColumn><Label>Delete</Label></TableColumn></>}
    onLoadMore={function _a(){}}
    onPopinChange={function _a(){}}
    onRowClick={function _a(){}}
    onSelectionChange={function _a(){}}
  >
    <TableRow>
      <TableCell className='border to-gray-700'>
        <Label>
          1
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
          MySQL
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
          Local MySQL
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
          root
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
          ********
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
          3306
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
        <Trash2
										strokeWidth={1.75}
										absoluteStrokeWidth
										className="h-6 w-6 mt-3 ml-3 text-center text-red-500"
									/>
        </Label>
      </TableCell>
    </TableRow>

    <TableRow>
      <TableCell className='border to-gray-700'>
        <Label>
          2
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
          Oracle
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
          Local Oracle
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
          sysdba
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
        ********
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
          1521
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
        <Trash2
										strokeWidth={1.75}
										absoluteStrokeWidth
										className="h-6 w-6 mt-3 ml-3 text-center text-red-500"
									/>
        </Label>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell className='border to-gray-700'>
        <Label>
          3
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
          Oracle
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
          Local Oracle
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
          sysdba
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
        ********
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
          1521
        </Label>
      </TableCell>
      <TableCell className='border to-gray-700'>
        <Label>
        <Trash2
										strokeWidth={1.75}
										absoluteStrokeWidth
										className="h-6 w-6 mt-3 ml-3 text-center text-red-500"
									/>
        </Label>
      </TableCell>
    </TableRow>
  </Table></div>
  <div className='w-[25vw] p-3 flex-col'>
    <Panel
    headerText="On-Prem Details"
    onToggle={function _a(){}}
  >
    <ComboBox placeholder="Select Database Type"
				
				onChange={function _a(){}}
				onInput={function _a(){}}
				onSelectionChange={function _a(){}}
			>
				<ComboBoxItem text="Oracle" />
				<ComboBoxItem text="MySQL" />
				<ComboBoxItem text="MSSQL" />
			</ComboBox>
      <div className=''>
    <input className='border border-slate-600 mt-2 rounded-lg p-2' type="text" placeholder='Connection Name... '/>
    <input className='border border-slate-600 mt-2 rounded-lg p-2' type="text" placeholder='User Id...'/>
    <input className='border border-slate-600 mt-2 rounded-lg p-2' type="text" placeholder='PassWord...'/>
    <input className='border border-slate-600 mt-2 rounded-lg p-2' type="text" placeholder='Port Number...'/>
    </div>
  </Panel>
  </div>
  </div>
  )
}

export default page