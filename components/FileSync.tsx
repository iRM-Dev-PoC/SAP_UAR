import React from 'react'
import { Table, TableCell, TableRow, TableColumn, Label, Icon } from '@ui5/webcomponents-react';
import {FileCheck2} from 'lucide-react'

const FileSync = () => {
  return (
    <div className='bg-slate-200 h-[90vh] p-2 overflow-hidden '>
        <h1 className='bg-white font font-medium p-2 border rounded-t-lg border-gray-400'>File Sync</h1>
        <div className='bg-white p-4 border border-gray-400 flex gap-4 rounded-b-lg'>
          <Table className='h-[37vh] border border-gray-400 rounded-md shadow-md'
            accessibleName=""
            columns={<><TableColumn style={{width: '2rem'}}><Label>Sync ID</Label></TableColumn><TableColumn minWidth={200} popinText="For Period"><Label>For Period</Label></TableColumn><TableColumn demandPopin minWidth={200} popinText="Report Name"><Label>Report Name</Label></TableColumn><TableColumn demandPopin minWidth={200} popinText="Synced At"><Label>Synced At</Label></TableColumn><TableColumn><Label>Synced By</Label></TableColumn><TableColumn><Label>Process Started At</Label></TableColumn><TableColumn><Label>Process Started By</Label></TableColumn><TableColumn><Label>Preview</Label></TableColumn></>}
          >
            <TableRow>
              <TableCell>
                <Label>
                  3
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Q1-U3-Dev
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  956EUR
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  21/01/2024
                  10:17:46
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Deep Mondal
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  25/01/2024
                  12:43:38
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Subhagata Mondal
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  <FileCheck2 strokeWidth={1.75} absoluteStrokeWidth className='h-6 w-6 mt-3 ml-3 text-center text-blue-500'/>
                </Label>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Label>
                  2
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Q1-U3-Dev
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  956EUR
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  21/01/2024
                  10:17:46
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Racktim Guin
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  25/01/2024
                  12:43:38
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Subhagata Mondal
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                <FileCheck2 strokeWidth={1.75} absoluteStrokeWidth className='h-6 w-6 mt-3 ml-3 text-center text-blue-500'/>
                </Label>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Label>
                  1
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Q1-U3-Dev
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  956EUR
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  21/01/2024
                  10:17:46
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Deep Mondal
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  25/01/2024
                  12:43:38
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                  Subhagata Mondal
                </Label>
              </TableCell>
              <TableCell>
                <Label>
                <FileCheck2 strokeWidth={1.75} absoluteStrokeWidth className='h-6 w-6 mt-3 ml-3 text-center text-blue-500'/>
                </Label>
              </TableCell>
            </TableRow>          
          </Table>
        
          <div className='h-[50vh] w-[40vw] border border-slate-400 rounded-lg p-5 shadow-md '>
            <div className='h-[28vh] bg-green-500'>

            </div>
            <div className='h-[15vh] bg-blue-500 mt-2'>

            </div>
          </div>

        </div>
        
    </div>
  )
}

export default FileSync