import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      program,
      experience,
      motivation,
      linkedin,
      portfolio,
      additionalInfo
    } = body;

    // Validate required fields
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !program?.trim() || !motivation?.trim()) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically save to database or send email
    // For now, we'll just log the application
    console.log('Program application received:', {
      firstName,
      lastName,
      email,
      phone,
      program,
      experience,
      motivation,
      linkedin,
      portfolio,
      additionalInfo,
      timestamp: new Date().toISOString()
    });

    // In a real application, you might:
    // 1. Save to a database (e.g., MongoDB, PostgreSQL)
    // 2. Send confirmation email to applicant
    // 3. Send notification email to admin
    // 4. Integrate with CRM system

    return NextResponse.json(
      {
        message: 'Application submitted successfully! We\'ll review your application and get back to you within 5-7 business days.',
        applicationId: `APP-${Date.now()}`
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}