import type { Icon as LucideIcon } from "lucide-svelte";
import {
	ArrowLeft,
	ArrowRight,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	ChevronUp,
	FolderDown,
	ExternalLink,
	Dribbble,
	Instagram,
	Linkedin,
	MoreVertical,
	PanelLeft,
	ChevronsUpDown
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
import ShootingStar from "./ShootingStar.svelte";

export type Icon = LucideIcon;

export const Icons = {
	afterEffects: AfterEffects,
	arrowLeft: ArrowLeft,
	arrowRight: ArrowRight,
	chevronDown: ChevronDown,
	chevronLeft: ChevronLeft,
	chevronRight: ChevronRight,
	chevronsUpDown: ChevronsUpDown,
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
	moreVertical: MoreVertical,
	panelLeft: PanelLeft,
	photoshop: Photoshop,
	premiere: Premiere,
	shootingStar: ShootingStar,
	sketch: Sketch,
	spline: Spline,
};
