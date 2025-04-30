"use client";
import { Input } from "./ui/input";
import { useActionState, useState } from "react";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { toast } from "sonner";
import { createPitch } from "@/lib/actions";
import { useRouter } from "next/navigation";

const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [pitch, setPitch] = useState("");
    const router = useRouter();

    const handleFormSubmit = async (prevState: any, formdata: FormData) => {
        try {
            const formValues = {
                title: formdata.get("title"),
                description: formdata.get("description"),
                category: formdata.get("category"),
                link: formdata.get("link"),
                pitch,
            };
            await formSchema.parseAsync(formValues);
            const result = await createPitch(prevState, formdata, pitch);
            if (result.status === "SUCCESS") {
                toast.success("Success", {
                    description: "Your startup has been submitted successfully",
                });
                router.push(`/startup/${result._id}`);
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = error.flatten().fieldErrors;

                setErrors(fieldErrors as unknown as Record<string, string>);

                toast.error("Error", {
                    description: "Please check your inputs and try again",
                });

                return {
                    ...prevState,
                    error: "Validation failed",
                    status: "ERROR",
                };
            }
            toast.error("Error", {
                description: "An unexpected error has occurred",
            });
            return {
                ...prevState,
                error: "An unexpected error has occurred",
                status: "ERROR",
            };
        }
    };
    const [state, formAction, isPending] = useActionState(handleFormSubmit, {
        error: "",
        status: "INITIAL",
    });
    return (
        <form action={formAction} className="startup-form">
            <div>
                <label htmlFor="title" className="startup-form_label">
                    Title
                </label>
                <Input
                    required
                    className="startup-form_input"
                    id="title"
                    name="title"
                    placeholder="Startup Title"
                />
                {errors.title && (
                    <p className="startup-form_error">{errors.title}</p>
                )}
            </div>
            <div>
                <label htmlFor="description" className="startup-form_label">
                    Description
                </label>
                <Textarea
                    required
                    className="startup-form_textarea"
                    id="description"
                    name="description"
                    placeholder="Startup Description"
                />
                {errors.description && (
                    <p className="startup-form_error">{errors.description}</p>
                )}
            </div>
            <div>
                <label htmlFor="category" className="startup-form_label">
                    Category
                </label>
                <Input
                    required
                    className="startup-form_input"
                    id="category"
                    name="category"
                    placeholder="Startup Category (Health, Tech, Education...)"
                />
                {errors.category && (
                    <p className="startup-form_error">{errors.category}</p>
                )}
            </div>
            <div>
                <label htmlFor="link" className="startup-form_label">
                    Image URL
                </label>
                <Input
                    required
                    className="startup-form_input"
                    id="link"
                    name="link"
                    placeholder="Startup Image URL"
                />
                {errors.link && (
                    <p className="startup-form_error">{errors.link}</p>
                )}
            </div>
            <div data-color-mode="light">
                <label htmlFor="pitch" className="startup-form_label">
                    Pitch
                </label>
                <MDEditor
                    id="pitch"
                    preview="edit"
                    height={300}
                    value={pitch}
                    onChange={(value) => setPitch(value as string)}
                    style={{
                        borderRadius: 20,
                        overflow: "hidden",
                    }}
                    textareaProps={{
                        placeholder: "Write your pitch here...",
                    }}
                    previewOptions={{
                        disallowedElements: ["style"],
                    }}
                    className="startup-form_editor"
                />
                {errors.pitch && (
                    <p className="startup-form_error">{errors.pitch}</p>
                )}
            </div>

            <Button className="startup-form_btn" type="submit">
                {isPending ? (
                    "Submitting..."
                ) : (
                    <>
                        Submit <Send className="ml-2 size-5" />
                    </>
                )}
            </Button>
        </form>
    );
};
export default StartupForm;
