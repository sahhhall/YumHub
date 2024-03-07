import { ReactEventHandler, useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useGetUserDetails } from "@/api/UserApi";
import { Link } from "react-router-dom";

export const UserProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { isLoading, user } = useGetUserDetails();
  const [isEditing, setIsEditing] = useState(true);

  if (isLoading) {
    return <span>Loading.....</span>;
  }

  const handleDisableChange = () => {
    setIsEditing(!isEditing);
  };

  // this for when click cancel button i want user info set default
  const onCancel = () => {
    setIsEditing(true);
    reset();
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault
    console.log(e);
    alert("succe")
  };

  return (
    <div className="container flex justify-center">
      <div className="flex flex-col pt-5 px-12">
        <img
          src={user?.picture}
          className="border rounded-full w-[9em] justify-center ms-10"
          alt="user"
        />
        <div className="flex flex-col gap-1 pt-4">
          <div className="rounded-md pb-2 flex border-b-2">
            <label className="px-2 py-2 tracking-widest font-semibold">
              Email :
            </label>
            <input
              type="text"
              className="px-2 ps-4 tracking-widest font-semibold border-none outline-none"
              defaultValue={user?.email}
              disabled
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md  flex-col  flex border-b-2 pb-2">
              <div>
                <label className="px-2 tracking-widest font-semibold">
                  Address:
                </label>
                <input
                  type="text"
                  className="px-2 tracking-widest font-semibold border-none outline-none"
                  {...register("address", {
                    required: true,
                    minLength: 5,
                  })}
                  disabled={isEditing}
                  name="address"
                  defaultValue={user?.address.street}
                />
              </div>

              {!isEditing && errors.address?.type === "required" && (
                <p className="tracking-widest text-xs text-red-500">
                  street address is required.
                </p>
              )}
              {!isEditing && errors.address?.type === "minLength" && (
                <p className="tracking-widest text-xs text-red-500">
                  street address is not valid.
                </p>
              )}
            </div>
            <div className="rounded-md  flex-col  flex border-b-2 pb-2">
              <div>
                <label className="px-2 tracking-widest font-semibold">
                  City:
                </label>
                <input
                  type="text"
                  className="px-2 tracking-widest font-semibold border-none outline-none"
                  {...register("city", {
                    required: true,
                  })}
                  disabled={isEditing}
                  name="city"
                  defaultValue={user?.address.city}
                />
              </div>

              {!isEditing && errors.city?.type === "required" && (
                <p className="tracking-widest text-xs text-red-500">
                  city is required.
                </p>
              )}
            </div>
            <div className="border-b-2 flex rounded-md pb-2 flex-col ">
              <div>
                <label className="px-2 tracking-widest font-semibold">
                  Country:
                </label>
                <input
                  type="text"
                  className="px-2 tracking-widest font-semibold border-none outline-none"
                  {...register("country", {
                    required: true,
                    minLength: 4,
                  })}
                  disabled={isEditing}
                  name="country"
                  defaultValue={user?.address.country}
                />
              </div>

              {!isEditing &&
                errors.country &&
                errors.country.type === "required" && (
                  <p className="tracking-widest text-xs text-red-500">
                    country is required.
                  </p>
                )}
              {!isEditing &&
                errors.country &&
                errors.country.type === "minLength" && (
                  <p className="tracking-widest text-xs text-red-500">
                    country is not valid.
                  </p>
                )}
            </div>

            {isEditing ? (
              <Button
                className="mt-2 mb-3 w-full"
                onClick={handleDisableChange}
              >
                Edit Profile
              </Button>
            ) : (
              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-4 py-1 font-semibold text-white tracking-wide"
                >
                  Save
                </button>
                <Link to="/user/account-settings"></Link>
                <button
                  type="button"
                  onClick={onCancel}
                  className=" rounded-md bg-white  text-sm font-semibold leading-6 text-gray-900 mr-2 border px-4 py-1 border-black-400"
                >
                  Cancel
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
