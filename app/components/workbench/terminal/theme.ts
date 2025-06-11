import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--luminai-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--luminai-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--luminai-elements-terminal-textColor'),
    background: cssVar('--luminai-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--luminai-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--luminai-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--luminai-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--luminai-elements-terminal-color-black'),
    red: cssVar('--luminai-elements-terminal-color-red'),
    green: cssVar('--luminai-elements-terminal-color-green'),
    yellow: cssVar('--luminai-elements-terminal-color-yellow'),
    blue: cssVar('--luminai-elements-terminal-color-blue'),
    magenta: cssVar('--luminai-elements-terminal-color-magenta'),
    cyan: cssVar('--luminai-elements-terminal-color-cyan'),
    white: cssVar('--luminai-elements-terminal-color-white'),
    brightBlack: cssVar('--luminai-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--luminai-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--luminai-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--luminai-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--luminai-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--luminai-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--luminai-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--luminai-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
