import { cva } from "class-variance-authority";

export { default as Button } from "./Button.svelte";

export const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md text-base text-center font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary/90",
				white:
					"bg-white text-primary hover:bg-background",
				green:
					"bg-accent-green text-accent-green-foreground hover:brightness-95",
				rose:
					"bg-accent-rose text-accent-rose-foreground hover:brightness-95",
				blue:
					"bg-accent-blue text-accent-blue-foreground hover:brightness-95",
				"outline-green":
					"border-2 border-accent-green-foreground text-accent-green-foreground hover:bg-accent-green/10",
				"outline-rose":
					"border-2 border-accent-rose-foreground text-accent-rose-foreground hover:bg-accent-rose/10",
				"outline-blue":
					"border-2 border-accent-blue-foreground text-accent-blue-foreground hover:bg-accent-blue/10",
				link:
					"underline-offset-4 hover:underline text-primary",
				"header-link":
					"text-primary",
			},
			size: {
				default: "h-10 py-2.5 px-2 sm:px-4",
				lg: "h-11 px-4 sm:px-8",
				square: "p-4"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	}
);
