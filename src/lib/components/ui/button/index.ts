import { cva } from "class-variance-authority";

export { default as Button } from "./Button.svelte";

export const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary/90",
				green:
					"bg-btn-green text-btn-green-foreground hover:bg-btn-green/80",
				rose:
					"bg-btn-rose text-btn-rose-foreground hover:bg-btn-rose/80",
				blue:
					"bg-btn-blue text-btn-blue-foreground hover:bg-btn-blue/80",
				"outline-green":
					"border-2 border-btn-green-foreground hover:bg-btn-green/10",
				"outline-rose":
					"border-2 border-btn-rose-foreground hover:bg-btn-rose/10",
				"outline-blue":
						"border-2 border-btn-blue-foreground hover:bg-btn-blue/10",


				/* Colori mappati fino a qui */
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
				default: "h-10 py-2.5 px-2 sm:px-4",
				square: "h-10 px-2"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	}
);
