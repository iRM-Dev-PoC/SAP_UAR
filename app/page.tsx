"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
	const router = useRouter();

	useEffect(() => {
		const isLoggedin = window.localStorage.getItem("isLoggedIn");

		if (isLoggedin === null || isLoggedin === "undefined") {
			router.push("/sign-in");
		}

		if (isLoggedin && isLoggedin === "true") {
			router.push("/dashboard");
		}
	}, [router]);
}
