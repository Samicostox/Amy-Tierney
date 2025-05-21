import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, message, emailTo } = body;

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Log the email details (in a real app, you would send an actual email here)
    console.log('Sending email to:', emailTo);
    console.log('From:', email);
    console.log('Name:', name);
    console.log('Message:', message);

    // In a real implementation, you would use a service like SendGrid, Mailgun, etc.
    // Example with SendGrid would be:
    // await sendGrid.send({
    //   to: emailTo,
    //   from: 'your-verified-sender@example.com',
    //   subject: `New message from ${name}`,
    //   text: message,
    //   html: `<p>You have a new message from ${name} (${email}):</p><p>${message}</p>`,
    // });

    // For now, we'll just simulate a successful email send
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 