type FieldsType = {
    data: string
    children: JSX.Element
}
export default function Fields({ data, children }: FieldsType) {
    return (
        <div className="flex justify-start items-center bg-field py-4   w-[600px] my-10">
            <label className="w-[150px] text-center">{data} : </label>
            {children}
        </div>
    )
}
