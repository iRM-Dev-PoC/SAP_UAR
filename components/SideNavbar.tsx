"use client";

import React from "react";
import {
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
} from "@ui5/webcomponents-react";

const SideNavbar = () => {
  return (
    <div>
      <SideNavigation className="h-[92vh]">
        <SideNavigationItem icon="home" text="Dashboard" />

        <SideNavigationItem
          expanded
          icon="group"
          text="UAR Review"></SideNavigationItem>

        <SideNavigationItem
          icon="calendar"
          text="Data Upload"></SideNavigationItem>

        <SideNavigationItem icon="calendar" text="Role"></SideNavigationItem>

        <SideNavigationItem icon="calendar" text="Configuration">
          <SideNavigationSubItem text="Category Master" />
          <SideNavigationSubItem text="Map Role & Category" />
        </SideNavigationItem>
      </SideNavigation>
    </div>
  );
};

export default SideNavbar;
