
type InputFieldProps = {
    type: string;
    placeholder: string;
    onChange: (value: string) => void;
    name: string;
    label: string;
    value?: string;
}

const InputField = ({ type, placeholder, onChange, name, label, value }: InputFieldProps) => {
    const inputStyle: React.CSSProperties = {
        padding: "12px 16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%",
        maxWidth: "400px",
        fontSize: "16px",
        outline: "none",
        transition: "border-color 0.3s",
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
            {label && <label htmlFor={name} aria-labelledby={label} style={{ fontSize: '24px', fontWeight: 700 }}>{label}</label>}
            <input
                id={name}
                type={type}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                name={name}
                value={value}
                style={{ ...inputStyle }}
            />
        </div>
    )
}

export default InputField
