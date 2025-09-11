import { useState } from "react"

const Input = ({ value, onChange, placeholder, label, type }) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div>
            <label className="text-[13px] text-slate-800">{label}</label>
            <div className="input-box">
                <input
                    className="w-full bg-transparent outline-none"
                    type={type == "password" ? showPassword ? "text" : "password" : type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e)}
                />
            </div>
        </div>
    )
}

export default Input