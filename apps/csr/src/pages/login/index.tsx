import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export function Login() {
	// form example
	const loginFormSchema = z
		.object({
			username: z.string().email(),
			password: z.string().min(6),
		})
		.strict();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
	});

	const onSubmit = (data: z.infer<typeof loginFormSchema>) => {
		reset();
		console.log('data ->', data);
	};

	return (
		<div className="h-screen container mx-auto grid place-items-center">
			<div className="flex flex-col w-2/5 mx-auto">
				<form
					className="flex flex-col gap-y-4"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div>
						<input
							{...register('username')}
							className="px-2 py-1 bg-white border-primary border rounded-app w-full"
							placeholder="username"
							autoComplete="email"
						/>
						<p className="text-red-400 text-sm">{errors.username?.message}</p>
					</div>
					<div>
						<input
							{...register('password')}
							type="password"
							className="px-2 py-1 bg-white border-primary border rounded-app w-full"
							placeholder="password"
							autoComplete="new-password"
						/>
						<p className="text-red-400 text-sm">{errors.password?.message}</p>
					</div>
					<button type="submit" className="border border-primary px-3 py-1">
						submit
					</button>
				</form>
			</div>
		</div>
	);
}
