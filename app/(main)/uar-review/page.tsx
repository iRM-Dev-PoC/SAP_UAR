"use client";
import React, { useState, useEffect } from "react";
import {
	Input,
	Icon,
	Button,
	Select,
	Option,
	Table,
	TableColumn,
	TableRow,
	TableCell,
	Label,
	CheckBox,
	DatePicker,
	Modals,
	Bar,
} from "@ui5/webcomponents-react";
import bin from "@ui5/webcomponents-icons/dist/delete.js";
import UarModal from "@/components/modal/Uar-modal";
import HodDetails from "@/components/HodDetails";

const UarReview = () => {
	const [isModalOpen, setModalOpen] = useState(false);
	useEffect(() => {
		setModalOpen(false);
	}, [isModalOpen]);

	const showDialog = Modals.useShowDialog();

	function OpenModal() {
		setModalOpen(!isModalOpen);
		console.log(isModalOpen);
	}

	return (
		<div className="w-[82vw] p-3">
			{isModalOpen ? <UarModal /> : null}
			<div className="bg-white h-10 p-3 rounded-t-lg border border-slate-400 text-center">
				<b className="">UAR Review</b>
			</div>
			<div className="border border-slate-400">
				<HodDetails />
			</div>
			
			<div className="bg-white border border-slate-400 h-55 p-3 rounded-b-lg">
				<table>
					<tbody>
						<tr>
							<td>
								<b>Manager Name</b>
							</td>
							<td>
								<Input icon={<Icon name="search" />} />
							</td>
							<td></td>
							<td>
								<b>Action</b>
							</td>
							<td>
								<Select>
									<Option>REVOKE</Option>
									<Option>RETAIN</Option>
								</Select>
							</td>
							<td></td>
							<td>
								<b>Deemed Inappropriate From</b>{" "}
							</td>
							<td>
								<DatePicker formatPattern="dd/MM/yyyy" />
							</td>
						</tr>
						<tr>
							<td>
								<b>User Full Name </b>
							</td>
							<td>
								<Input icon={<Icon name="search" />} />
							</td>
							<td></td>
							<td>
								<b>Reassign Email Address</b>
							</td>
							<td>
								<Input icon={<Icon name="search" />} />
							</td>
							<td></td>
							<td>
								<b>Is Transaction Processed-Valid till Now? </b>
							</td>
							<td>
								<Select>
									<Option>Yes</Option>
									<Option>No</Option>
								</Select>
							</td>
						</tr>
						<tr>
							<td>
								<b>Access Privilege Name</b>{" "}
							</td>
							<td>
								<Input icon={<Icon name="search" />} />
							</td>
							<td> </td>
							<td></td>
							<td></td> <td></td>
							<td>
								<b>Comments</b>{" "}
							</td>
							<td>
								<Input />
							</td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td>
								<Button
									icon="search"
									className="bg-gray-200">
									Search
								</Button>
								&nbsp;
								<Button
									icon="update"
									className="bg-slate-300">
									Update
								</Button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<br />
			<div className="flex bg-white border border-slate-400 justify-between p-3 rounded-lg">
				<div>
					<Input icon={<Icon name="search" />} />
				</div>
				<div>
					<Select>
						<Option>Deep Mondal</Option>
						<Option>Raktim Guin</Option>
						<Option>Suman Mondal</Option>
						<Option>Riju Das</Option>
						<Option>Suman Ghorai</Option>
						<Option>Prity Singh</Option>
					</Select>
				</div>
			</div>

			<div className="w-full overflow-x-auto p-1 rounded-lg mt-2">
				<Table className="rounded-lg border border-slate-400"
					columns={
						<>
							<TableColumn>
								<CheckBox />
							</TableColumn>
							<TableColumn>
								<Label>
									Emp 
									Number
								</Label>
							</TableColumn>
							<TableColumn>
								<Label>Full Name</Label>
							</TableColumn>
							<TableColumn>
								<Label>Designation</Label>
							</TableColumn>
							<TableColumn>
								<Label>Assign Organization</Label>
							</TableColumn>
							<TableColumn>
								<Label>Manager Name</Label>
							</TableColumn>
							<TableColumn>
								<Label>Location</Label>
							</TableColumn>
							<TableColumn className="w-[5vw]">
								<Label>Access Privilege Name</Label>
							</TableColumn>
							<TableColumn>
								<Label>Category Type</Label>
							</TableColumn>
							<TableColumn minWidth={100}>
								<Label>Access Privilege Assign EndDate</Label>
							</TableColumn>
							<TableColumn>
								<Label>Last Logon</Label>
							</TableColumn>
							<TableColumn>
								<Label>Active Status</Label>
							</TableColumn>
							<TableColumn>
								<Label>Action</Label>
							</TableColumn>
							<TableColumn>
								<Label>Transaction Processed Valid Till Now ?</Label>
							</TableColumn>
							<TableColumn>
								<Label>Deemed Inappropriate From</Label>
							</TableColumn>
							<TableColumn>
								<Label>Reassign Email</Label>
							</TableColumn>
						</>
					}>
					<TableRow>
						<TableCell>
							<CheckBox />
						</TableCell>
						<TableCell onClick={() => setModalOpen(!isModalOpen)}>
							<Label>2144729</Label>
						</TableCell>
						<TableCell>
							<Label>Mr Riju Das</Label>
						</TableCell>
						<TableCell>
							<Label>Accountant II</Label>
						</TableCell>
						<TableCell>
							<Label>Finance;</Label>
						</TableCell>
						<TableCell>
							<Label>Mr. Subhagata</Label>
						</TableCell>
						<TableCell>
							<Label>Chennai-Office</Label>
						</TableCell>
						<TableCell>
							<Label>Payable PLtd</Label>
						</TableCell>
						<TableCell>
							<Label>RESP</Label>
						</TableCell>
						<TableCell>
							<Label>01/01/2023</Label>
						</TableCell>
						<TableCell>
							<Label>23/01/2024</Label>
						</TableCell>
						<TableCell>
							<Label>Active</Label>
						</TableCell>
						<TableCell>
							<Select>
								<Option>RETAIN</Option>
								<Option>Option 2</Option>
								<Option>Option 3</Option>
								<Option>Option 4</Option>
								<Option>Option 5</Option>
							</Select>
						</TableCell>
						<TableCell>
							<Select>
								<Option>YES</Option>
								<Option>NO</Option>
							</Select>
						</TableCell>
						<TableCell>
							<DatePicker formatPattern="dd/MM/yyyy" />
						</TableCell>
						<TableCell>
							<Input />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<CheckBox />
						</TableCell>
						<TableCell onClick={OpenModal}>
							<Label>21342729</Label>
						</TableCell>
						<TableCell>
							<Label>Mr Raktim </Label>
						</TableCell>
						<TableCell>
							<Label>Accountant III</Label>
						</TableCell>
						<TableCell>
							<Label>Finance;Account;</Label>
						</TableCell>
						<TableCell>
							<Label>Mr. Subhagata</Label>
						</TableCell>
						<TableCell>
							<Label>Kolkata-Office</Label>
						</TableCell>
						<TableCell>
							<Label>Payable PLtd</Label>
						</TableCell>
						<TableCell>
							<Label>RESP</Label>
						</TableCell>
						<TableCell>
							<Label>02/01/2023</Label>
						</TableCell>
						<TableCell>
							<Label>22/01/2024</Label>
						</TableCell>
						<TableCell>
							<Label>InActive</Label>
						</TableCell>
						<TableCell>
							<Select>
								<Option>RETAIN</Option>
								<Option>Option 2</Option>
								<Option>Option 3</Option>
								<Option>Option 4</Option>
								<Option>Option 5</Option>
							</Select>
						</TableCell>
						<TableCell>
							<Select>
								<Option>YES</Option>
								<Option>NO</Option>
							</Select>
						</TableCell>
						<TableCell>
							<DatePicker formatPattern="dd/MM/yyyy" />
						</TableCell>
						<TableCell>
							<Input />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<CheckBox />
						</TableCell>
						<TableCell onClick={OpenModal}>
							<Label>2575729</Label>
						</TableCell>
						<TableCell>
							<Label>Mr. Suman</Label>
						</TableCell>
						<TableCell>
							<Label>Accountant I</Label>
						</TableCell>
						<TableCell>
							<Label>Finance;HR;</Label>
						</TableCell>
						<TableCell>
							<Label>Mr. Subhagata</Label>
						</TableCell>
						<TableCell>
							<Label>Mumbai-Office</Label>
						</TableCell>
						<TableCell>
							<Label>Payable PLtd</Label>
						</TableCell>
						<TableCell>
							<Label>RESP</Label>
						</TableCell>
						<TableCell>
							<Label>03/01/2023</Label>
						</TableCell>
						<TableCell>
							<Label>21/01/2024</Label>
						</TableCell>
						<TableCell>
							<Label>Active</Label>
						</TableCell>
						<TableCell>
							<Select>
								<Option>RETAIN</Option>
								<Option>Option 2</Option>
								<Option>Option 3</Option>
								<Option>Option 4</Option>
								<Option>Option 5</Option>
							</Select>
						</TableCell>
						<TableCell>
							<Select>
								<Option>YES</Option>
								<Option>NO</Option>
							</Select>
						</TableCell>
						<TableCell>
							<DatePicker formatPattern="dd/MM/yyyy" />
						</TableCell>
						<TableCell>
							<Input />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<CheckBox />
						</TableCell>
						<TableCell onClick={OpenModal}>
							<Label>2188829</Label>
						</TableCell>
						<TableCell>
							<Label>Mrs. Prity</Label>
						</TableCell>
						<TableCell>
							<Label>Accountant IV</Label>
						</TableCell>
						<TableCell>
							<Label>HR;</Label>
						</TableCell>
						<TableCell>
							<Label>Mr. Subhagata</Label>
						</TableCell>
						<TableCell>
							<Label>Dubai-Office</Label>
						</TableCell>
						<TableCell>
							<Label>Payable PLtd</Label>
						</TableCell>
						<TableCell>
							<Label>RESP</Label>
						</TableCell>
						<TableCell>
							<Label>04/01/2023</Label>
						</TableCell>
						<TableCell>
							<Label>20/01/2024</Label>
						</TableCell>
						<TableCell>
							<Label>Active</Label>
						</TableCell>
						<TableCell>
							<Select>
								<Option>RETAIN</Option>
								<Option>Option 2</Option>
								<Option>Option 3</Option>
								<Option>Option 4</Option>
								<Option>Option 5</Option>
							</Select>
						</TableCell>
						<TableCell>
							<Select>
								<Option>YES</Option>
								<Option>NO</Option>
							</Select>
						</TableCell>
						<TableCell>
							<DatePicker formatPattern="dd/MM/yyyy" />
						</TableCell>
						<TableCell>
							<Input />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<CheckBox />
						</TableCell>
						<TableCell onClick={OpenModal}>
							<Label>294229</Label>
						</TableCell>
						<TableCell>
							<Label>Mr Dip</Label>
						</TableCell>
						<TableCell>
							<Label>Accountant V</Label>
						</TableCell>
						<TableCell>
							<Label>Sales;</Label>
						</TableCell>
						<TableCell>
							<Label>Mr. Subhagata</Label>
						</TableCell>
						<TableCell>
							<Label>Kasba-Office</Label>
						</TableCell>
						<TableCell>
							<Label>Payable PLtd</Label>
						</TableCell>
						<TableCell>
							<Label>RESP</Label>
						</TableCell>
						<TableCell>
							<Label>05/01/2023</Label>
						</TableCell>
						<TableCell>
							<Label>19/01/2024</Label>
						</TableCell>
						<TableCell>
							<Label>InActive</Label>
						</TableCell>
						<TableCell>
							<Select>
								<Option>RETAIN</Option>
								<Option>Option 2</Option>
								<Option>Option 3</Option>
								<Option>Option 4</Option>
								<Option>Option 5</Option>
							</Select>
						</TableCell>
						<TableCell>
							<Select>
								<Option>YES</Option>
								<Option>NO</Option>
							</Select>
						</TableCell>
						<TableCell>
							<DatePicker formatPattern="dd/MM/yyyy" />
						</TableCell>
						<TableCell>
							<Input />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<CheckBox />
						</TableCell>
						<TableCell onClick={OpenModal}>
							<Label>28392429</Label>
						</TableCell>
						<TableCell>
							<Label>Mr Ram</Label>
						</TableCell>
						<TableCell>
							<Label>Accountant VI</Label>
						</TableCell>
						<TableCell>
							<Label>Sales;</Label>
						</TableCell>
						<TableCell>
							<Label>Mr. Subhagata</Label>
						</TableCell>
						<TableCell>
							<Label>UK-Office</Label>
						</TableCell>
						<TableCell>
							<Label>Payable PLtd</Label>
						</TableCell>
						<TableCell>
							<Label>RESP</Label>
						</TableCell>
						<TableCell>
							<Label>06/01/2023</Label>
						</TableCell>
						<TableCell>
							<Label>18/01/2024</Label>
						</TableCell>
						<TableCell>
							<Label>Active</Label>
						</TableCell>
						<TableCell>
							<Select>
								<Option>RETAIN</Option>
								<Option>Option 2</Option>
								<Option>Option 3</Option>
								<Option>Option 4</Option>
								<Option>Option 5</Option>
							</Select>
						</TableCell>
						<TableCell>
							<Select>
								<Option>YES</Option>
								<Option>NO</Option>
							</Select>
						</TableCell>
						<TableCell>
							<DatePicker formatPattern="dd/MM/yyyy" />
						</TableCell>
						<TableCell>
							<Input />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<CheckBox />
						</TableCell>
						<TableCell onClick={OpenModal}>
							<Label>202348</Label>
						</TableCell>
						<TableCell>
							<Label>Mr Sam</Label>
						</TableCell>
						<TableCell>
							<Label>Accountant VII</Label>
						</TableCell>
						<TableCell>
							<Label>HR;Sales;</Label>
						</TableCell>
						<TableCell>
							<Label>Mr. Subhagata</Label>
						</TableCell>
						<TableCell>
							<Label>Bangalore-Office</Label>
						</TableCell>
						<TableCell>
							<Label>Payable PLtd</Label>
						</TableCell>
						<TableCell>
							<Label>RESP</Label>
						</TableCell>
						<TableCell>
							<Label>07/01/2023</Label>
						</TableCell>
						<TableCell>
							<Label>16/01/2024</Label>
						</TableCell>
						<TableCell>
							<Label>InActive</Label>
						</TableCell>
						<TableCell>
							<Select>
								<Option>RETAIN</Option>
								<Option>Option 2</Option>
								<Option>Option 3</Option>
								<Option>Option 4</Option>
								<Option>Option 5</Option>
							</Select>
						</TableCell>
						<TableCell>
							<Select>
								<Option>YES</Option>
								<Option>NO</Option>
							</Select>
						</TableCell>
						<TableCell>
							<DatePicker formatPattern="dd/MM/yyyy" />
						</TableCell>
						<TableCell>
							<Input />
						</TableCell>
					</TableRow>
				</Table>
			</div>
		</div>
	);
};

export default UarReview;
