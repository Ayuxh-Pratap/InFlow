export function AuthInput({ label, error, ...props }) {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
                {label}
            </label>
            <input
                {...props}
                className={`input-gradient w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-gray-400 focus:border-[#00B8B8] focus:outline-none focus:ring-1 focus:ring-[#00B8B8] ${error ? 'border-red-500' : ''
                    }`}
            />
            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}
        </div>
    )
}

