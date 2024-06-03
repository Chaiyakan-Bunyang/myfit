import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Create a new response instance
  const response = NextResponse.json({ message: 'Logout Successful' });
  // Set the cookie to delete it
  response.cookies.set('access_token', '', {
    expires: new Date(0),
    path: '/',
    httpOnly: true,
    secure: true,
  });
  return response;
}
