"use client";

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
	Card,
	CardHeader,
	FlexBox,
	FlexBoxJustifyContent,
	FlexBoxWrap,
	FormGroup,
	FormItem,
	Form,
	Button,
	Page,
	Bar
} from "@ui5/webcomponents-react";
import { FileCheck2 } from "lucide-react";
import TableComponent from "@/components/Table";
import { fileSyncData, dataSourceDtls } from "@/utils/data";
import { spacing, ThemingParameters } from "@ui5/webcomponents-react-base";

const FileSync = () => {
	return (
		// <div className="h-[90vh]  overflow-hidden " style={spacing.sapUiContentPadding}>
		// 	<h1 className="font font-medium p-2 border rounded-t-lg border-gray-400">
		// 		File Sync
		// 	</h1>
		// 	{/* <FlexBox
		// 		justifyContent={FlexBoxJustifyContent.Center}
		// 		wrap={FlexBoxWrap.Wrap}
		// 		style={spacing.sapUiContentPadding}
		// 		direction="Row"
		// 		// fitContainer={false}
		// 	> */}
				
		// 	<div className="flex gap-2">

		// 		<div className="flex-2">

		// 			<Card
		// 				header={<CardHeader titleText="Sync Details"/>}
		// 				// style={{
		// 				// 	width: '300px'
		// 				// }}
		// 			>
		// 				<TableComponent tabledata={fileSyncData}/>
		// 			</Card>
		// 		</div>
		// 		<div className="flex-1">

		// 		<Panel
		// 					// className="border border-slate-400 "
		// 					headerText="Data Source Details"
		// 				>
		// 					<Text>
		// 						<div className=" flex gap-5 justify-center text-xs p-1">
		// 							<div className="flex-row">
		// 								<div>
		// 									<span className="opacity-60">ERP Username *</span> <br />{" "}
		// 									<Input className="h-[4vh] w-[8vw]" />
		// 								</div>
		// 								<div className="mt-1">
		// 									<span className="opacity-60">ERP URL *</span> <br />{" "}
		// 									<Input className="h-[4vh] w-[8vw]" />
		// 								</div>
		// 							</div>

		// 							<div className="flex-row ml-5">
		// 								<div>
		// 									<span className="opacity-60">ERP Password *</span> <br />{" "}
		// 									<Input
		// 										type="Password"
		// 										className="h-[4vh] w-[8vw]"
		// 									/>
		// 								</div>
		// 								<div className="mt-1">
		// 									<span className="opacity-60">BIP Report(s) Path *</span>{" "}
		// 									<br /> <Input className="h-[4vh] w-[8vw]" />
		// 								</div>
		// 							</div>
		// 						</div>
		// 						<div className="justify-center  flex">
		// 							{/* <button className="border border-blue-600 bg-blue-600 text-sm text-white p-1  rounded-lg">
		// 								Save Details
		// 							</button> */}
		// 							<Button className="border border-black">Save Details</Button>
		// 						</div>
		// 					</Text>

		// 					<TableComponent tabledata={dataSourceDtls}/>

		// 					{/* <Form
		// 						columnsL={1}
		// 						columnsM={4}
		// 						columnsS={12}
		// 						columnsXL={12}
		// 						labelSpanL={4}
		// 						labelSpanM={2}
		// 						labelSpanS={12}
		// 						labelSpanXL={4}
		// 						style={{
		// 							alignItems: 'center'
		// 						}}
		// 						// titleText="Test Form"
		// 					>
		// 					<FormGroup>
		// 						<FormItem label="Sole Form Item">
		// 							<Input />
		// 						</FormItem>
		// 						<FormItem label="Name">
		// 							<Input />
		// 						</FormItem>
		// 					</FormGroup>
		// 					<FormGroup>
		// 						<FormItem label="Address">
		// 							<Input />
		// 						</FormItem>
							
		// 						<FormItem label="Company Name">
		// 							<Input />
		// 						</FormItem>
		// 					</FormGroup>
		// 					</Form> */}
		// 				</Panel>
		// 		</div>
		// 	</div>


		// 	{/* </FlexBox> */}
		// </div>

		<Page
			header={<Bar startContent={<h1>File Sync</h1>}></Bar>}
			style={{
				height: '500px'
			}}
		>
			<div>
				{/* <div className="h-[90vh]  overflow-hidden " style={spacing.sapUiContentPadding}> */}
				
					<div className="flex gap-2">

						<div className="flex-2">

							<Card
								header={<CardHeader titleText="Sync Details"/>}
								// style={{
								// 	width: '300px'
								// }}
								style={spacing.sapUiContentPadding}
							>
								<TableComponent tabledata={fileSyncData}/>
							</Card>
						</div>
						<div className="flex-1">

						<Panel
									// className="border border-slate-400 "
									headerText="Data Source Details"
									style={spacing.sapUiContentPadding}
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
											{/* <button className="border border-blue-600 bg-blue-600 text-sm text-white p-1  rounded-lg">
												Save Details
											</button> */}
											<Button className="border border-black">Save Details</Button>
										</div>
									</Text>

									<TableComponent tabledata={dataSourceDtls}/>

									{/* <Form
										columnsL={1}
										columnsM={4}
										columnsS={12}
										columnsXL={12}
										labelSpanL={4}
										labelSpanM={2}
										labelSpanS={12}
										labelSpanXL={4}
										style={{
											alignItems: 'center'
										}}
										// titleText="Test Form"
									>
									<FormGroup>
										<FormItem label="Sole Form Item">
											<Input />
										</FormItem>
										<FormItem label="Name">
											<Input />
										</FormItem>
									</FormGroup>
									<FormGroup>
										<FormItem label="Address">
											<Input />
										</FormItem>
									
										<FormItem label="Company Name">
											<Input />
										</FormItem>
									</FormGroup>
									</Form> */}
						</Panel>
						</div>
					</div>
				{/* </div> */}
	
			</div>
		</Page>

	);
};

export default FileSync;
