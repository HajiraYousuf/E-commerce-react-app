import React, { useState } from "react";
import {
	AiOutlineMail,
	AiOutlinePhone,
	AiOutlineEnvironment,
} from "react-icons/ai";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		setSubmitted(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!formData.name || !formData.email || !formData.message) {
			return;
		}

		setSubmitted(true);

		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
		<section className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">

				{/* Header */}
				<div className="mb-10 text-center">
					<span className="inline-block rounded-full bg-pink-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-pink-600">
						Get In Touch
					</span>

					<h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						Contact Us
					</h1>

					<p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
						Have a question or need help? Send us a message and
						we'll be happy to hear from you.
					</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-5">

					{/* Contact Information */}
					<div className="lg:col-span-2">
						<div className="h-full rounded-3xl bg-pink-600 p-8 text-white">
							<h2 className="text-2xl font-bold">
								Let's talk
							</h2>

							<p className="mt-3 text-sm leading-6 text-pink-100">
								We're here to help and answer any questions
								you may have.
							</p>

							<div className="mt-10 space-y-7">

								<div className="flex gap-4">
									<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
										<AiOutlineMail className="h-5 w-5" />
									</div>

									<div>
										<p className="text-xs font-semibold uppercase tracking-wide text-pink-200">
											Email
										</p>
										<p className="mt-1 text-sm">
											support@example.com
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
										<AiOutlinePhone className="h-5 w-5" />
									</div>

									<div>
										<p className="text-xs font-semibold uppercase tracking-wide text-pink-200">
											Phone
										</p>
										<p className="mt-1 text-sm">
											+252 63 0000000
										</p>
									</div>
								</div>

								<div className="flex gap-4">
									<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
										<AiOutlineEnvironment className="h-5 w-5" />
									</div>

									<div>
										<p className="text-xs font-semibold uppercase tracking-wide text-pink-200">
											Location
										</p>
										<p className="mt-1 text-sm">
											Hargeisa, Somaliland
										</p>
									</div>
								</div>

							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="lg:col-span-3">
						<div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">

							<h2 className="text-2xl font-bold text-gray-900">
								Send us a message
							</h2>

							<p className="mt-2 text-sm text-gray-500">
								Fill out the form below and we'll get back to you.
							</p>

							<form onSubmit={handleSubmit} className="mt-7 space-y-5">

								<div>
									<label className="mb-2 block text-sm font-semibold text-gray-700">
										Your Name
									</label>

									<input
										type="text"
										name="name"
										value={formData.name}
										onChange={handleChange}
										placeholder="Enter your name"
										className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-pink-300 focus:ring-4 focus:ring-pink-50"
									/>
								</div>

								<div>
									<label className="mb-2 block text-sm font-semibold text-gray-700">
										Email Address
									</label>

									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										placeholder="Enter your email"
										className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-pink-300 focus:ring-4 focus:ring-pink-50"
									/>
								</div>

								<div>
									<label className="mb-2 block text-sm font-semibold text-gray-700">
										Message
									</label>

									<textarea
										name="message"
										value={formData.message}
										onChange={handleChange}
										rows="5"
										placeholder="Write your message..."
										className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-pink-300 focus:ring-4 focus:ring-pink-50"
									/>
								</div>

								{submitted && (
									<div className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-600">
										Your message has been submitted successfully!
									</div>
								)}

								<button
									type="submit"
									className="w-full rounded-xl bg-pink-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-100"
								>
									Send Message
								</button>

							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
