import { cva } from "class-variance-authority";
export { default as Card } from "./Card.svelte";
export { default as CardContent } from "./CardContent.svelte";
export { default as CardDescription } from "./CardDescription.svelte";
export { default as CardFooter } from "./CardFooter.svelte";
export { default as CardHeader } from "./CardHeader.svelte";
export { default as CardTitle } from "./CardTitle.svelte";
export { default as CustomSeparator } from "./CustomSeparator.svelte";

export const cardVariants = cva(
	"",
	{
		variants: {
			border: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "underline-offset-4 hover:underline text-primary"
			},
			size: {
				default: "h-10 py-2 px-4",
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
