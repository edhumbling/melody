declare module 'next/types.js' {
  export type ResolvingMetadata = any;
  export type ResolvingViewport = any;
}

declare module 'next' {
  export type Metadata = {
    title?: string | { default: string; template: string };
    description?: string;
    keywords?: string | string[];
    authors?: any;
    creator?: string;
    publisher?: string;
    robots?: any;
    alternates?: any;
    icons?: any;
    openGraph?: any;
    twitter?: any;
    verification?: any;
    [key: string]: any;
  };

  export type Viewport = {
    width?: string | number;
    height?: string | number;
    initialScale?: number;
    minimumScale?: number;
    maximumScale?: number;
    userScalable?: boolean | 'yes' | 'no';
    viewportFit?: 'auto' | 'cover' | 'contain';
    themeColor?: string | { media: string; color: string }[];
    [key: string]: any;
  };

  export interface NextConfig {
    [key: string]: any;
  }
}

declare module 'next/link' {
  import * as React from 'react';
  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    as?: any;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
  }
  const Link: React.ComponentType<LinkProps>;
  export default Link;
}

declare module 'next/navigation' {
  export function usePathname(): string;
  export function useRouter(): any;
  export function useSearchParams(): any;
  export function useParams(): any;
  export function notFound(): never;
  export function redirect(url: string, type?: any): never;
}

declare module 'next/font/google' {
  export function Bodoni_Moda(options?: any): any;
  export function Plus_Jakarta_Sans(options?: any): any;
  export function Rye(options?: any): any;
}
