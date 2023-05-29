const SectionHeader = ({subName, name, value}) => {
    return (
        <div className="w-1/4 mx-auto text-center">
            <p className="text-[#D99904] pb-4 text-sm">---{subName}---</p>
            <h3 className={value?'border-y-4 border-white py-4 text-white text-xl font-bold':'border-y-4 py-4 text-xl font-bold'}>{name}</h3>            
        </div>
    );
};

export default SectionHeader;