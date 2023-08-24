import type { Icon as LucideIcon } from "lucide-svelte";
import {
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	ChevronUp,
	Dribbble,
	FolderDown,
	Instagram,
	Linkedin,
	ExternalLink,
	ArrowRight,
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
import HandTap from "./HandTap.svelte";

export type Icon = LucideIcon;

export const Icons = {
	afterEffects: AfterEffects,
	arrowRight: ArrowRight,
	chevronDown: ChevronDown,
	chevronLeft: ChevronLeft,
	chevronRight: ChevronRight,
	chevronUp: ChevronUp,
	download: FolderDown,
	dribbble: Dribbble,
	externalLink: ExternalLink,
	figma: Figma,
	handTap: HandTap,
	illustrator: Illustrator,
	indesign: Indesign,
	instagram: Instagram,
	linkedin: Linkedin,
	logo: Logo,
	photoshop: Photoshop,
	premiere: Premiere,
	sketch: Sketch,
	spline: Spline,
};
