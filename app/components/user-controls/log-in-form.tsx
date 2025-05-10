import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Path, useForm, UseFormReturn, FieldValues } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { createContext, useContext, useEffect, useState } from "react"

const LogInFormSchema = z.object({
  logInEmail: z.string().email(),
  logInPassword: z.string().min(8),
})

const SignUpFormSchema = z.object({
  signUpName: z.string().min(1),
  signUpEmail: z.string().email(),
  signUpPassword: z.string().min(8),
  signUpConfirmPassword: z.string().min(8),
})

// Define concrete form return types
type LoginFormType = UseFormReturn<z.infer<typeof LogInFormSchema>>
type SignUpFormType = UseFormReturn<z.infer<typeof SignUpFormSchema>>

type LogInOrSignUpContextType = {
  isSignUp: boolean;
  setIsSignUp: (isSignUp: boolean) => void;
  // Use a union type for the form, and allow it to be initially null
  form: LoginFormType | SignUpFormType | null;
}

const LogInOrSignUpContext = createContext<LogInOrSignUpContextType | undefined>(undefined)

export const LogInOrSignUpForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  // Initialize form state with null
  const [form, setForm] = useState<LoginFormType | SignUpFormType | null>(null);

  const loginForm = useForm<z.infer<typeof LogInFormSchema>>({
    resolver: zodResolver(LogInFormSchema),
    defaultValues: {
      logInEmail: "",
      logInPassword: "",
    }
  })
  const signUpForm = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      signUpName: "",
      signUpEmail: "",
      signUpPassword: "",
      signUpConfirmPassword: "",
    }
  })

  useEffect(() => {
    setForm(isSignUp ? signUpForm : loginForm)
  }, [isSignUp, loginForm, signUpForm])

  

  if (!form) {
    return null;
  }

  return (
    <LogInOrSignUpContext.Provider value={{ isSignUp, setIsSignUp, form }}>
      { isSignUp ?
        <SignUpForm />
        :
        <LogInForm />
      }
    </LogInOrSignUpContext.Provider>
  )
}

interface FieldConfigProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type?: string;
}

interface TextFieldProps<T extends FieldValues> extends FieldConfigProps<T> {
  form: UseFormReturn<T>;
}

export const LogInForm = () => {
  const context = useContext(LogInOrSignUpContext)
  if (!context || !context.form) throw new Error("LogInForm must be used within LogInOrSignUpContext.Provider and form must be initialized")
  const form = context.form as LoginFormType

  function onSubmit(values: z.infer<typeof LogInFormSchema>) {
    console.log('LogInForm submitted with values:', values);
  }

  const fields: FieldConfigProps<z.infer<typeof LogInFormSchema>>[] = [
    { name: "logInEmail", label: "Email" },
    { name: "logInPassword", label: "Password", type: "password" },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {fields.map((fieldConfig) => (
          <TextField key={fieldConfig.name} form={form} {...fieldConfig} />
        ))}
        <FormButtons />
      </form>
    </Form>
  )
}

export const SignUpForm = () => {
  const context = useContext(LogInOrSignUpContext)
  if (!context || !context.form) throw new Error("SignUpForm must be used within LogInOrSignUpContext.Provider and form must be initialized")
  const form = context.form as SignUpFormType

  function onSubmit(values: z.infer<typeof SignUpFormSchema>) {
    console.log('SignUpForm submitted with values:', values);
  }

  const fields: FieldConfigProps<z.infer<typeof SignUpFormSchema>>[] = [
    { name: "signUpName", label: "Name" },
    { name: "signUpEmail", label: "Email" },
    { name: "signUpPassword", label: "Password", type: "password" },
    { name: "signUpConfirmPassword", label: "Confirm Password", type: "password" },
  ];

  return (
   <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {fields.map((fieldConfig) => (
          <TextField key={fieldConfig.name} form={form} {...fieldConfig} />
        ))}
        <FormButtons />
      </form>
    </Form>
  )
}

const FormButtons = () => {
  const context = useContext(LogInOrSignUpContext)
  if (!context || !context.form) throw new Error("FormButtons must be used within LogInOrSignUpContext.Provider and form must be initialized")
  const { isSignUp, setIsSignUp } = context

  return (
    <div className="flex gap-2 mt-4">
      <Button className="w-32" type="submit">{isSignUp ? "Create Account" : "Log In"}</Button>
      <Button className="w-32" variant="secondary" type="button" onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? "Return to log in" : "Sign Up"}</Button>
    </div>
  )
}

const TextField = <T extends FieldValues>(
  { form, name, label, type = "text" }: TextFieldProps<T>
) => {
  return (
    <FormField
      control={form.control}
      name={name} 
      render={({ field }) => {
        return (
          <FormItem className="my-2">
            <FormLabel className="text-sm font-medium">{label}</FormLabel>
            <FormControl className="w-full">
              <Input className="w-full" type={type} {...field} />
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};