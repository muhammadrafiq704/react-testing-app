
type ButtonProps ={
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    size: "small" | "medium" | "large";
}

const Button = ({ children, onClick, variant = "primary", size = "medium" }: ButtonProps) => {
    const getBackgroundColor = () => {
        switch (variant) {
            case "primary":
                return "#007bff";
            case "secondary":
                return "#6c757d";
            default:
                return "#007bff";
        }
    };

    const getPadding = () => {
        switch (size) {
            case "small":
                return "8px 12px";
            case "medium":
                return "16px 20px";
            case "large":
                return "24px 28px";
            default:
                return "16px 20px";
        }
    };

    return (
        <button
            onClick={onClick}
            style={{
                padding: getPadding(),
                fontSize: "18px",
                fontWeight: 700,
                borderRadius: "8px",
                backgroundColor: getBackgroundColor(),
                color: "#fff",
                border: "none",
                cursor: "pointer",
            }}
        >
            {children}
        </button>
    )
}

export default Button
