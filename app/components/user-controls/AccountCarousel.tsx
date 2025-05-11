import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Path, useForm, UseFormReturn, FieldValues } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { createContext, useContext, useEffect, useState } from "react"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, LoginCarouselItem } from "../ui/carousel"
import { Card, CardHeader, CardTitle } from "../ui/card"
import { signIn, signUp, useSession } from "@/lib/auth-client"

const LogInFormSchema = z.object({
  logInEmail: z.string().email({ message: "Invalid email address" }),
  logInPassword: z.string().min(8, { message: "Password must be at least 8 characters long" }),
})

const SignUpFormSchema = z.object({
  signUpName: z.string().min(10, { message: "Name must be at least 10 characters long" }),
  signUpEmail: z.string().email({ message: "Invalid email address" }),
  signUpPassword: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  signUpConfirmPassword: z.string().min(8, { message: "Password must be at least 8 characters long" }),
}).superRefine((data, ctx) => {
  if (data.signUpPassword !== data.signUpConfirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Passwords do not match",
      path: ["signUpConfirmPassword"]
    });
  }
});

export const LogInForm = () => {
  const loginForm = useForm<z.infer<typeof LogInFormSchema>>({
    resolver: zodResolver(LogInFormSchema),
    defaultValues: {
      logInEmail: "",
      logInPassword: "",
    }
  })
  const logInFields: FieldConfigProps<z.infer<typeof LogInFormSchema>>[] = [
    { name: "logInEmail", label: "Email" },
    { name: "logInPassword", label: "Password", type: "password" },
  ];
  const onSubmit = async (data: z.infer<typeof LogInFormSchema>) => {
    console.log("log in data", data)
    signIn.email({ email: data.logInEmail, password: data.logInPassword })
    
  }
  return (
    <FormTemplate<z.infer<typeof LogInFormSchema>> onSubmit={onSubmit} form={loginForm} fields={logInFields} />
  )
}

export const SignUpForm = () => {
  const signUpForm = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      signUpName: "",
      signUpEmail: "",
      signUpPassword: "",
      signUpConfirmPassword: "",
    }
  })
  const signUpFields: FieldConfigProps<z.infer<typeof SignUpFormSchema>>[] = [
    { name: "signUpName", label: "Name" },
    { name: "signUpEmail", label: "Email" },
    { name: "signUpPassword", label: "Password", type: "password" },
    { name: "signUpConfirmPassword", label: "Confirm Password", type: "password" },
  ];
  async function onSubmit(data: z.infer<typeof SignUpFormSchema>){
    signUp.email({ email: data.signUpEmail, password: data.signUpPassword, name: data.signUpName })
  }
  return (
    <FormTemplate<z.infer<typeof SignUpFormSchema>> onSubmit={onSubmit} form={signUpForm} fields={signUpFields} />
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

interface FormTemplateProps<T extends FieldValues> {
  onSubmit: (data: T) => void | Promise<void>;
  fields: FieldConfigProps<T>[];
  form: UseFormReturn<T>;
}

export const FormTemplate = <T extends FieldValues>({ onSubmit, fields, form }: FormTemplateProps<T>) => {
  const { isSignUp } = useContext(CarouselContext)
  return (
    <Card className="p-4">
      <CardHeader className="pt-2 pb-0 px-0">
        <CardTitle className="text-2xl font-bold">{isSignUp ? "Create Account" : "Log In"}</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          {fields.map((fieldConfig: FieldConfigProps<T>) => (
            <TextField<T> key={fieldConfig.name} form={form} {...fieldConfig} />
          ))}
          <FormButtons form={form} />
        </form>
      </Form>
    </Card>
  )
}

interface FormButtonsProps<T extends FieldValues> {
  form: UseFormReturn<T>;
}

const FormButtons = <T extends FieldValues>({ form }: FormButtonsProps<T>) => {
  const { api: carousel, isSignUp } = useContext(CarouselContext)
  const isFormValid = form.formState.isValid
  function handleSwitchForm(){
    carousel?.scrollTo(isSignUp ? 0 : 1)
  }
  return (
    <div className="flex gap-2 mt-4">
      <Button className="w-32" type="submit" disabled={!isFormValid}>{isSignUp ? "Create Account" : "Log In"}</Button>
      <Button className="w-32" variant="secondary" type="button" onClick={handleSwitchForm}>{isSignUp ? "Return to login" : "Sign Up"}</Button>
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
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};


interface CarouselContextType {
  api: CarouselApi
  setApi: (api: CarouselApi) => void
  isSignUp: boolean
}
const CarouselContext = createContext<CarouselContextType>(undefined as unknown as CarouselContextType)
  
export const AccountCarousel = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [isSignUp, setIsSignUp] = useState(false)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      const current = api.selectedScrollSnap()
      setIsSignUp(current === 1)
    }

    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])
  
  return (
    <CarouselContext.Provider value={{ api, setApi, isSignUp }}>
      <Carousel setApi={setApi}>
        <CarouselContent className="">
          <LoginCarouselItem>
            <LogInForm />
          </LoginCarouselItem>
          <LoginCarouselItem>
            <SignUpForm />
          </LoginCarouselItem>
        </CarouselContent>
      </Carousel>
    </CarouselContext.Provider>
  )
}

