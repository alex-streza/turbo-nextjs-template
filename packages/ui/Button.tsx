import { cva, type VariantProps } from "cva";

const button = cva("button", {
	variants: {
		intent: {
			primary: "bg-green-500 hover:bg-green-600",
			secondary: "bg-gray-500  hover:bg-gray-600",
		},
		size: {
			small: "px-2 py-1 text-sm",
			medium: "px-3 py-2 text-base",
		},
	},
	compoundVariants: [
		{
			intent: "primary",
			size: "medium",
			class: "font-semibold rounded-md border-transparent",
		},
	],
	defaultVariants: {
		intent: "primary",
		size: "medium",
	},
});

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export const Button = ({ children, className, intent, size, ...props }: ButtonProps) => {
	return (
		<button className={button({ intent, size, class: className })} {...props}>
			{children}
		</button>
	);
};
