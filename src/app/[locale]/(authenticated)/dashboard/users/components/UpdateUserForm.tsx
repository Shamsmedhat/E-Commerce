import { updateUserAction } from "@/lib/actions/users-actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ROLE } from "@/lib/constants/roles";
import { UserUiTable } from "@/lib/types/user";
import { useForm } from "react-hook-form";
import { LiaUserEditSolid } from "react-icons/lia";

export function UpdateUserForm({ row }: { row: UserUiTable }) {
  const { username, firstName, lastName, role, email, id } = row;
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      username,
      email,
      firstName,
      lastName,
      role,
    },
  });

  async function onUpdateSubmit(values) {
    const formUpdatedData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value !== undefined) {
        if (key === "role" && value in ROLE) {
          value = ROLE[value as keyof typeof ROLE];
        }
        formUpdatedData.append(key, String(value));
      } else {
        console.warn(
          `Value for key "${key}" is undefined and will be skipped.`,
        );
      }
    });
    // debugger;

    // Using .then and .catch instead of try-catch
    updateUserAction(formUpdatedData, id)
      .then((updatedUser) => {
        return updatedUser;
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-full !p-3">
          <LiaUserEditSolid size={15} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form
          className="grid gap-4 py-4"
          onSubmit={handleSubmit(onUpdateSubmit)}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              className="col-span-3"
              {...register("username")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              email
            </Label>
            <Input id="email" className="col-span-3" {...register("email")} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firstName" className="text-right">
              First name
            </Label>
            <Input
              id="firstName"
              {...register("firstName")}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastName" className="text-right">
              Last name
            </Label>
            <Input
              id="lastName"
              {...register("lastName")}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
              role
            </Label>
            <Input id="role" {...register("role")} className="col-span-3" />
          </div>

          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
