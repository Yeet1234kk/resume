import * as React from "react";

// Minimal stubs for react-resizable-panels exports to avoid TypeScript runtime/type errors
// These are intentionally simple pass-through components.
export const PanelGroup = ({ children, ...props }: any) => <div {...props}>{children}</div>;
export const Panel = ({ children, ...props }: any) => <div {...props}>{children}</div>;
export const PanelResizeHandle = ({ children, ...props }: any) => <div {...props}>{children}</div>;
