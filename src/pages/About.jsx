import React from "react";
import { AiOutlineShopping, AiOutlineSafety, AiOutlineHeart } from "react-icons/ai";

const About = () => {
	return (
		<section className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl">

				{/* Hero */}
				<div className="rounded-3xl bg-white px-6 py-14 text-center shadow-sm sm:px-12">
					<span className="inline-block rounded-full bg-pink-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-pink-600">
						About Us
					</span>

					<h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						Shopping Made Simple
					</h1>

					<p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500">
						We created this platform to make online shopping simple,
						convenient, and enjoyable. Explore a wide range of products
						and find what you need in just a few clicks.
					</p>
				</div>

				{/* Features */}
				<div className="mt-8 grid gap-5 md:grid-cols-3">

					<div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
						<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50">
							<AiOutlineShopping className="h-6 w-6 text-pink-600" />
						</div>

						<h2 className="mt-5 text-lg font-bold text-gray-900">
							Easy Shopping
						</h2>

						<p className="mt-2 text-sm leading-6 text-gray-500">
							Browse products, search for what you need, and add
							your favorite items to your cart with ease.
						</p>
					</div>

					<div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
						<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50">
							<AiOutlineSafety className="h-6 w-6 text-pink-600" />
						</div>

						<h2 className="mt-5 text-lg font-bold text-gray-900">
							Trusted Experience
						</h2>

						<p className="mt-2 text-sm leading-6 text-gray-500">
							Enjoy a clean and simple shopping experience designed
							with convenience and usability in mind.
						</p>
					</div>

					<div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
						<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50">
							<AiOutlineHeart className="h-6 w-6 text-pink-600" />
						</div>

						<h2 className="mt-5 text-lg font-bold text-gray-900">
							Made With Care
						</h2>

						<p className="mt-2 text-sm leading-6 text-gray-500">
							Every part of the application is designed to provide
							a smooth and enjoyable user experience.
						</p>
					</div>
				</div>

				{/* Mission */}
				<div className="mt-8 rounded-3xl bg-pink-600 px-6 py-12 text-center text-white sm:px-12">
					<h2 className="text-2xl font-bold sm:text-3xl">
						Our Mission
					</h2>

					<p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-pink-100 sm:text-base">
						Our mission is to create a simple, modern, and accessible
						online shopping experience where customers can easily
						discover products and manage their purchases.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
