import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import {
  Form,
  FormControl,
  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const formSchema = z.object({
  username: z.string().min(2, { message: "please enter username" }),
  email: z.email({ message: "please enter email" }),
  password: z.string().min(6),
});
export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const register = (data:z.infer<typeof formSchema>)=>{
console.log(data)
  }
  return (
    <Dialog>
      <DialogTrigger>Register</DialogTrigger>
      <DialogContent className="bg-[#fafafa50] dark:bg-[#2a2a2a50] backdrop-blur-xl">
        <h2 className="text-2xl font-semibold text-center">Rgister GameHub</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(register)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant={"outline"} type="submit">Register</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
