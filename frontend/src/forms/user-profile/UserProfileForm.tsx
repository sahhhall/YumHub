import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LoadingButton } from '@/components/LoadinButton';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { Link } from 'react-router-dom';

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  addressLine: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.number().min(1, "Pincode must be required")
});

type userFormData = z.infer<typeof formSchema>;

interface Props {
  onSave: (userProfileData: userFormData) => void;
  isLoading: false;
}

export const UserProfileForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<userFormData>({
    resolver: zodResolver(formSchema)
  });

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSave)} className='bg-gray-50 rounded-lg'>
        <div>
          <h2 className='text-2xl ps-2 mb-1 pt-2'>User</h2>
          <FormDescription className='px-2 text-gray-500 text-xs tracking-wider'>This information will be displayed publicly so be careful what you share..</FormDescription>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className='px-2 mt-6'>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input autoComplete='none' {...field}  className='bg-white' />
              </FormControl>
            </FormItem>
          )}
        />
        <div className='flex mt-8  flex-col-2   md:flex-row gap-6 px-2 '>
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className='sm:w-[10rem] '>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input {...field}  className='bg-white' />
              </FormControl>
            </FormItem>
          )}
        />
              <FormField
          control={form.control}
          name="addressLine"
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input {...field}  className='bg-white' />
              </FormControl>
            </FormItem>
          )}
        />
        </div>
        <div className='px-2 md:flex-row sm:flex-col  mt-8 flex w-full '>
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem  className=' ' >
            <FormLabel>Country</FormLabel>
             <Select  onValueChange={field.onChange} defaultValue={field.value}>
             <FormControl className=' border border-black-400 w-[13rem] '>
                  <SelectTrigger className='bg-white block text-sm py-2 rounded-sm px-4 border-black-100 text-gray-900"'>
                    <SelectValue className='' placeholder={field.value || 'India'} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent  className='bg-gray-100 py-1 px-1 tracking-wide ' >
                 <SelectItem  value="Qatar" >Qatar</SelectItem>       
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="United Arab Emirates" >United Arab Emirates</SelectItem>
                  <SelectItem  value="Saudi Arabia"  >Saudi Arabia</SelectItem>
                </SelectContent>
             </Select>
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem className=' w-[14rem] ps-8'>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input {...field}  className='bg-white' />
              </FormControl>
            </FormItem>
          )}
        />
       
        </div>
        <FormField
          control={form.control}
          name="postalCode"
          render={({ field }) => (
            <FormItem className='mt-8 w-[12rem] ps-2'>
              <FormLabel>Pin code</FormLabel>
              <FormControl>
                <Input {...field}  className='bg-white' />
              </FormControl>
            </FormItem>
          )}
        />
        {isLoading ? <LoadingButton /> : <div className='flex justify-items-end justify-end px-5 mt-3 pb-3'>

     <Link to={'/'}>     <button type='button' className=' rounded-md bg-white  text-sm font-semibold leading-6 text-gray-900 mr-2 border px-4 py-1 border-black-400' >Cancel</button></Link>
        <button type='submit' className='rounded-md bg-indigo-600 px-4 py-1 font-semibold text-white tracking-wide' >Save</button>
        </div> }
      </form>
    </Form>
  );
}
