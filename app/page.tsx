// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Page() {
// 	const router = useRouter();
// 	const [role, setRole] = useState("user");
// 	const [isLoggedIn, setIsLoggedIn] = useState(false);

// 	useEffect(() => {
// 		const isSignedIn = window.localStorage.getItem("isLoggedIn");
// 		const storedUser = window.localStorage.getItem("user");
// 		if (storedUser) {
// 			const currentUser = JSON.parse(storedUser);
// 			const userRole: string = currentUser.role;
// 			setRole(userRole);
// 		}

// 		if (isSignedIn === null || isSignedIn === "undefined") {
// 			setIsLoggedIn(false);
// 			router.push("/sign-in");
// 		} else {
// 			setIsLoggedIn(true);
// 		}

// 		console.log(isLoggedIn, role);

// 		if (isLoggedIn) {
// 			if (role === "admin") {
// 				router.push("/dashboard");
// 			} else {
// 				router.push("/uar-review");
// 			}
// 		}
// 	}, [router, role, isLoggedIn]);
// }

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Page() {
// 	const router = useRouter();
// 	const [role, setRole] = useState("");
// 	const [isLoggedIn, setIsLoggedIn] = useState(false);

// 	useEffect(() => {
// 		const fetchData = () => {
// 			const isSignedIn = window.localStorage.getItem("isLoggedIn");
// 			const storedUser = window.localStorage.getItem("user");

// 			if (storedUser) {
// 				const currentUser = JSON.parse(storedUser);
// 				const userRole: string = currentUser.role;
// 				setRole(userRole);
// 			}

// 			if (isSignedIn === null || isSignedIn === "undefined") {
// 				setIsLoggedIn(false);
// 				router.push("/sign-in");
// 			} else {
// 				setIsLoggedIn(true);
// 				if (role === "admin") {
// 					router.push("/dashboard");
// 				} else {
// 					router.push("/uar-review");
// 				}
// 			}
// 		};

// 		fetchData();
// 	}, [router, role, isLoggedIn]);
// }

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
	const router = useRouter();
	const [role, setRole] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const isSignedIn = window.localStorage.getItem("isLoggedIn");
			const storedUser = window.localStorage.getItem("user");

			if (storedUser) {
				const currentUser = JSON.parse(storedUser);
				const userRole = currentUser.role;
				await setRole(userRole);
			}

			if (isSignedIn === null || isSignedIn === "undefined") {
				setIsLoggedIn(false);
				router.push("/sign-in");
			} else {
				setIsLoggedIn(true);
			}
		};

		fetchData();
	}, [router]);

	useEffect(() => {
		// Redirect based on the updated role
		if (isLoggedIn) {
			if (role === "admin") {
				router.push("/dashboard");
			} else {
				router.push("/uar-review");
			}
		}
	}, [role, isLoggedIn, router]);

	// ... rest of your component code
}
