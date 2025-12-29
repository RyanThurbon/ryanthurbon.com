import { WithTitleDescription, WithURL } from "@/config/types";

export interface ToolboxItem extends WithTitleDescription, WithURL {
    svg: string;
    categories: string[];
}
