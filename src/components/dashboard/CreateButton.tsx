
export const CreateButton = () => {
    return (
        <div>
            <button className="bg-[#EEF3FF] w-full rounded-md h-[250px] flex items-center justify-center hover:bg-[#E5EBFF] transition-colors">
            <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            </button>
        </div>
    )
}