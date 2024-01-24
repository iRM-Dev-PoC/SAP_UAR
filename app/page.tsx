"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
	const router = useRouter();

	useEffect(() => {
		const isLoggedin = window.localStorage.getItem("isLogedin");

		console.log("isLoggedin", isLoggedin);

		if (isLoggedin === null || isLoggedin === "False") {
			router.push("/sign-in");
		}
		
		if (isLoggedin && isLoggedin === "True") {
			router.push("/dashboard");
		}
	}, [router]);
}
