export type ContactMessage = {
  name: string
  email: string
  subject: string
  message: string
}

export async function submitContactMessage(_message: ContactMessage): Promise<void> {
  void _message
  throw new Error('The contact form is not connected to a messaging service yet.')
}
