import { ReactEventHandler, useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
export const UserProfile = () => {
  const [ isEditing, setIsEditing ] = useState(true)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    defaultValues: {
      address: 'kunithala'
    }
  });

  const handleDisableChange = () => {
    setIsEditing(!isEditing)
  }

  const onSubmit = (data : React.FormEvent<HTMLFormElement>) => {
    console.log(data);
  }

  return (
    <div className="container flex justify-center">
      <div className="flex flex-col pt-5 px-12">
        <img
          src="https://github.com/shadcn.png"
          className="border rounded-full w-[9em] justify-center ms-10"
          alt="user"
        />
        <div className="flex flex-col gap-1 pt-4">
          <div className="rounded-md pb-2 flex border-b-2">
            <label className="px-2 py-2 tracking-widest font-semibold">Email :</label>
            <input
              type="text"
              className="px-2 ps-4 tracking-widest font-semibold border-none outline-none"
              defaultValue={'sahalvavoor313@gmail.com'}
              disabled
              

            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} >
          <div className="rounded-md  flex-col  flex border-b-2 pb-2">
            <div>
            <label className="px-2 tracking-widest font-semibold">Address:</label>
            <input
              type="text"
              className="px-2 tracking-widest font-semibold border-none outline-none"
              {...register("address", {
                required: true,
                minLength: 5 
              })}
              disabled={isEditing}
              name="address"
              
          
             
            />
            </div>
          
        
                {!isEditing && errors.address?.type === "required" && (
                <p className="tracking-widest text-xs text-red-500">address is required.</p>
              )}
              {!isEditing && errors.address?.type === "minLength" && (
                <p className="tracking-widest text-xs text-red-500">address is not valid.</p>
              )}
          </div>
          <div className="border-b-2 flex rounded-md pb-2 ">
            <label className="px-2 tracking-widest font-semibold">Country:</label>
            <input
              type="text"
              className="px-2 tracking-widest font-semibold border-none outline-none"
              {...register('country', {
                required: true,
                minLength: 4
              })}
              disabled={isEditing}
              name="country"
              defaultValue={'coutry'}
            />
              {!isEditing && errors.country && errors.country.type === "required" && (
                <p className="tracking-widest text-xs text-red-500">country is required.</p>
              )}
              {!isEditing && errors.country && errors.country.type === "minLength" && (
                <p className="tracking-widest text-xs text-red-500">country is not valid.</p>
              )}
          </div>
          <div className="border-b-2 flex rounded-md pb-2 "  >
            <label className="px-2 tracking-widest font-semibold">State:</label>
            <input
              type="text"
              className="px-2 tracking-widest font-semibold border-none outline-none"
              disabled={isEditing}
              {...register('state')}
              name="state"
              defaultValue={'kerala'}
              
       
            />
          </div>
          <div className="border-b-2 flex rounded-md pb-2 ">
            <label className="px-2 tracking-widest font-semibold">Pincode:</label>
            <input
              type="text"
              className="px-2 tracking-widest font-semibold border-none outline-none"
              value={'pincodee'}
              {...register("pincode")}
              disabled={isEditing}
              name="pincode"
             
            />
          </div>
         {isEditing ? <Button className="mt-2 mb-3" onClick={handleDisableChange} >
            Edit Profile
          </Button> :<div className="flex flex-col gap-3"><button type='submit' className='rounded-md bg-indigo-600 px-4 py-1 font-semibold text-white tracking-wide' >Save</button>
          <button type='button' onClick={() => { setIsEditing(true)}} className=' rounded-md bg-white  text-sm font-semibold leading-6 text-gray-900 mr-2 border px-4 py-1 border-black-400' >Cancel</button>
          </div> }

          </form>
        </div>
      </div>
    </div>
  );
};
