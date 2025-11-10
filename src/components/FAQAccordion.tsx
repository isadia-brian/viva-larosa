import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { faqs } from "@/data/faqs";

const FAQAccordion = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const midIndex = Math.ceil(faqs.length / 2);
	const leftFaqs = faqs.slice(0, midIndex);
	const rightFaqs = faqs.slice(midIndex);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:items-start">
			<div className="flex flex-col gap-2">
				{leftFaqs.map((faq, index) => (
					<motion.div
						key={faq.question}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.1 }}
						viewport={{ once: true }}
						className="group overflow-hidden rounded-xl border border-border/60 bg-background transition-all hover:border-brand hover:shadow-lg"
					>
						<motion.button
							onClick={() => toggleAccordion(index)}
							className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-background/50"
							whileHover={{ scale: 1.01 }}
							whileTap={{ scale: 0.99 }}
						>
							<h3 className="text-foreground font-semibold pr-3">
								{faq.question}
							</h3>
							<motion.div
								animate={{ rotate: openIndex === index ? 180 : 0 }}
								transition={{ duration: 0.3, ease: "easeInOut" }}
								className="flex-shrink-0"
							>
								<svg
									className="h-5 w-5 text-foreground/60"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<title>Accordion icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</motion.div>{" "}
						</motion.button>

						<AnimatePresence>
							{openIndex === index && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: "auto", opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{
										duration: 0.3,
										ease: "easeInOut",
									}}
									className="overflow-hidden"
								>
									<motion.div
										initial={{ y: -10 }}
										animate={{ y: 0 }}
										exit={{ y: -10 }}
										transition={{
											duration: 0.3,
											delay: 0.1,
										}}
										className="px-6 pb-6"
									>
										<p className="text-foreground/70 text-sm">{faq.answer}</p>
									</motion.div>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				))}
			</div>
			<div className="flex flex-col gap-2">
				{rightFaqs.map((faq, index) => (
					<motion.div
						key={faq.question}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.6,
							delay: (index + leftFaqs.length) * 0.1,
						}}
						viewport={{ once: true }}
						className="group overflow-hidden rounded-xl border border-border/60 bg-background transition-all hover:border-brand hover:shadow-lg"
					>
						<motion.button
							onClick={() => toggleAccordion(index + leftFaqs.length)}
							className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-background/50"
							whileHover={{ scale: 1.01 }}
							whileTap={{ scale: 0.99 }}
						>
							<h3 className="text-foreground font-semibold pr-3">
								{faq.question}
							</h3>
							<motion.div
								animate={{
									rotate: openIndex === index + leftFaqs.length ? 180 : 0,
								}}
								transition={{
									duration: 0.3,
									ease: "easeInOut",
								}}
								className="flex-shrink-0"
							>
								<svg
									className="h-5 w-5 text-foreground/60"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<title>Accordion icon</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</motion.div>
						</motion.button>

						<AnimatePresence>
							{openIndex === index + leftFaqs.length && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{
										height: "auto",
										opacity: 1,
									}}
									exit={{ height: 0, opacity: 0 }}
									transition={{
										duration: 0.3,
										ease: "easeInOut",
									}}
									className="overflow-hidden"
								>
									<motion.div
										initial={{ y: -10 }}
										animate={{ y: 0 }}
										exit={{ y: -10 }}
										transition={{
											duration: 0.3,
											delay: 0.1,
										}}
										className="px-6 pb-6"
									>
										<p className="text-foreground/70 text-sm">{faq.answer}</p>
									</motion.div>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default FAQAccordion;
