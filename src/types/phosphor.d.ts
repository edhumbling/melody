import '@phosphor-icons/react';

declare module "@phosphor-icons/react" {
  import { Icon } from "@phosphor-icons/react";
  export const Sparkle: Icon;
  export const Waveform: Icon;
  export const X: Icon;
  export const SpeakerHigh: Icon;
  export const SpeakerSlash: Icon;
}

declare module "@phosphor-icons/react/dist/ssr/*" {
  export * from "@phosphor-icons/react";
}

declare module "@phosphor-icons/react/dist/csr/*" {
  export * from "@phosphor-icons/react";
}
