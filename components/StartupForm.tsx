"use client";
import { Input } from "./ui/input";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [pitch, setPitch] = useState("");
    const isPending = false;
    return (
        <form action={() => {}} className="startup-form">
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
