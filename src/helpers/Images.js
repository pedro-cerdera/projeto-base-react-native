import LogoTextImage from "assets/images/logos/logo-contemplei.png";
import BackgroundImageSource from "assets/images/onboarding/background.png";
import ChartImage from "assets/images/onboarding/chart.png";
import VaultImage from "assets/images/onboarding/vault.png";
import WindowImage from "assets/images/onboarding/window.png";

const Images = {
  vault: VaultImage,
  window: WindowImage,
  chart: ChartImage,
  background: BackgroundImageSource,
  "logo-text": LogoTextImage,
};

export const getImageSource = image => {
  return Images[image];
};
