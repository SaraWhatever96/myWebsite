import { cva } from "class-variance-authority";

export { default as Button } from "./Button.svelte";

export const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border-2 border-primary hover:bg-accent hover:text-accent-foreground",
				'outline-card-project':
					"border-2 md:border-background md:text-white md:hover:bg-background/10 md:hover:text-background",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost:
					"hover:bg-accent hover:text-accent-foreground",
				email:
					"text-primary bg-white hover:bg-background",
				link:
					"underline-offset-4 hover:underline text-primary",
				'header-link':
					"text-primary",
			},
			size: {
				default: "h-10 py-2 px-2 sm:px-4",
				sm: "h-9 px-3 rounded-md",
				lg: "h-12 px-5 rounded-md",
				square: "h-10 px-2"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	}
);
