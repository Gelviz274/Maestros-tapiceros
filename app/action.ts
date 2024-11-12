"use server";
import { sendEmail } from "@/lib/brevo";

export async function handleForm(formData: FormData) {
    const name = formData.get("name") as string;  // Aseguramos que 'name' es un string
    const email = formData.get("email") as string;  // Aseguramos que 'email' es un string
    const phone = formData.get("phone") as string;  // Aseguramos que 'phone' es un string
    const message = formData.get("message") as string;  // Aseguramos que 'message' es un string

    if (!name || !email || !phone || !message) {
        return console.log("Please enter all the fields");
    }
    console.log("Sending email...");
    console.log({ name, email, phone, message });

    // Llamamos a la función 'sendEmail' con los datos obtenidos
    await sendEmail({ name, email, phone, message });
}
