import React from "react";
import {
	Table,
	TableCell,
	TableRow,
	TableColumn,
	Label,
	Icon,
	Panel,
	Title,
	Text,
	Input,
} from "@ui5/webcomponents-react";
import { FileCheck2 } from "lucide-react";

const FileSync = () => {
	return (
		<div className="h-[90vh] p-2 overflow-hidden ">
			<h1 className="font font-medium p-2 border rounded-t-lg border-gray-400">
				File Sync
			</h1>
			<div className="p-4 border border-gray-400 flex gap-4 rounded-b-lg">
				<Table
					className="h-[37vh] border border-gray-400 rounded-md shadow-md"
					accessibleName=""
					columns={
						<>
							<TableColumn style={{ width: "1rem" }}>
								<Label>Sync ID</Label>
							</TableColumn>
							<TableColumn
								minWidth={200}
								popinText="For Period">
								<Label>For Period</Label>
							</TableColumn>
							<TableColumn
								demandPopin
								minWidth={200}
								popinText="Report Name">
								<Label>Report Name</Label>
							</TableColumn>
							<TableColumn
								demandPopin
								minWidth={200}
								popinText="Synced At">
								<Label>Synced At</Label>
							</TableColumn>
							<TableColumn>
								<Label>Synced By</Label>
							</TableColumn>
							<TableColumn>
								<Label>Process Started At</Label>
							</TableColumn>
							<TableColumn>
								<Label>Process Started By</Label>
							</TableColumn>
							<TableColumn>
								<Label>Preview</Label>
							</TableColumn>
						</>
					}>
					<TableRow>
						<TableCell>
							<Label>3</Label>
						</TableCell>
						<TableCell>
							<Label>Q1-U3-Dev</Label>
						</TableCell>
						<TableCell>
							<Label>Roles</Label>
						</TableCell>
						<TableCell>
							<Label>21/01/2024 10:17:46</Label>
						</TableCell>
						<TableCell>
							<Label>Deep Mondal</Label>
						</TableCell>
						<TableCell>
							<Label>25/01/2024 12:43:38</Label>
						</TableCell>
						<TableCell>
							<Label>Subhagata Mondal</Label>
						</TableCell>
						<TableCell>
							<Label>
								<FileCheck2
									strokeWidth={1.75}
									absoluteStrokeWidth
									className="h-6 w-6 mt-3 ml-3 text-center text-blue-500"
								/>
							</Label>
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>
							<Label>2</Label>
						</TableCell>
						<TableCell>
							<Label>Q1-U2-Dev</Label>
						</TableCell>
						<TableCell>
							<Label>Manager</Label>
						</TableCell>
						<TableCell>
							<Label>16/01/2024 01:07:37</Label>
						</TableCell>
						<TableCell>
							<Label>Racktim Guin</Label>
						</TableCell>
						<TableCell>
							<Label>18/01/2024 10:43:09</Label>
						</TableCell>
						<TableCell>
							<Label>Subhagata Mondal</Label>
						</TableCell>
						<TableCell>
							<Label>
								<FileCheck2
									strokeWidth={1.75}
									absoluteStrokeWidth
									className="h-6 w-6 mt-3 ml-3 text-center text-blue-500"
								/>
							</Label>
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>
							<Label>1</Label>
						</TableCell>
						<TableCell>
							<Label>Q1-U3-Dev</Label>
						</TableCell>
						<TableCell>
							<Label>Customer</Label>
						</TableCell>
						<TableCell>
							<Label>22/01/2024 11:28:09</Label>
						</TableCell>
						<TableCell>
							<Label>Deep Mondal</Label>
						</TableCell>
						<TableCell>
							<Label>25/01/2024 18:34:55</Label>
						</TableCell>
						<TableCell>
							<Label>Subhagata Mondal</Label>
						</TableCell>
						<TableCell>
							<Label>
								<FileCheck2
									strokeWidth={1.75}
									absoluteStrokeWidth
									className="h-6 w-6 mt-3 ml-3 text-center text-blue-500"
								/>
							</Label>
						</TableCell>
					</TableRow>
				</Table>

				<div className="h-[55vh] w-[50vw] border border-slate-400 rounded-lg p-3 shadow-md flex flex-col justify-evenly  items-stretch">
					<div>
						<Panel
							className="border border-slate-400 "
							headerText="Data Source Details"
							// onToggle={function _a(){}}
						>
							<Text>
								<div className=" flex gap-5 justify-center text-xs p-1">
									<div className="flex-row">
										<div>
											<span className="opacity-60">ERP Username *</span> <br />{" "}
											<Input className="h-[4vh] w-[8vw]" />
										</div>
										<div className="mt-1">
											<span className="opacity-60">ERP URL *</span> <br />{" "}
											<Input className="h-[4vh] w-[8vw]" />
										</div>
									</div>

									<div className="flex-row ml-5">
										<div>
											<span className="opacity-60">ERP Password *</span> <br />{" "}
											<Input
												type="Password"
												className="h-[4vh] w-[8vw]"
											/>
										</div>
										<div className="mt-1">
											<span className="opacity-60">BIP Report(s) Path *</span>{" "}
											<br /> <Input className="h-[4vh] w-[8vw]" />
										</div>
									</div>
								</div>
								<div className="justify-center  flex">
									<button className="border border-blue-600 bg-blue-600 text-sm text-white p-1  rounded-lg">
										Save Details
									</button>
								</div>
							</Text>
						</Panel>
					</div>
					<div className="h-[20vh] mt-3">
						<Table
							className="border border-slate-400 rounded-md"
							columns={
								<>
									<TableColumn style={{ width: "1rem" }}>Sl no</TableColumn>
									<TableColumn popinText="Supplier">
										Data Source Name
									</TableColumn>
									<TableColumn>Created At</TableColumn>
									<TableColumn>Created By</TableColumn>
								</>
							}>
							<TableRow>
								<TableCell>
									<Label>1</Label>
								</TableCell>
								<TableCell>
									<Label>roles</Label>
								</TableCell>
								<TableCell>
									<Label>10/01/2024</Label>
								</TableCell>
								<TableCell>
									<Label>Deep Mondal</Label>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>
									<Label>2</Label>
								</TableCell>
								<TableCell>
									<Label>Manager</Label>
								</TableCell>
								<TableCell>
									<Label>23/01/2024</Label>
								</TableCell>
								<TableCell>
									<Label>Racktim Guin</Label>
								</TableCell>
							</TableRow>
						</Table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FileSync;
