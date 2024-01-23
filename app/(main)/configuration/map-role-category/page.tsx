'use client'
import React from 'react';
import { Label, Table, TableCell, TableColumn, TableRow, Select, Option, Button } from '@ui5/webcomponents-react';
import saveBtn from '@ui5/webcomponents-icons/dist/save.js';
// import Image from 'next/image';
import {SaveIcon} from 'lucide-react'


const page = () => {
  return (
    <div  className=' p-2' >
      <div className='bg-white h-[8vh] p-2  flex justify-between align-middle rounded-t-lg'>
        <div className=' text-black mt-1 text-xl font-bold'>Role Scoping</div>
        <div className='ml-3'>
          <Button className='hover:opacity-60  border border-black'>
            Create
          </Button>
        </div>
      </div>
    <div><Table className='border border-gray-300'
    columns={<><TableColumn style={{width: 'auto', border: '1px solid black'}}><Label>Rownum</Label></TableColumn><TableColumn minWidth={800} popinText="Roleguid"><Label>Role Guid</Label></TableColumn><TableColumn demandPopin minWidth={600} popinText="RoleDescription"><Label>Role Description</Label></TableColumn><TableColumn demandPopin minWidth={600} popinText="CategoryList"><Label>Category List</Label></TableColumn><TableColumn><Label>Save Btn</Label></TableColumn></>}
  >
    <TableRow>
      <TableCell>
        <Label className=''>
          1
        </Label>
      </TableCell>
      <TableCell className='border-x border-gray-300'>
        <Label>
        ESA40FSAB09590D7E040F00AC6466664
        </Label>
      </TableCell>
      <TableCell>
        <Label>
          Employee
        </Label>
      </TableCell>
      <TableCell className='border-x border-gray-300'>
        <Select className='border border-black'>
          <Option >
            -Select Category-
          </Option>
          <Option>
            Option 1
          </Option>
          <Option>
            Option 2
          </Option>
          <Option>
            Option 3
          </Option>
        </Select>
      </TableCell>
      <TableCell>
        <button className='border border-black rounded-md mt-1 ml-5'>
          <SaveIcon className=' opacity-80 p-1' size={30} />
        </button>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <Label>
          2
        </Label>
      </TableCell>
      <TableCell className='border-x border-gray-300'>
        <Label>
        F4126C2228F46087E040548C2C046250
        </Label>
      </TableCell>
      <TableCell>
        <Label>
          GSE Employee UI Developer
        </Label>
      </TableCell>
      <TableCell className='border-x border-gray-300'>
      <Select className='border border-black'>
          <Option >
            -Select Category-
          </Option>
          <Option>
            Option 1
          </Option>
          <Option>
            Option 2
          </Option>
          <Option>
            Option 3
          </Option>
        </Select>
      </TableCell>
      <TableCell>
      <button className='border border-black rounded-md mt-1 ml-5'>
          <SaveIcon className='opacity-80 p-1' size={30} />
        </button>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <Label>
          3
        </Label>
      </TableCell>
      <TableCell className='border-x border-gray-300'>
        <Label>
        CD600FC807A44688A80057A27E67E2CO
        </Label>
      </TableCell>
      <TableCell>
        <Label>
          GSE_Environment, Health and Safety Employee
        </Label>
      </TableCell>
      <TableCell className='border-x border-gray-300'>
      <Select className='border border-black'>
          <Option >
            -Select Category-
          </Option>
          <Option>
            Option 1
          </Option>
          <Option>
            Option 2
          </Option>
          <Option>
            Option 3
          </Option>
        </Select>
      </TableCell>
      <TableCell>
      <button className='border border-black rounded-md mt-1 ml-5'>
          <SaveIcon className='opacity-80 p-1' size={30} />
        </button>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <Label>
          4
        </Label>
      </TableCell>
      <TableCell className='border-x border-gray-300'>
        <Label>
        FB27BAZAAFDB43509217B3FSRAAFASID
        </Label>
      </TableCell>
      <TableCell>
        <Label>
          ACCESS_FA_DIGITAL_ASSISTANT
        </Label>
      </TableCell>
      <TableCell className='border-x border-gray-300'>
      <Select className='border border-black'>
          <Option >
            -Select Category-
          </Option>
          <Option>
            Option 1
          </Option>
          <Option>
            Option 2
          </Option>
          <Option>
            Option 3
          </Option>
        </Select>
      </TableCell>
      <TableCell >
      <button className='border border-black rounded-md mt-1 ml-5'>
          <SaveIcon className='opacity-80 p-1' size={30} />
        </button>
      </TableCell>
    </TableRow>
  </Table></div>
  </div>
  )
}

export default page