
const Button = ({ text, onClick }: { text: string, onClick?: () => void }) => {
    return (
        <button onClick={onClick} style={{ padding: '10px 16px', fontSize: '16px', fontWeight: 700, borderRadius: '8px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', maxWidth: '150px' }}>
            {text}
        </button>
    )
}

export default Button
