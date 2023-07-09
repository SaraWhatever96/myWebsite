import type { Icon as LucideIcon } from "lucide-svelte";
import {
	Dribbble,
	FolderDown,
	PlayCircle,
	Instagram,
	Linkedin,
	ChevronDown
} from "lucide-svelte";
import Logo from "./Logo.svelte";
import AfterEffects from "./AfterEffects.svelte";
import Figma from "./Figma.svelte";
import Photoshop from "./Photoshop.svelte";
import Indesign from "./Indesign.svelte";
import Sketch from "./Sketch.svelte";
import Illustrator from "./Illustrator.svelte";
import Spline from "./Spline.svelte";
import Premiere from "./Premiere.svelte";

export type Icon = LucideIcon;

export const Icons = {
	afterEffects: AfterEffects,
	chevronDown: ChevronDown,
	download: FolderDown,
	dribbble: Dribbble,
	figma: Figma,
	illustrator: Illustrator,
	indesign: Indesign,
	instagram: Instagram,
	linkedin: Linkedin,
	logo: Logo,
	playCircle: PlayCircle,
	photoshop: Photoshop,
	premiere: Premiere,
	sketch: Sketch,
	spline: Spline,
};
