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
  email: z.email({ message: "please enter email" }),
  password: z.string().min(6),
});
export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const register = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };
  return (
    <Dialog>
      <DialogTrigger>Login</DialogTrigger>
      <DialogContent className="bg-[#fafafa50] dark:bg-[#2a2a2a50] backdrop-blur-xl">
        <h2 className="text-2xl font-semibold text-center">Login GameHub</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(register)} className="space-y-6">
       
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      {...field}
                    />
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
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button variant={"outline"} type="submit">
              Login
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
