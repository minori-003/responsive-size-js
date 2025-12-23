// configs.ts
// デフォルト設定定義
export const DEFAULT_SETTINGS ={
    rootFontSize:16,
    maxViewportWidth:1440,
    minViewportWidth:375,
    dpi: {
        web: 96,
        print: 300,
        legacy: 72,
    },
} as const;

export type DefaultSettings = typeof DEFAULT_SETTINGS;