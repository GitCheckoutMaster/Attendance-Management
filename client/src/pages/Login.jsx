/* eslint-disable no-unused-vars */
import react, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
	const [error, setError] = useState("");
	const { register, handleSubmit } = useForm();

	const loginUser = async (data) => {
		console.log(data);
	};

	return (
		<section>
			<div>
				<div>
					<div>
						<h1>Sign in to your Account</h1>
						{error && <div role="alert">{error}</div>}
						<form onSubmit={handleSubmit(loginUser)}>
							<div>
								<label>Your email</label>
								<input {...register("email", { required: true })} type="text" />
							</div>
							<div>
								<label>Your password</label>
								<input
									{...register("password", { required: true })}
									type="password"
								/>
							</div>
							<button type="submit">Sign in</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
