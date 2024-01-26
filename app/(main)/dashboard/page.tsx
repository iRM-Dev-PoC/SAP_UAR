'use client'
import React from "react";
import DashBoard from "@/components/DashBoard";
import AnalyticalCardComp from "@/components/AnalyticalCardComp";
import PieChartComp from "@/components/PieChartComp";
import BarChartComp from "@/components/BarChartComp";
import TimeLineChartComp from "@/components/TimeLineChartComp";
import { Button, ComboBoxItem, DatePicker, Icon, Input, Switch, ThemeProvider } from "@ui5/webcomponents-react";
import { ComboBox } from '@ui5/webcomponents-react';

const page = () => {
	return (
		
		<div className="overflow-hidden mt-2">
     <div className="p-2 flex justify-end mr-5 gap-2">
				<ComboBox placeholder="Select System"
				
				onChange={function _a(){}}
				onInput={function _a(){}}
				onSelectionChange={function _a(){}}
			>
				<ComboBoxItem text="Billing System" />
				<ComboBoxItem text="Salesforce CRM" />
				<ComboBoxItem text="UK Payroll" />
				<ComboBoxItem text="Oracle EBS" />
				<ComboBoxItem text="SAP SuccessFactor" />
				<ComboBoxItem text="SAP ARIBA" />
			</ComboBox>
			<ComboBox
				placeholder="Select Department "
				
				onChange={function _a(){}}
				onInput={function _a(){}}
				onSelectionChange={function _a(){}}
			>
				<ComboBoxItem text="HR" />
				<ComboBoxItem text="Procurement" />
				<ComboBoxItem text="Sales" />
				<ComboBoxItem text="Finance" />
				<ComboBoxItem text="Admin & Operations" />
				
			</ComboBox>

		 </div>

			<div>
				<DashBoard />
			</div>
			<div className="mt-3 mr-7 ml-3 mb-5">
				<ThemeProvider>
					<AnalyticalCardComp />
				</ThemeProvider>
			</div>

			<div className="flex mr-7 ml-3 mb-5 gap-2">
				<div className="flex-1">
					<PieChartComp />
				</div>
				<div className="flex-1">
					<BarChartComp />
				</div>
			</div>
			<div className="mr-9 rounded-xl mb-4">
				<TimeLineChartComp />
			</div>
		</div>
	);
};

export default page;
