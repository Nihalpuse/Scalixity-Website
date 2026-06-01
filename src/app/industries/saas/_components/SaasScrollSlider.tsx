// Re-export of the shared industry scroll slider so existing SaaS imports
// keep working. Logic lives in industries/_components/IndustryScrollSlider.
export {
  IndustryScrollSlider as SaasScrollSlider,
  SlideMedia,
} from "../../_components/IndustryScrollSlider";
export type { SliderSlide } from "../../_components/IndustryScrollSlider";
