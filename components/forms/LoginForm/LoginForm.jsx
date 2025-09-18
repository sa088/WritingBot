import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .required("Email is required")
        .email("Please enter a valid email address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email address"
        ),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long")
        .max(50, "Password must not exceed 50 characters"),
});

const LoginForm = ({ onSubmit, loading = false }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onBlur",
        reValidateMode: "onChange",
    });

    const onFormSubmit = (data) => {
        console.log("Form data:", data);
        onSubmit && onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
            <Input
                label="Username"
                type="email"
                id="username"
                name="username"
                placeholder="Enter Email"
                {...register("email")}
                error={errors.email?.message}
                className="mb-6 text-sm md:text-base"
            />

            <Input
                label="Password"
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                {...register("password")}
                error={errors.password?.message}
                className="mb-6 text-sm md:text-base"
            />

            <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={loading}
                className="w-full mt-8"
            >
                {loading ? "Logging in..." : "Login"}
            </Button>
        </form>
    );
};

export default LoginForm;