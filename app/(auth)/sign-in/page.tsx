"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { users } from "@/utils/data";

const SignIn = () => {
	// const router = useRouter();
	// const ref = useRef<HTMLFormElement>(null);

	// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	const { email, password } = e.currentTarget;
	// 	const user = users.find((user) => user.email === email.value);

	// 	if (user && user.password === password.value) {
	// 		window.localStorage.setItem("isLogedin", "True");
	// 		router.push("/dashboard");
	// 	} else {
	// 		ref.current?.reset();
	// 	}
	// };

	const router = useRouter();
	const ref = useRef<HTMLFormElement>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { email, password } = e.currentTarget;

		const user = users.find((user) => user.email === email.value);

		if (user && user.password === password.value) {
			router.push("/dashboard");
		} else {
			ref.current?.reset();
		}
	};

	useEffect(() => {
		window.localStorage.setItem("isLoggedIn", "true");
	}, []);

	return (
		<div className="flex justify-center items-center h-screen">
			<form
				ref={ref}
				onSubmit={handleSubmit}
				className="bg-white p-8 rounded shadow-md">
				<h1 className="text-gray-700 text-3xl uppercase text-center font-semibold mb-4">
					Sign In
				</h1>
				<div>
					<label
						htmlFor="email"
						className="block mb-2">
						Enter Your Email
					</label>
					<input
						className="w-full p-2 border rounded-md"
						type="text"
						placeholder="Email"
						autoComplete="on"
						name="email"
						required
					/>
				</div>

				<div className="mt-4">
					<label
						htmlFor="password"
						className="block mb-2">
						Enter Your Password
					</label>
					<input
						className="w-full p-2 border rounded-md"
						type="password"
						placeholder="Password"
						name="password"
						autoComplete="on"
						required
					/>
				</div>
				<div className="mt-6">
					<button
						className="bg-slate-700 p-3 rounded-full text-white hover:scale-105 hover:bg-slate-900 hover:text-white transition-all w-full"
						type="submit"
						onClick={() => {
							window.localStorage.setItem("isLoggedIn", "true");
						}}>
						Sign In
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
