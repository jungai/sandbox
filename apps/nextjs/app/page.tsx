'use client';
import { Button, Input } from 'ui-react';

export default function Home() {
	return (
		<div className="container mx-auto bg-foreground">
			<div className="w-max flex flex-col gap-y-2 ">
				<h1 className="text-destructive underline">hello</h1>
				<Button>Hello</Button>
				<Input placeholder="username" />
			</div>
		</div>
	);
}
