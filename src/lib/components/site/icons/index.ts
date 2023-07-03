import type { Icon as LucideIcon } from "lucide-svelte";
import {
	Dribbble,
	FolderDown,
	PlayCircle,
	Instagram,
} from "lucide-svelte";
import Logo from "./Logo.svelte";
import AfterEffects from "./AfterEffects.svelte";
import Figma from "./Figma.svelte";
import Photoshop from "./Photoshop.svelte";
import Indesign from "./Indesign.svelte";

export type Icon = LucideIcon;

export const Icons = {
	afterEffects: AfterEffects,
	download: FolderDown,
	dribbble: Dribbble,
	figma: Figma,
	indesign: Indesign,
	instagram: Instagram,
	logo: Logo,
	playCircle: PlayCircle,
};
