import type { Icon as LucideIcon } from "lucide-svelte";
import {
	FolderDown,
	PlayCircle
} from "lucide-svelte";
import Logo from "./Logo.svelte";

export type Icon = LucideIcon;

export const Icons = {
	playCircle: PlayCircle,
	download: FolderDown,
	logo: Logo,
};
