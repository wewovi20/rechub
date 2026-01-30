import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      event,
      experience,
      expectations,
    } = body;

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !phone?.trim() || !event?.trim()) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For now, just log the registration
    // TODO: Set up proper email service and database storage
    console.log('Event registration:', {
      firstName,
      lastName,
      email,
      phone,
      event,
      experience,
      expectations,
      timestamp: new Date().toISOString()
    });

    // In a real application, you might:
    // 1. Send confirmation email
    // 2. Save to database
    // 3. Send notification to event organizers
    // 4. Handle payment if event has cost

    return NextResponse.json(
      { message: 'Registration successful! Check your email for confirmation details.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing event registration:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}