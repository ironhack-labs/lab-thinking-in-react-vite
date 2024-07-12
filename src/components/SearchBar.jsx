import { Label, TextInput } from "flowbite-react";

export default function SearchBar({handleFilter, filter, checkbox, handleCheckbox}) {
  return (
    <>
    <div className="flex flex-col gap-4 text-center items-center justify-center ">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-gray" color="gray" value="Filter by name" />
        </div>
        <TextInput id="input-gray" placeholder="" required color="gray" value={filter} onChange={handleFilter} />
        <label htmlFor="checkbox" >only show in stock products
          <input type="checkbox" id="checkbox" className="checkbox checkbox-primary" value={checkbox} onChange={handleCheckbox} />
        </label>
      </div>
    </div>
    </>
  )
}
