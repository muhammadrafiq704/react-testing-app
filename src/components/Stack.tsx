import type { PropsWithChildren } from "react"

type StackProps = PropsWithChildren & {
    orientation: "horizontal" | "vertical";
}

const Stack = ({ orientation, children }: StackProps) => {
    const orientatiosStyle: Record<StackProps["orientation"], React.CSSProperties> = {
        horizontal: {
            display: "flex",
            flexDirection: "row",
            gap: "16px",
        },
        vertical: {
            display: "flex",
            flexDirection: "column",
            gap: "16px",
        }
    };
    return (
        <div style={{ ...orientatiosStyle[orientation] }}>
            {children}
        </div>
    )
}

export default Stack
